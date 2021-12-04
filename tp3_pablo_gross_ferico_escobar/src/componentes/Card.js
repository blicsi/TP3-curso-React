import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ImgMediaCard(props) {
  const {datos,handleDelete}=props
  
  return (
    <Card sx={{maxWidth: 345, m:"20"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {datos.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${datos.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={"/card/"+datos.id}>Detalle</Button>
      </CardActions>
    </Card>
  );
}