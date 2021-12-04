import React,{useState,useEffect} from "react"
import { useParams } from "react-router"
import firebase from '../config/firebase'
import ProductoDetalle from "../ProductoDetalle/Index"

const Detalle = () => {
  const [producto,setProducto] = useState(false)
  const [loading,setLoading] = useState(true)
  const {id}=useParams()
  console.log(id)
  useEffect(
      ()=>{
          async function request(){
              try{
                  const response = await firebase.db.doc("card/"+id)
                  .get()
                  if(response){
                      setProducto(response)
                      setLoading(false)
                  }
              }catch(e){

              }
              
          }
          request()
          
      },[id]
  )
  
  return ( 
      <>
        {producto && <ProductoDetalle datos={producto.data}/>}
      </>
     );
  }
   
  export default Detalle;
  