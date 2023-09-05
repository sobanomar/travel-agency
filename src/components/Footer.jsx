import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import footerMap from "../assets/footer-map.png";
import ButtonGeneric from "./utils/ButtonGeneric";

const Footer = () => {
  return (
    <Paper elevation={0} sx={{ background: "purple", color: "white" }}>
      <img
        className="absolute"
        src={footerMap}
        alt=""
        style={{ width: "73%", height: "auto" }}
      />
      <Container className="">
        <Box py={3}>
          <Grid container justifyContent="space-around">
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Agency
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus nisi quos nemo, placeat porro ex molestias magnam
                perferendis laudantium nobis voluptate enim est incidunt animi.
              </Typography>
              <Box display="flex">
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Page
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Packages
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Gallery
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Tour Guide
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                FaQ
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Links
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Terms of use
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Privacy Policy
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Contact Us
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <PhoneOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="body2">+12 756 234</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <MailOutlineOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="body2">mail@mail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <FmdGoodOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="body2">located here</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Booking Destination
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi, saepe!
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "purple", color: "white" }}
              >
                Booking Now
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box py={1} textAlign="center">
          <Typography variant="body2" sx={{ pt: 1 }}>
            Copyright @ 2023 | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
