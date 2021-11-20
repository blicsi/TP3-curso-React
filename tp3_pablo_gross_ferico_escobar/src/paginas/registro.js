import { TextField, Box, Typography, Button } from "@mui/material";
import firebase from "../config/firebase";
const Registro = () => {
    return ( 
    <> 
    <Box style={{boxShadow: "60px teal"}}>
        <div style={{marginTop:"11rem"}}>
            <Typography  variant="h5" style={{color:"black", marginTop:"1rem" , marginLeft:"40rem"}}> Register </Typography>
            <div style={{marginLeft:"36rem", marginTop:"1rem"}}>
                 <TextField id="outlined-basic" label="Email" variant="outlined" size="small" />
            </div>
            <div style={{marginLeft:"36rem", marginTop:"1rem"}}>
                 <TextField id="outlined-basic" label="Nombre y Apellido" variant="outlined" size="small"/>
            </div>
            <div style={{marginLeft:"36rem", marginTop:"1rem"}}>
                 <TextField id="outlined-basic" label="Password" variant="outlined" size="small"/>
            </div>
            <div style={{marginLeft:"36rem", marginTop:"1rem"}}>
                 <TextField id="outlined-basic" label="Confirmar Password" variant="outlined" size="small"/>
            </div>
            <div style={{marginLeft:"41rem", marginTop:"1rem"}}>
            <Button>Login</Button>
            </div>
        </div>
    </Box>
    </>
     );
}
export default Registro;