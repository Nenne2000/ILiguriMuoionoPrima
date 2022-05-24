import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            INFORMAZIONI
          </Typography>
          <Typography variant="body2" color="text.secondary">
          informazioni veloci riguardanti l’argomento della card in modo da spiegare velocemente di cosa si tratterà
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}