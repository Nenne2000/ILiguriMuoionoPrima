import React from "react";
import GlobalStyle from "../components/Globalstyle";
import background from "../images/fogli_brutti.png";
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
        <img src={background} alt="un prato" style={{objectFit:"cover", windth:"100%", height:"100%"}}/>
        <Typography paddingLeft={10} style={{fontSize: "80px", color:"white", textAlign:"left", position:"absolute", 
                    top:"10", bottom:"0", left:"0", right:"0", height:"fit-content", margin:"auto"}}>DOCUMENTI</Typography>
    </article>

    <Grid
      container
      spacing={4}
      justify="center"
      >

        <Grid item xs={12}  md={3} backgroundColor="white">
          <div className="drawer"> 
          <List>
            <Link to="/Informazioni" style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText style={{color: '#484848'}}>Informazioni</ListItemText>
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
          <h1>RASSEGNE STAMPA</h1>
          <Typography color="common.white">
          3 Marzo 2021, Richiesta          
          </Typography>
          <br/>
          </div>

          <div>
          <img src={img} alt="" width="358" height="752"/>
          </div>

          <Box m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">
          <Button href='' variant= 'contained' size="small" 
        onMouseEnter={event => onMouseOver(event)}  sx={{background: "#212121"}}>
          VAI AL DOCUMENTO INTEGRALE
        </Button>
        </Box>
        </Grid>
    </Grid>
 
    </>
    );
}

export default Documenti;