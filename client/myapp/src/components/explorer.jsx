import React from "react";
import { Typography, Box, Button } from "@mui/material";

import Header from "./header";
import FooterComponent from "./footer";
import AItools from "./aitools";

const Explorer = () => {
  const containerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    margin: "20px auto",
    border: "1px solid #ccc",
    borderRadius: "14px",
    width: "50%",
  };

  return (
    <>
      <Header />
      <Box
        style={containerStyle}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Typography variant="h2">AI Tools Explorer</Typography>
        <Button
          variant="contained"
          href="/addtool"
          sx={{
            margin: "20px auto",
            width: "30%",
          }}
        >
          Add New AI Tool
        </Button>
      </Box>
      <AItools />
      <FooterComponent />
    </>
  );
};

export default Explorer;
