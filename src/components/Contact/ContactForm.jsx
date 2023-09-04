import React, { useEffect } from "react";
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

const ContactForm = () => {
  const styles = (theme) => ({
    field: {
      margin: "10px 0",
    },
    countryList: {
      ...theme.typography.body1,
    },
  });

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
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <Container className="m-20">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom style={{ fontWeight: "400" }}>
            Get In Touch
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name*"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name*"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
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
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Your Email*"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  id="message"
                  name="message"
                  label="Your Message*"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ height: "400px" }}>
            {/* Replace with your Google Map */}
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
