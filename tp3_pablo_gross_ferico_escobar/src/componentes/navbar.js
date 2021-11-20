import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

const Navbar = () => {
    
    function handleButtononClicl(){
        
    }
    
    return ( 
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Carniceria "Bos Taurus"
            </Typography>
            <Button color="inherit" onClick= {() => handleButtonClick} to="/">Home</Button>
            <Button color="inherit" onClick={Link} to="/login">Login</Button>
            <Button color="inherit">Registro</Button>
            </Toolbar>
            </AppBar>
        </Box>
        </>
     );
}
export default Navbar;