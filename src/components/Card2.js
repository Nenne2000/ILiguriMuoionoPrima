import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';

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
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            IL BEIGUA
          </Typography>
          <Typography variant="body2" color="white">
          Il comprensorio del Parco Naturale Regionale del Beigua, la più vasta area naturale protetta della Liguria
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href='/IlBeigua' variant= 'contained' size="small" sx={{background: "#212121"}}>
          Scopri di più
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}