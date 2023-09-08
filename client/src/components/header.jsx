import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AI Tools Explorer
        </Typography>
        <Button color="inherit" href="/explorer">
          Explorer
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit" href="/contact">
          Contact
        </Button>
        <Button color="inherit" href="/signout">
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
