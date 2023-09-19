import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import PhoneInputField from "../Contact/PhoneInputField";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BookingForm = ({ destinations, packages }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dateData, setDateData] = useState([]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
      destination: "",
      date: "",
      packageType: "",
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
      console.log(values);
      // const url = "http://35.173.181.194:8000/contactus/";
      // const data = {
      //   email: values.email,
      //   full_name: values.fullName,
      //   message: values.message,
      //   phone_number: values.phone,
      // };

      // fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return response.json();
      //   })
      //   .then((responseData) => {
      //     setFormSubmitted(true);
      //     formik.setSubmitting(false);
      //     console.log("Response Data:", responseData);
      //   })
      //   .catch((error) => {
      //     console.error("Fetch Error:", error);
      //   });
    },
  });

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
          `http://35.173.181.194:8000/booking/destination/${filteredDestination[0]?.id}/date/`
        );
        const responseData = await dateResponse.json();
        setDateData([responseData.date]);
      }
    }
    getData();
  }, [formik.values.destination]);

  const renderSelectField = (name, label, options) => (
    <FormControl fullWidth>
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
        error={formik.touched[name] && Boolean(formik.errors[name])}
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

  const renderDateSelectField = (name, label, options) => (
    <FormControl fullWidth>
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
        error={formik.touched[name] && Boolean(formik.errors[name])}
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

  const renderTextField = (name, label, type = "text", multiline = false) => (
    <TextField
      fullWidth
      id={name}
      name={name}
      label={label}
      type={type}
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
                {renderSelectField("destination", "Destination", destinations)}
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
                    <Button variant="contained" color="primary" type="submit">
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
