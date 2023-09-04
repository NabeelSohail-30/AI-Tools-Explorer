import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";
import "./CSS/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Container className="not-found-content">
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for does not exist.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go Back to Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
