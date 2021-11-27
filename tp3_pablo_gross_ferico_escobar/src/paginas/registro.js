import { TextField, Box, Typography, Button, FormControl, FormLabel, FormHelperText, Input, FormGroup } from "@mui/material";
import firebase from "../config/firebase";
import react, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";

const Registro = () => {
  const {
    register,
    handleSubmit,
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
      if (e.code == "auth/email-already-in-use") {
        alert("El email esta registrado");
      }
    }
  };
/*
          {errors.contraseña?.type==="required" && <span>El campo es obligatorio</span>}
          {errors.contraseña?.type==="minLength" && <span>Debe completar al menos 6 caracteres</span>}      
*/
  return (
    <>  
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <FormGroup label="email" type="email"></FormGroup>
      
      <FormControl style={{marginLeft:"20px"}}> 
        <FormLabel>Nombre</FormLabel>
        <Input type="text" register={{...register("nombre",{required:true})}}></Input>{errors.nombre && <FormHelperText>El campo es obligatorio</FormHelperText>}
      </FormControl>
      <FormControl style={{marginLeft:"20px"}}>
        <FormLabel>Apellido</FormLabel>
        <Input type="text" register={{...register("apellido",{required:true})}}></Input>      
      </FormControl>
      <FormControl style={{marginLeft:"20px"}}>  
        <FormLabel>email</FormLabel>
        <Input type="email" register={{...register("email",{required:true})}}></Input>
      </FormControl>
      <FormControl style={{marginLeft:"20px"}}>  
        <FormLabel>contraseña</FormLabel>
        <Input type="password" register={{...register("password",{required:true,minLength:2})}}></Input> 
          {errors.password?.type==="required" && <FormHelperText>El campo es obligatorio</FormHelperText>}
          {errors.password?.type==="minLength" && <FormHelperText>Debe completar al menos 6 caracteres</FormHelperText>}
      </FormControl>  
      <Button type="submit" variant="contained" color="">registrarse</Button>
      
      </form>
    </>
  );
};
export default Registro;