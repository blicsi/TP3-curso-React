import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../images/logo.png" ;
import { Link, makeStyles } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <img src={logo} alt="Logo" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BOS TAURUS
            </Typography>
              <Button color="inherit"><Link to="/" style={{textDecoration: 'none', color:"White"}}>Home</Link></Button>
              <Button color="inherit"><Link to="/login" style={{textDecoration: 'none', color:"White"}}>login</Link></Button>
              <Button color="inherit"><Link to="/registro" style={{textDecoration: 'none', color:"White"}}>registro</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
