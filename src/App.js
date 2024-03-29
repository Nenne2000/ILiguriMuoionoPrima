import React, {useEffect } from "react";
import GlobalStyle from "./components/Globalstyle";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import { HashRouter as Router , Routes , Route } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Timer from './components/Timer';

import IlBeigua from './pages/IlBeigua';
import Informazioni from './pages/Informazioni';
import OraToccaATe from './pages/OraToccaATe';
import Documenti from './pages/Documenti';

import ScrollToTop from './components/ScrollToTop';

import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
const TRACKING_ID = "G-6S8QD5JS0H";
ReactGA.initialize(TRACKING_ID);

function App() {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (

    <Router basename="/">
      <ScrollToTop/>
      <div>
        <GlobalStyle />
        <Navbar />

        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path='/IlBeigua' element={ <IlBeigua /> } />
          <Route path='/Informazioni' element={ <Informazioni /> } />
          <Route path='/OraToccaATe' element={ <OraToccaATe /> } />
          <Route path='/Documenti' element= { <Documenti /> } />
        </Routes>

        <Footer />
      </div>
    </Router>


  );
}


const Home = () => {

  const MORTE = ["I LIGURI", "MUOIONO", "PRIMA."];
  const FOCACCIA = ["ADDIO", "FOCACCIA."];
  const PESTO = ["ADDIO", "PESTO."];
  const ESTINZIONE = ["LIGURI", "IN VIA DI", "ESTINZIONE."]
  const MINACCE = [MORTE, FOCACCIA, PESTO, ESTINZIONE];
  var x = Math.floor(Math.random() * 4);

  return (
    <>
      <GlobalStyle />

        <div style={{ padding:"35px", background:"#212121", lineHeight:"1"}}> 
          <div className="s900" variant="Poppins" display="block"> 
            {MINACCE[x][0]} <br /> {MINACCE[x][1]} <br /> {MINACCE[x][2]} 
          </div>
        </div>

      <Grid
      container
      spacing={4}
      justify="center"
      style={{ padding:"30px" }}
      >

        <Grid item xs={12}  md={6}>
          <div style={{ backgroundColor: "#484848" , textAlign:"left", padding:"20px"}}> 
              <div className="s600">Perchè?</div>
                <div className="s400">
                Il comprensorio del parco del Beigua, la più vasta area naturale protetta della Liguria, è la sede di un vasto giacimento di titanio.<br/>
                Per l’estrazione di quest’ultimo occorre distruggere completamente il monte Tarinè, questo procedimento porterebbe alla formazione di grandi quantità di polveri sottili che renderebbero la vita impossibile in tutta la Liguria e nel basso Piemonte.
              </div>
          </div>
        </Grid>

        <Grid item xs={12}  md={6}>
          <div className="s600">
            TEMPO DI LETTURA DEL SITO:
          </div>
          <div className="s900" style={{ textAlign: "center"}}>
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
