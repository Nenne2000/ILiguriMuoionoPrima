import React from "react";
import GlobalStyle from "../components/Globalstyle";
import img1 from "../images/pag3_img1.jpg";
import img2 from "../images/pag3_img2.jpg";
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
        <div className="row">
        <img className="sfondi" src={background} alt="un prato" />
        </div>
        <Typography paddingLeft={10} style={{fontSize: "80px", color:"white", textAlign:"left", position:"absolute", 
                    top:"10", bottom:"0", left:"0", right:"0", height:"fit-content", margin:"auto"}}>
                      <div className="s900" variant='Poppins'>
                      ORA TOCCA A TE
                      </div>
                      </Typography>
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
                  <div className="list" variant='Poppins'>ORA TOCCA A TE</div>
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

        <Grid item xs={12}  md={7} color="white" paddingRight={10}>
        <div style={{paddingLeft: '16px'}}>
          <div className="s700" variant='Poppins'>
          <h1>SCARICA.<br/>STAMPA.<br/>DIFFONDI.</h1><br/>
          </div>
          <div className="s400" variant='Poppins'>
          Aiutaci a spargere la voce!<br/>
          Fai sì che altre persone come te possano venire a conoscenza di questa situazione.<br/>
          Scarica e stampa il kit per diffondere il messaggio.
          </div>
          <br/>

          <div className="centro">
          <img className="fotooratoccate" src={img1} alt=""/>
          </div>

          <br/>
          <div className="s700" variant='Poppins'>
          Nel kit trovi:<br/>
          </div>
          <div className="s400" variant='Poppins'>
          2 Volantini<br/>
          8 Adesivi neri<br/>
          8 Adesivi bianchi
          </div>
          <br/>

          <div className="centro">
          <img className="fotooratoccate" src={img2} alt=""/>
          </div>
          </div>

          <Box m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">
          <Button variant= 'contained' size="small" 
        onMouseEnter={event => onMouseOver(event)}  sx={{background: "#212121"}}>
          <Link to="/logoQR.png" target="_blank" download style={{ textDecoration: 'none', color: 'white'}}>
          <div className="button" variant='Poppins'>
          SCARICA IL  PACCHETTO
          </div>
          </Link>
        </Button>
        </Box>
        </Grid>
        <Grid item xs={12}  md={1} backgroundColor="black"></Grid>
    </Grid>
    </>
    );
}

export default IlBeigua;