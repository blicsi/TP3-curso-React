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
            <Typography variant="h6" component={Link} to="/" style={{color:"white", textDecoration:"none"}} sx={{ flexGrow: 1 }}>
              BOS TAURUS
            </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/login">login</Button>
              <Button color="inherit" component={Link} to="/registro">registro</Button>
              <Button color="inherit" component={Link} to="/altaProducto">agregar producto</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;