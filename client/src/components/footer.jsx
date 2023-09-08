import React from "react";
import { Typography, IconButton, Grid, Box, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterComponent = () => {
  const footerStyles = {
    backgroundColor: "#333", // Background color
    padding: "20px 0", // Add padding to the footer
    color: "#fff", // Text color
    width: "100%",
    position: "relative",
    marginTop: "60px",
  };

  const iconStyles = {
    color: "#fff", // Icon color
  };

  return (
    <Paper elevation={3} style={footerStyles}>
      {/* Row 1: Text */}
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid item>
          <Typography variant="body2">
            Developed and Maintained By Nabeel Sohail
          </Typography>
        </Grid>
      </Grid>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid item>
          <IconButton>
            <FacebookIcon style={iconStyles} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <TwitterIcon style={iconStyles} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <InstagramIcon style={iconStyles} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <LinkedInIcon style={iconStyles} />
          </IconButton>
        </Grid>
      </Grid>
      <Box mt={1} textAlign="center">
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} AI Tools Explorer. All Rights
          Reserved.
        </Typography>
      </Box>
    </Paper>
  );
};

export default FooterComponent;
