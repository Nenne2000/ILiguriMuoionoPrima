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
      <CardActionArea href='/Documenti'>
        <CardMedia
          component="img"
          height="140"
          image={require('../images/Card4.png')}
          alt="pila di documenti"
        />
        <CardContent sx={{ height : "180px"}}>
          <div className='s700' gutterBottom variant="Poppins" component="div">
            DOCUMENTI
          </div>
          <div className='s400' variant="Poppins" color="white">
          Rassegne stampa e documentazione ufficiale legata ai consensi e alle richieste di analisi dell’area di interesse.
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href='/Documenti' variant= 'contained' size="small" onMouseEnter={event => onMouseOver(event)} sx={{background: "#212121"}}>
          Scopri di più
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}