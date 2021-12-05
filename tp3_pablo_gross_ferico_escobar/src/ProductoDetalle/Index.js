import { Typography } from "@mui/material"
import React from "react"
const ProductoDetalle = (props) =>{
        const {datos} = props
        console.log(datos.title)
    
        return(
            <>
            <Typography variant="h1">{datos.title}</Typography>
            <Typography>precio: ${datos.price}</Typography>
            <Typography>sku: {datos.sku}</Typography>
            <Typography>{datos.description}</Typography>
            </>
        )
      
    
    
    
}
export default ProductoDetalle