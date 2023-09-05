import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

import Header from "./header";
import FooterComponent from "./footer";

const AddAIToolForm = () => {
  const [toolName, setToolName] = useState("");
  const [toolCategory, setToolCategory] = useState("");
  const [toolDescription, setToolDescription] = useState("");
  const [toolURL, setToolURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to your server's API to add the new AI Tool
    console.log({ toolName, toolCategory, toolDescription, toolURL });
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          margin: "80px auto",
          border: "1px solid #ccc",
          borderRadius: "10px",
          width: "50%",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}
        >
          Add New AI Tool
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="AI Tool Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={toolName}
            onChange={(e) => setToolName(e.target.value)}
          />
          <TextField
            label="Tool Category"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={toolCategory}
            onChange={(e) => setToolCategory(e.target.value)}
          />
          <TextField
            label="Tool Description"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={toolDescription}
            onChange={(e) => setToolDescription(e.target.value)}
          />
          <TextField
            label="Tool URL"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={toolURL}
            onChange={(e) => setToolURL(e.target.value)}
          />
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              width="50%"
              sx={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
      <FooterComponent />
    </>
  );
};

export default AddAIToolForm;
