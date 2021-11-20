import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { padding } from '@mui/system';
import Card from "../componentes/Card"

const Home = () => {
  return (  
  <>
  <div style={{backgroundColor:"lightskyblue", padding:"8px"}}>
  <Typography textAlign="center" variant="h5" style={{marginTop:"7px", marginBottom:"7px", color:"white", fontWeight:"500"}}>Nuestros Productos</Typography>
  </div>
  <Grid container spacing={2} style={{paddingTop:"15px"}}>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
  <Grid container item xs={2} spacing={1}>
    <Card />
  </Grid>
</Grid>
  </>
  )
}
 
export default Home;