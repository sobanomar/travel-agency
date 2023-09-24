import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import PhoneInputField from "./PhoneInputField";
import { CircularProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BASE_URL } from "../../Constants/URL";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const url = `${BASE_URL}contactus/`;
      const data = {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        message: values.message,
        phone_number: values.phone,
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
          console.log("Response Data:", responseData);
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    },
  });

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
    <Container className="m-20">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className="text-4xl font-semibold md:text-5xl mb-10">
            Get In Touch
          </div>

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {renderTextField("firstName", "First Name*")}
              </Grid>
              <Grid item xs={6}>
                {renderTextField("lastName", "Last Name*")}
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
              </Grid>
              <Grid item xs={6}>
                {renderTextField("email", "Your Email*")}
              </Grid>
              <Grid item xs={12}>
                {renderTextField("message", "Your Message*", "text", true)}
              </Grid>
              <Grid item xs={12}>
                <Box mt={2}>
                  <div className="flex">
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ borderRadius: "20px" }}
                      type="submit"
                    >
                      {formik.isSubmitting ? (
                        <CircularProgress color="inherit" size={"80%"} />
                      ) : formSubmitted ? (
                        <CheckCircleIcon />
                      ) : (
                        "Send Message"
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
        <Grid item xs={12} md={6} mt={2}>
          <div style={{ height: "400px" }}>
            <LoadScript googleMapsApiKey="AIzaSyAPkTZqSTX4xwSo2BOO6GsSa53TAACPuvI">
              <GoogleMap
                mapContainerStyle={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "20px",
                }}
                center={{ lat: 31.26894097832134, lng: 72.31581794185071 }}
                zoom={15}
              >
                <Marker
                  position={{
                    lat: 31.26894097832134,
                    lng: 72.31581794185071,
                  }}
                />
              </GoogleMap>
            </LoadScript>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
