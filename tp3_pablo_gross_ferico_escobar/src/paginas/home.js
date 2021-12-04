import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { grid, padding } from '@mui/system';
import Card from "../componentes/Card"
import firebase from "../config/firebase"
import React,{useState,useEffect} from "react"


const Home = () => {
  
  const [productos,setProductos] = useState([])
  const [loading,setLoading] = useState(true)
  const [reload,setReload]=useState(true)   
  async function request(){
      try{
          const querySnapshot = await firebase.db.collection("productos")
          .get()
          if(querySnapshot.docs){
              setProductos(querySnapshot.docs)
              setLoading(false)
              setReload(false)
          }
      }catch(e){

      }
      
  }
  
  useEffect(
      ()=>{
          if(reload)request()
      },[reload]
  )
  
  return (  
  <>
  <div style={{backgroundColor:"lightskyblue", padding:"8px"}}>
  <Typography textAlign="center" variant="h5" style={{marginTop:"7px", marginBottom:"7px", color:"white", fontWeight:"500"}}>Nuestros Productos</Typography>
  </div>
  
  <Grid container sx={{m:10}} rowSpacing={1}>   
      {productos.map(producto=><Card key={producto.id} datos={{...producto.data(),id:producto.id}}/>)}
  </Grid>
  </>
  )
}
 
export default Home;