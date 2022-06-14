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
      <CardActionArea href='/Informazioni'>
        <CardMedia
          component="img"
          height="140"
          image={require('../images/Card1.png')}
          alt="una ruspa"
        />
        <CardContent sx={{ height : "180px"}}>
          <div gutterBottom className='s700' variant="Poppins" component="div">
            INFORMAZIONI
          </div>
          <div className='s400' variant="Poppins" color="white">
          informazioni veloci riguardanti l’argomento della card in modo da spiegare velocemente di cosa si tratterà
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href='/Informazioni' variant= 'contained' size="small" 
        onMouseEnter={event => onMouseOver(event)}  sx={{background: "#212121"}}>
          Scopri di più
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}