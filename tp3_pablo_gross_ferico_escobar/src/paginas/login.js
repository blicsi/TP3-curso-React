import { TextField, Box, Typography, Button, FormGroup, FormLabel, Input, FormHelperText, Alert } from "@mui/material";
import React,{useState,useContext} from "react";
import { Controller, useForm } from "react-hook-form";
import {useLocation} from "react-router-dom"
import firebase from "../config/firebase"
import AuthContext from "../Context/AuthContext";

function Login (){
    const { register,control, handleSubmit,formState:{errors} } = useForm();
    const [loading,setLoading] = useState(false)
    const context = useContext(AuthContext)
    const [alert,setAlert] = useState({variant:"",text:""})
    const onSubmit = async (data) => {
        setLoading(true)
        console.log("data",data);
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            if(responseUser.user.uid){
                const userInfo = await firebase.db.collection("usuarios")
                .where("userId","==",responseUser.user.uid)
                .get()
                console.log("userInfo",userInfo.docs[0]?.data())
                setLoading(false)
                setAlert({variant:"success",text:"Login exitoso"})
            //  context.loginUser(userInfo.docs[0]?.data())
            }
        }catch(e){
            console.log("error",e)
            setLoading(false)
            setAlert({variant:"warning",text:"Error no se pudo logear"});
        }
        
    }
    
    
    return ( 
    <> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <FormLabel>Email</FormLabel>
                    <Controller name="email" control={control} rules={{required:true}} register={{...register("email",{required:true})}} render={({ field }) => <Input {...field} type="email" />}/>
                
                <FormLabel>Password</FormLabel>
                    <Controller name="password" control={control} rules={{required:true}} register={{...register("password",{required:true})}}  render={({ field }) => <Input {...field} type="password" />}/>        
                    {errors.password?.type==="required" && <FormHelperText>El campo es obligatorio</FormHelperText>}
                    {errors.password?.type==="minLength" && <FormHelperText>Debe completar al menos 6 caracteres</FormHelperText>}
                
                <Input type="submit" value="Login"/> 
                <Alert severity={alert.variant} >{alert.text}</Alert> 
            </FormGroup>
        </form>
    </>
     );
}
export default Login;
