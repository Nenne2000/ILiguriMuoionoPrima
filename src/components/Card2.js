import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';

const onMouseOver = event => {
  const el = event.target;
  let black = "#212121";
  el.style.backgroundColor = black;
};

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345}}>
      <div style={{ color:'white', backgroundColor: "#484848"}}>
      <CardActionArea href='/IlBeigua'>
        <CardMedia
          component="img"
          height="140"
          image={require('../images/Card2.png')}
          alt="un prato"
        />
        <CardContent sx={{ height : "180px"}}>
          <div className='titolocard' gutterBottom variant="Poppins" component="div">
            IL BEIGUA
          </div>
          <div className='button' variant="Poppins" color="white">
          Il comprensorio del Parco Naturale Regionale del Beigua, la più vasta area naturale protetta della Liguria
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href='/IlBeigua' variant= 'contained' size="small" onMouseEnter={event => onMouseOver(event)} sx={{background: "#212121"}}>
          Scopri di più
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}