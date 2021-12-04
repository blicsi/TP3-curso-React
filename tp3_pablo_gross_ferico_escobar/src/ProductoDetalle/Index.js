import { Typography } from "@mui/material"
import React from "react"
function ProductoDetalle (props){
        const {datos} = props
        console.log(props.datos)
    
        return(
            <>
            <Typography variant="h1">{datos.title}</Typography>
            <Typography>precio= ${datos.price}</Typography>
            <Typography>{datos.sku}</Typography>
            <Typography>{datos.description}</Typography>
            
            <p>$ </p>
            </>
        )
      
    
    
    
}
export default ProductoDetalle