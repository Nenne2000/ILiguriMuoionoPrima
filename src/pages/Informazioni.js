import React from "react";
import GlobalStyle from "../components/Globalstyle";
import background from "../images/pag1_ruspa.png";
import img1 from "../images/pag1_img1.png";
import img2 from "../images/pag1_img2.png";
import Grid from '@mui/material/Grid';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
import { Link } from 'react-router-dom';

function Informazioni() {

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
      >

        <Grid item xs={12}  md={3} backgroundColor="white">
          <div className="drawer"> 
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
          <h1>IL GIACIMENTO</h1>
          <Typography color="common.white">
            Varazze. E’ prevista per domani, 13 aprile, l’udienza di merito presso il Tar Liguria sulla legittimità del decreto del dirigente regionale alle attività estrattive della Regione Liguria, emesso nel febbraio 2021, relativo al permesso di ricerca mineraria in aree esterne (Monte Antenna) del comprensorio del Parco Beigua, nei comuni di Urbe e Sassello. Lo ricordano le sezioni liguri di Lac, Lipu e Wwf, che da sempre si battono per evitare l’avvio dell’attività di estrazione del minerale.
          </Typography>
          <br/>
          </div>

          <div>
            <img src={img1} width="1077" height="345"/>
          </div>

          <div>
          <br/>
          <Typography color="common.white">
            Varazze. E’ prevista per domani, 13 aprile, l’udienza di merito presso il Tar Liguria sulla legittimità del decreto del dirigente regionale alle attività estrattive della Regione Liguria, emesso nel febbraio 2021, relativo al permesso di ricerca mineraria in aree esterne (Monte Antenna) del comprensorio del Parco Beigua, nei comuni di Urbe e Sassello. Lo ricordano le sezioni liguri di Lac, Lipu e Wwf, che da sempre si battono per evitare l’avvio dell’attività di estrazione del minerale.
          </Typography>
          <br/>
          </div>

          <div>
            <img src={img2} width="1077" height="317"/>
          </div>

          <div>
          <br/>
          <Typography color="common.white">
            Varazze. E’ prevista per domani, 13 aprile, l’udienza di merito presso il Tar Liguria sulla legittimità del decreto del dirigente regionale alle attività estrattive della Regione Liguria, emesso nel febbraio 2021, relativo al permesso di ricerca mineraria in aree esterne (Monte Antenna) del comprensorio del Parco Beigua, nei comuni di Urbe e Sassello. Lo ricordano le sezioni liguri di Lac, Lipu e Wwf, che da sempre si battono per evitare l’avvio dell’attività di estrazione del minerale.
          </Typography>
          <br/>
          </div>


        </Grid>
    </Grid>
 
    </>
    );
}

export default Informazioni;