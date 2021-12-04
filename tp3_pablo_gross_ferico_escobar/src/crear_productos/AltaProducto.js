import React,{useState,useEffect} from "react"
import { Controller, useForm } from "react-hook-form";
import firebase from "../config/firebase"
import { Alert, FormGroup, FormHelperText, FormLabel, Input } from "@mui/material";


function AltaProducto (){
    //console.log(firebase.db)
    const { register, handleSubmit,control,formState:{errors} } = useForm();
    
    const onSubmit = async (data) => {
        console.log("data",data);
        try{
            const document = await firebase.db.collection("productos").add(data)
            console.log(document)
         
        }catch(e){
            console.log("error",e)
            
        }
        
    }
    return(
        <div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <FormLabel>Nombre</FormLabel>
                    <Controller  name="nombre" control={control} rules={{required:true}} register={{...register("title",{required:true})}}  render={({ field }) => <Input {...field} type="text" />}/>
                    {errors.nombre && <FormHelperText>El campo es obligatorio</FormHelperText>}
            
                <FormLabel>Precio</FormLabel>
                    <Controller name="precio" control={control} rules={{required:true}} register={{...register("price",{required:true})}}  render={({ field }) => <Input {...field} type="number" />}/>
                    {errors.precio?.type==="required" && <FormHelperText>El campo es obligatorio</FormHelperText>}
                <FormLabel>Descripcion</FormLabel>
                    <Controller name="descripcion" control={control} rules={{required:true}} register={{...register("description",{required:true})}}  render={({ field }) => <Input {...field} type="text" />}/>     
                    {errors.descripcion?.type==="required" && <FormHelperText>El campo es obligatorio</FormHelperText>}
                <FormLabel>SKU</FormLabel>
                    <Controller name="sku" control={control} rules={{required:true}} register={{...register("sku",{required:true})}}  render={({ field }) => <Input {...field} type="number" />}/>        
                    {errors.sku?.type==="required" && <FormHelperText>El campo es obligatorio</FormHelperText>} 
                <Input type="submit" value="Agregar Producto"/> 
            </FormGroup>

        
        </form>
        </div>
    )
      
    
    
    
}
export default AltaProducto