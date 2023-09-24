import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PhoneInputField from "../Contact/PhoneInputField";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/URL";

const BookingForm = ({ destinations, packages }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dateData, setDateData] = useState([]);

  const { bookingId } = useParams();
  //Converting booking id from string to number for filtering
  const bookingIdNumber = parseInt(bookingId);

  // Filtering destinations based on booking id
  let idFilteredDestination = null;
  if (bookingId) {
    idFilteredDestination = destinations?.find((destination) => {
      return destination.id === bookingIdNumber;
    });
  }

  // Setting filtered auto booking destination in the destinaitons.
  if (idFilteredDestination) {
    destinations = [idFilteredDestination];
  }

  // Initializing formik values, validation and submit form logic
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
      destination: "",
      packageType: "",
      date: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      destination: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
      packageType: Yup.string().required("Required"),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      const url = `${BASE_URL}booking/confirm/`;
      const destIndex = destinations.find(
        (destination) => values.destination === destination.name
      );
      const packageIndex = packages.find(
        (pkg) => values.packageType === pkg.name
      );
      // console.log("destination:", destIndex, "package:", packageIndex);

      const data = {
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        destination: destIndex.id,
        package_type: packageIndex.id,
        date: values.date,
        message: values.message,
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((responseData) => {
          setFormSubmitted(true);
          formik.setSubmitting(false);
          toast.success("Your booking has been created", {
            position: "bottom-right", // You can change the position if needed
            autoClose: 5000, // 5000 milliseconds (5 seconds)
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
              backgroundColor: "purple", // Set the background color to purple
              color: "white",
            },
          });
          // console.log("Response Data:", responseData);
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    },
  });

  useEffect(() => {
    // Setting auto-booking destination in formik value
    idFilteredDestination &&
      formik.setFieldValue("destination", destinations[0].name);
  }, [idFilteredDestination]);

  // Fetching dates based on the selected destination
  useEffect(() => {
    const selectedDestination = formik.values.destination;
    let filteredDestination = null;

    if (destinations) {
      filteredDestination = destinations.filter((destination) => {
        return destination.name === selectedDestination;
      });
    }

    async function getData() {
      if (filteredDestination) {
        const dateResponse = await fetch(
          `${BASE_URL}/booking/destination/${filteredDestination[0]?.id}/date/`
        );
        const responseData = await dateResponse.json();
        setDateData([responseData.date]);
      }
    }
    getData();
  }, [formik.values.destination]);

  // Render function for input fields
  const renderSelectField = (name, label, options, disable) =>
    options && (
      <FormControl
        fullWidth
        error={formik.touched[name] && Boolean(formik.errors[name])}
        defaultValue={options[0]?.name}
        color="secondary"
      >
        <InputLabel
          id={name + "-label"}
          sx={{
            color:
              formik.touched[name] && Boolean(formik.errors[name])
                ? "#B90E0A"
                : "",
          }}
        >
          {label}*
        </InputLabel>
        <Select
          disabled={Boolean(disable)}
          labelId={name + "-label"}
          label={label}
          id={name}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {options &&
            options.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
        </Select>
        {formik.touched[name] && Boolean(formik.errors[name]) && (
          <div className="text-xs mt-1 mx-4 text-red-700">Required</div>
        )}
      </FormControl>
    );

  // Render function for date input field
  const renderDateSelectField = (name, label, options) => (
    <FormControl
      fullWidth
      error={formik.touched[name] && Boolean(formik.errors[name])}
      color="secondary"
    >
      <InputLabel
        id={name + "-label"}
        sx={{
          color:
            formik.touched[name] && Boolean(formik.errors[name])
              ? "#B90E0A"
              : "",
        }}
      >
        {label}*
      </InputLabel>
      <Select
        labelId={name + "-label"}
        label={label}
        id={name}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
      {formik.touched[name] && Boolean(formik.errors[name]) && (
        <div className="text-xs mt-1 mx-4 text-red-700">Required</div>
      )}
    </FormControl>
  );

  // Render function for text field
  const renderTextField = (name, label, type = "text", multiline = false) => (
    <TextField
      fullWidth
      id={name}
      name={name}
      label={label}
      type={type}
      color="secondary"
      variant="outlined"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      multiline={multiline}
    />
  );

  return (
    <Container className="m-5 md:m-20">
      <ToastContainer />
      <Grid container spacing={3}>
        <Grid item xs={24} md={12}>
          <div className="text-center font-semibold text-purple-500 my-2 ">
            Booking
          </div>
          <div className="text-2xl sm:text-4xl text-center font-semibold md:text-5xl my-4 mb-5 md:mb-10">
            Time To Book Your Holiday
          </div>

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {renderTextField("fullName", "Full Name*")}
              </Grid>
              <Grid item xs={6}>
                {renderTextField("email", "Your Email*")}
              </Grid>
              <Grid item xs={6}>
                <PhoneInputField
                  label="Your Phone*"
                  value={formik.values.phone}
                  onChange={(phone) => formik.setFieldValue("phone", phone)}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Phone Number"
                  required
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
                {formik.touched.phone && Boolean(formik.errors.phone) && (
                  <div className="text-xs mt-1 mx-4 text-red-700">Required</div>
                )}
              </Grid>
              <Grid item xs={6}>
                {renderSelectField(
                  "destination",
                  "Destination",
                  destinations,
                  bookingId
                )}
              </Grid>
              <Grid item xs={12}>
                {renderDateSelectField("date", "Date", dateData)}
              </Grid>
              <Grid item xs={12}>
                {renderSelectField("packageType", "Package Type", packages)}
              </Grid>
              <Grid item xs={12}>
                {renderTextField(
                  "message",
                  "Your Message (Optional)",
                  "text",
                  true
                )}
              </Grid>
              <Grid item xs={12}>
                <Box mt={2}>
                  <div className="flex">
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      disabled={formSubmitted}
                      style={{ borderRadius: "20px" }}
                    >
                      {formik.isSubmitting ? (
                        <CircularProgress color="inherit" size={"80%"} />
                      ) : formSubmitted ? (
                        <CheckCircleIcon />
                      ) : (
                        "Book Now"
                      )}
                    </Button>
                    <p className="text-black font-semibold mx-2 my-1">
                      {formSubmitted
                        ? "We have received your message. Our team will contact you shortly"
                        : ""}
                    </p>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingForm;
