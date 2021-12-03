import { TextField, Box, Typography, Button, FormControl, FormLabel, FormHelperText, Input, FormGroup, Checkbox, Alert } from "@mui/material";
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
    console.log("data", data);
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
        alert("registro exitoso")
      }
    } catch (e) {
      console.log("error", e.code);
      if (e.code === "auth/email-already-in-use") {
        alert("El email esta registrado");
      }
    }
  };
/*
<Input type="text" register={{...register("nombre",{required:true})}}/>
*/


  return (
    <>  
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup >
          <FormLabel>Nombre</FormLabel>
            <Controller  name="nombre" control={control} rules={{required:true}} register={{...register("nombre",{required:true})}}  render={({ field }) => <Input {...field} type="text" />}/>
              {errors.nombre && <FormHelperText>El campo es obligatorio</FormHelperText>}
    
          <FormLabel>Apellido</FormLabel>
            <Controller name="apellido" control={control} rules={{required:true}} register={{...register("apellido",{required:true})}}  render={({ field }) => <Input {...field} type="text" />}/>
          
          <FormLabel>Email</FormLabel>
            <Controller name="email" control={control} rules={{required:true}} register={{...register("email",{required:true})}}  render={({ field }) => <Input {...field} type="email" />}/>     
            
          <FormLabel>Contraseña</FormLabel>
            <Controller name="password" control={control} rules={{required:true}} register={{...register("password",{required:true})}}  render={({ field }) => <Input {...field} type="password" />}/>        
              {errors.password?.type==="required" && <FormHelperText>El campo es obligatorio</FormHelperText>}
              {errors.password?.type==="minLength" && <FormHelperText>Debe completar al menos 6 caracteres</FormHelperText>} 
           <Input type="submit" value="Registrarse"/> 
                    
        </FormGroup>
      </form>
    </>
  );
};
export default Registro;