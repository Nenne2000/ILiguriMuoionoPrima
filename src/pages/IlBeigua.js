import React from "react";
import GlobalStyle from "../components/Globalstyle";
import background from "../images/immagginebbbrutta.png";
import img1 from "../images/pag2_img1.jpg";
import img2 from "../images/pag2_img2.png";
import Grid from '@mui/material/Grid';
import {
  Button,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";

const onMouseOver = event => {
  const el = event.target;
  let black = "#212121";
  el.style.backgroundColor = black;
};

function IlBeigua() {

    return (
    <>
    <GlobalStyle />
    <article style={{height:"100%", width:"100%", position:"relative", overflow:"hidden"}}>
        <div className="row">
        <img className="sfondi" src={background} alt="un prato" />
        </div>
        <div className="titolo">
                      <div className="s900" variant='Poppins'>
                      IL BEIGUA
                      </div>
                      </div>
    </article>

    <Grid
      container
      spacing={4}
      justify="center"
      >

        <Grid item xs={12}  md={3} backgroundColor="white"> 
        <div className="drawer"> 
          <List>
          <Link to="/" style={{textDecoration: 'none', color:"#7fb801" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>
                    <div className="list" variant='Poppins'>
                    HOME
                    </div>
                    </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/Informazioni" style={{ textDecoration: 'none', color:"#7fb801" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>
                  <div className="list" variant='Poppins'>INFORMAZIONI</div>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/IlBeigua" style={{ textDecoration: 'none', color:"#7fb801" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>
                  <div className="list" variant='Poppins'>IL BEIGUA</div>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/OraToccaATe" style={{ textDecoration: 'none', color:"#7fb801" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>
                  <div className="list" variant='Poppins'>TOCCA A TE</div>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/Documenti" style={{ textDecoration: 'none', color:"#7fb801" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>
                  <div className="list" variant='Poppins'>DOCUMENTI</div>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
        </List>
        </div>
        </Grid>

        <Grid item xs={12}  md={1} backgroundColor="black"></Grid>

        <Grid item xs={12}  md={7} color="white">
        <div style={{paddingLeft: '10px',paddingRight:'10%'}}>
          <div className="s700" variant='Poppins'>
          <h1>IL PARCO NATURALE</h1>
          </div>
          <div className="s400" variant='Poppins'>
          Il comprensorio del Parco Naturale Regionale del Beigua, la più vasta area naturale protetta della Liguria, custodisce gelosamente la storia geologica della nostra regione, raccontata attraverso affioramenti rocciosi, mineralizzazioni, giacimenti fossiliferi e spettacolari forme modellate senza sosta per effetto degli agenti esogeni. Per l'eccezionale patrimonio geologico presente, nel marzo 2005 il comprensorio del Beigua è entrato a far parte delle reti internazionali come Geoparco Europeo e Mondiale.        
          <br/><br/>
          <img className="beiguapano" src={img1} alt=""/>
          <br/>
          <br/>
          Il Geoparco comprende l'intera superficie classificata come "Parco Naturale Regionale del Beigua" oltre ad una vasta porzione di territorio funzionalmente connessa al medesimo Parco. Di fatto il Beigua Geopark rappresenta un comprensorio formato da 10 territori comunali che interessano due diverse province (Genova e Savona). Complessivamente il territorio del Beigua Geopark si estende per 39.230 ettari coinvolgendo i comuni di: Arenzano, Campo Ligure, Cogoleto, Genova, Masone, Rossiglione, Sassello, Stella, Tiglieto e Varazze.
          <br/>
          <br/>
          <img className="foto" src={img2} alt=""/>
          </div>
        

          <Box m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">
          <Button href='http://www.parcobeigua.it/' variant= 'contained' size="small" 
        onMouseEnter={event => onMouseOver(event)}  sx={{background: "#212121"}}>
          <div className="button" variant='Poppins'>
          VAI AL SITO UFFICIALE
          </div>
        </Button>
        </Box>
        </div>
        </Grid>
        <Grid item xs={12}  md={1} backgroundColor="black"></Grid>
    </Grid>

    </>
    );
}

export default IlBeigua;