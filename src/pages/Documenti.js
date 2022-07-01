import React from "react";
import GlobalStyle from "../components/Globalstyle";
import background from "../images/documenti.png";
import Grid from '@mui/material/Grid';
import img from "../images/pag4.png";
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

        <Grid item xs={12}  md={7} color="white" paddingRight={10}>
        <div style={{paddingLeft: '10px',paddingRight:'10%'}}>
          <div className="s700" variant='Poppins'>
          <h1>RASSEGNE STAMPA</h1>
          </div>
          <div className="s400" variant='Poppins'>
          3 Marzo 2021, Richiesta          
          <br/><br/>

          <img className="fotodocumento" src={img} alt=""/>
          </div>
          </div>
        
        

          <Box m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">
          <Button href='' variant= 'contained' size="small" style={{paddingRight:'5%'}}
        onMouseEnter={event => onMouseOver(event)}  sx={{background: "#212121"}}>
          <div className="button" variant='Poppins'>
          VAI AL DOCUMENTO INTEGRALE
          </div>
        </Button>
        </Box>
        </Grid>
        <Grid item xs={12}  md={1} backgroundColor="black"></Grid>
    </Grid>
 
    </>
    );
}

export default Documenti;