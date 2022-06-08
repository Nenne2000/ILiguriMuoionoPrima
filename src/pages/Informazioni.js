import React from "react";
import GlobalStyle from "../components/Globalstyle";
import background from "../images/pag1_ruspa.png";
import Grid from '@mui/material/Grid';
import MenuIcon from "@mui/icons-material/Menu";
import { Box, textAlign } from "@mui/system";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
  import { Link } from 'react-router-dom';

function IlBeigua() {

    return (
    <>
    <GlobalStyle />
    <article style={{height:"100%", width:"100%", position:"relative", overflow:"hidden"}}>
        <img src={background} alt="un prato" style={{objectFit:"cover", windth:"100%", height:"100%"}}/>
        <Typography paddingLeft={10} style={{fontSize: "80px", color:"white", textAlign:"left", position:"absolute", 
                    top:"10", bottom:"0", left:"0", right:"0", height:"fit-content", margin:"auto"}}>INFORMAZIONI</Typography>
    </article>

    <Grid
      container
      spacing={4}
      justify="center"
      style={{ padding:"30px" }}
      >
    <Grid item xs={12}  md={6}></Grid>
    <div style={{ backgroundColor: "white" , textAlign:"justify", padding:"20px"}}>

        <List>
            <Link to="/Informazioni">
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>Info</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/IlBeigua">
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>Il Beigua</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>Ora tocca a te</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>Documenti</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
        </List>

    </div>
    </Grid>
    <Grid item xs={12}  md={6}>
    <div style={{ backgroundColor: "#484848" , textAlign:"justify", padding:"20px"}}>
        <Typography color="common.white">
        Varazze. E’ prevista per domani, 13 aprile, l’udienza di merito presso il Tar Liguria sulla legittimità del decreto del dirigente regionale alle attività estrattive della Regione Liguria, emesso nel febbraio 2021, relativo al permesso di ricerca mineraria in aree esterne (Monte Antenna) del comprensorio del Parco Beigua, nei comuni di Urbe e Sassello. Lo ricordano le sezioni liguri di Lac, Lipu e Wwf, che da sempre si battono per evitare l’avvio dell’attività di estrazione del minerale.
        </Typography>

    </div>
    </Grid>
    </>
    );
}

export default IlBeigua;