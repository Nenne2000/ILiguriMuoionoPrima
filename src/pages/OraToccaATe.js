import React from "react";
import GlobalStyle from "../components/Globalstyle";
import img1 from "../images/pag3_img1.png";
import img2 from "../images/pag3_img2.png";
import background from "../images/yourturn.png";
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
        <img src={background} alt="un prato" style={{objectFit:"cover", windth:"100%", height:"100%"}}/>
        <Typography paddingLeft={10} style={{fontSize: "80px", color:"white", textAlign:"left", position:"absolute", 
                    top:"10", bottom:"0", left:"0", right:"0", height:"fit-content", margin:"auto"}}>ORA TOCCA A TE</Typography>
    </article>

    <Grid
      container
      spacing={4}
      justify="center"
      >

        <Grid item xs={12}  md={3} backgroundColor="white">
          <div className="App" style={{ backgroundColor: "white" , textAlign:"justify", paddingRight:"20px"}}> 
          <List>
          <Link to="/" style={{textDecoration: 'none' }}>
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
            <Link to="/Informazioni" style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText style={{color: '#484848'}}>Info</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/IlBeigua" style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText style={{color: '#484848'}}>Il Beigua</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/OraToccaATe" style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText style={{color: '#484848'}}>Ora tocca a te</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/Documenti" style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText style={{color: '#484848'}}>Documenti</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
        </List>
          </div>
        </Grid>

        <Grid item xs={12}  md={9} color="white" paddingRight={10}>
        <div className="testoh">
          <br/><br/>
          <h1>SCARICA.<br/>STAMPA.<br/>DIFFONDI.</h1>
          <Typography color="common.white">
          Aiutaci a spargere la voce!<br/>
          Fai sì che altre persone come te possano venire a conoscenza di questa situazione.<br/>
          In quest’area puoi scaricare il kit da stampare per diffondere il messaggio.
          </Typography>
          <br/>
          </div>

          <div>
          <img src={img1} alt="" width="850" height="650"/>
          </div>

          <div>
          <br/>
          <Typography color="common.white">
          Nel kit puoi trovare:<br/>
          volantino nero<br/>
          volantino bianco<br/>
          1 pagina con 8 adesivi neri<br/>
          1 pagina con 8 adesivi bianchi
          </Typography>
          <br/>
          </div>

          <div>
          <img src={img2} alt="" width="650" height="650"/>
          </div>

          <div>
            <Typography color="common.white">
            Varazze. E’ prevista per domani, 13 aprile, l’udienza di merito presso il Tar Liguria sulla legittimità del decreto del dirigente regionale alle attività estrattive della Regione Liguria, emesso nel febbraio 2021, relativo al permesso di ricerca mineraria in aree esterne (Monte Antenna) del comprensorio del Parco Beigua, nei comuni di Urbe e Sassello. Lo ricordano le sezioni liguri di Lac, Lipu e Wwf, che da sempre si battono per evitare l’avvio dell’attività di estrazione del minerale.
            </Typography>
          </div>

          <Box m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">
          <Button variant= 'contained' size="small" 
        onMouseEnter={event => onMouseOver(event)}  sx={{background: "#212121"}}>
          <Link to="/logoQR.png" target="_blank" download style={{ textDecoration: 'none', color: 'white'}}>
          SCARICA IL  PACCHETTO
          </Link>
        </Button>
        </Box>
        </Grid>
    </Grid>

    </>
    );
}

export default IlBeigua;