import React from "react";
import GlobalStyle from "../components/Globalstyle";
import background from "../images/documenti.png";
import Grid from '@mui/material/Grid';
import {
    Button,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";

const onMouseOver = event => {
    const el = event.target;
    let black = "#212121";
    el.style.backgroundColor = black;
  };

function Documenti() {

    return (
    <>
    <GlobalStyle />
    <article style={{height:"100%", width:"100%", position:"relative", overflow:"hidden"}}>
        <div className="row">
        <img className="sfondi" src={background} alt="un prato" />
        </div>
        <div className="titolo">
                      <div className="s900" variant='Poppins'>
                      DOCUMENTI
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
            <Link to="/OraToccaATe" style={{ textDecoration: 'none' , color:"#7fb801"}}>
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
        <div style={{paddingLeft: '10%',paddingRight:'10%'}}>
          <div className="s700" variant='Poppins'>
          <h1>RASSEGNE STAMPA</h1>
          </div>
          <div className="s400" variant='Poppins'>
           È arrivata l’attesa sentenza del Tar della Liguria che ha preso in esame i tre ricorsi presentati a vario titolo per quanto riguarda le ricerche minerarie nella vasta area del Beigua.
           <br/><br/>Una sentenza triplice che accoglie il ricorso delle associazioni ambientaliste per la tutela della zona speciale di conservazione, respinge quello presentato dalla Compagnia Europea del Titanio sui limiti imposti e in parte respinge anche il ricorso presentato da comuni e altre associazioni che chiedevano un diniego totale.
          <br/><br/>
          </div>
          <Box m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">
          <Button href='https://www.ivg.it/2022/05/titanio-sul-beigua-il-tar-respinge-ricorso-di-cet-e-regione-illegittimo-il-permesso-di-ricerca-mineraria/'
            variant= 'contained' size="small"
            onMouseEnter={event => onMouseOver(event)}  sx={{background: "#212121"}}>
          <div className="button" variant='Poppins'>
            LEGGI L'ARTICOLO DI IVG
          </div>
          </Button>
          </Box>
          
          <Box m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">
          <Button href='https://www.regione.liguria.it/area-stampa/archivio-comunicati-stampa-della-giunta/item/33524-sentenza-tar-parco-beigua.html'
            variant= 'contained' size="small"
            onMouseEnter={event => onMouseOver(event)}  sx={{background: "#212121"}}>
          <div className="button" variant='Poppins'>
          COMUNICATO STAMPA
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

export default Documenti;