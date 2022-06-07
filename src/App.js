import React from "react";
import GlobalStyle from "./components/Globalstyle";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Timer from './components/Timer';
import Typography from '@mui/material/Typography';

import IlBeigua from './pages/IlBeigua';

function App() {
  return (

    <Router>
      <div>
        <GlobalStyle />
        <Navbar />

        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path='/IlBeigua' element={ <IlBeigua /> } />
        </Routes>

        <Footer />
      </div>
    </Router>


  );
}


const Home = () => {

  const MORTE = ["I LIGURI", "MUOIONO", "PRIMA."];
  const FOCACCIA = ["ADDIO", "FOCACCIA"];
  const PESTO = ["ADDIO", "PESTO"];
  const ESTINZIONE = ["LIGURI", "IN VIA DI", "ESTINZIONE"]
  const MINACCE = [MORTE, FOCACCIA, PESTO, ESTINZIONE];
  var x = Math.floor(Math.random() * 4);

  return (
    <>
      <GlobalStyle />

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

        <Grid item xs={12}  md={6} color="white">
          <Typography variant= 'h4' color="white">
            Capirai tutto tra:
          </Typography>
          <div>
            <Timer />

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
        <Card2 />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card3 />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card4 />
      </Grid>
    </Grid>

    </>
  );
};



export default App;
