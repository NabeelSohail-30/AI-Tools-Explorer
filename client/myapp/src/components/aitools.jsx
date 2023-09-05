import React from "react";
import { Grid } from "@mui/material";

const AItools = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Grid item>xs=2</Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default AItools;
