import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.proveeduriapiaf.com.ar/wp-content/uploads/5K4A9741.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nico Troll
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget diam est. Sed sed ligula massa. Aenean non congue erat. Praesent et dignissim sapien. Aliquam tortor ante, molestie eu tincidunt ut, dignissim sit amet lectus. Phasellus at elit vel enim feugiat euismod. Maecenas nec arcu at augue aliquam dictum. Cras porta leo orci, non tempor risus imperdiet eget. Aenean quis nibh a risus tempus porttitor ut non metus. Pellentesque fermentum ex lorem, eget pretium nisi feugiat id. Etiam volutpat justo quis bibendum rutrum. Etiam eu dictum arcu. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Detalle</Button>
      </CardActions>
    </Card>
  );
}