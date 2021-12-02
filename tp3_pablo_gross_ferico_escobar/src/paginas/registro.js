import { TextField, Box, Typography, Button, FormControl, FormLabel, FormHelperText, Input, FormGroup, Checkbox } from "@mui/material";
import firebase from "../config/firebase";
import react, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation } from "react-router";

const Registro = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

 const [loading,setLoading]=useState(false);
 const [alert,setAlert]=useState({variant:"",text:""})

  const onSubmit = async (data) => {
    try {
      const responseUser = await firebase.auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("user", responseUser.user.uid);
      if (responseUser.user.uid) {
        const document = await firebase.db.collection("usuarios").add({
          nombre: data.nombre,
          apellido: data.apellido,
          userId: responseUser.user.uid,
        });
        console.log("document", document);
        setLoading(false)
        setAlert({variant:"success",text:"Registro exitoso"})
      }
    } catch (e) {
      console.log("error", e.code);
      if (e.code === "auth/email-already-in-use") {
        alert("El email esta registrado");
      }
    }
  };

  return (
    <>  
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup >
          
        <FormLabel>Nombre</FormLabel>
          <Controller name="nombre" control={control} rules={{required:true}} render={({field})=><Input/>}>
            
              <Input type="text" register={{...register("nombre",{required:true})}}></Input>{errors.nombre && <FormHelperText>El campo es obligatorio</FormHelperText>}
          </Controller>
         
          <FormControl component="fieldset" style={{marginLeft:"20px"}}>
              <FormLabel>Apellido</FormLabel>
              <Input type="text" register={{...register("apellido",{required:true})}}></Input>      
          </FormControl>
         
          <FormControl component="fieldset" style={{marginLeft:"20px"}}>  
              <FormLabel>Email</FormLabel>
              <Input type="email" register={{...register("email",{required:true})}}></Input>
          </FormControl>
          
          <FormControl component="fieldset" style={{marginLeft:"20px"}}>  
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" register={{...register("password",{required:true,minLength:2})}}></Input> 
              {errors.password?.type==="required" && <FormHelperText>El campo es obligatorio</FormHelperText>}
              {errors.password?.type==="minLength" && <FormHelperText>Debe completar al menos 6 caracteres</FormHelperText>}
          </FormControl>  
          
          <Button margin="dense" type="submit" variant="contained" color="">registrarse</Button>
        </FormGroup>
      </form>
    </>
  );
};
export default Registro;