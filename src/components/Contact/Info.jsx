import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const Info = () => {
  return (
    <Paper elevation={0} sx={{ background: "white" }}>
      <Container>
        <Box py={3}>
          <Grid container justifyContent="space-around">
            <Grid item xs={12} sm={6} md={3}>
              <Box display="flex" alignItems="center">
                <PhoneOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="body1">+123456789</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box display="flex" alignItems="center">
                <EmailOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  visitingmyfriendtravels@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box display="flex" alignItems="center">
                <FmdGoodOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="body1">Your Location</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box display="flex" alignItems="center">
                <PublicOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  visitingmyfriendtravels.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default Info;
