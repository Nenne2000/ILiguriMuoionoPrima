import React from "react";
import GlobaStyle from "./components/Globalstyle";
import Navbar from "./components/Navbar"
import Card from "./components/Card";
import Typography from '@mui/material/Typography';
import { padding } from "@mui/system";
import CountdownTimer from './components/CountdownTimer'
import "./countdown.css"


import Grid from '@mui/material/Grid';

const App = () => {

  const THREE_DAYS_IN_MS = 3*24*60*1000;
  const NOW_IN_MS = new Date().getTime();

  const MORTE = ["I LIGURI", "MUOIONO", "PRIMA."];
  const FOCACCIA = ["ADDIO", "FOCACCIA"];
  const PESTO = ["ADDIO", "PESTO"];
  const ESTINZIONE = ["LIGURI", "IN VIA DI", "ESTINZIONE"]
  const MINACCE = [MORTE, FOCACCIA, PESTO, ESTINZIONE];
  var x = Math.floor(Math.random() * 4);

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
      <GlobaStyle />
      <Navbar/>
      
        <div className="App" style={{ padding:"35px", background:"#212121"}}> 
          <Typography variant="h3" color="common.white" display="block"> 
            {MINACCE[x][0]} <br /> {MINACCE[x][1]} <br /> {MINACCE[x][2]} 
          </Typography>
        </div>

      <Grid
      container
      spacing={4}
      justify="center"
      style={{ padding:"30px" }}
      >

        <Grid item xs={12}  md={6}>
          <div className="App" style={{ backgroundColor: "#484848" , textAlign:"justify", padding:"20px"}}> 
          <Typography color="common.white"> 
          Perchè? <br />
          Il comprensorio del parco del Beigua, la più vasta area naturale protetta della Liguria, è la sede di un vasto giacimento di titanio.
          Per l’estrazione di quest’ultimo occorre distruggere completamente il monte Tarinè, questo procedimento porterebbe alla formazione di grandi quantità di polveri sottili che renderebbero la vita impossibile in tutta la Liguria e nel basso Piemonte.
          </Typography>   
          </div>
        </Grid>

        <Grid item xs={12}  md={6}>
          <div>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </div>
        </Grid>

    </Grid>

    <Grid
      container
      spacing={4}
      justify="center"
      style={{ padding:"30px" }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
    </Grid>

    </>
  );
}

export default App;
