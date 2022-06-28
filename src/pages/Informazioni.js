import React from "react";
import GlobalStyle from "../components/Globalstyle";
import background from "../images/pag1_ruspa.png";
import img1 from "../images/pag1_img1.jpg";
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
        <div className="row">
        <img className="sfondi" src={background} alt="un prato" />
        </div>
        <Typography paddingLeft={5} style={{fontSize: "80px", color:"white", textAlign:"left", position:"absolute", 
                    top:"10", bottom:"0", left:"0", right:"0", height:"fit-content", margin:"auto"}}>
                      <div className="s900" variant='Poppins'>
                      INFORMAZIONI
                      </div>
                      </Typography>
    </article>

    <Grid
      container
      spacing={0}
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

        <Grid item xs={12}  md={7} color="white">
        <div style={{paddingLeft: '16px'}}>

        <div className="s700" variant='Poppins'>
          <h1>IL GIACIMENTO</h1>
          </div>
          
          <div className="s400" variant='Poppins'>
          Il giacimento di titanio di Piampaludo ricade nei comuni di Urbe e Sassello (SV) e in gran parte nel territorio del Parco Naturale Regionale del Beigua.  Il Parco del Beigua presenta una notevole geodiversità e un variegato patrimonio geologico che comprende, tra l'altro, sequenze di rocce ofiolitiche che per estensione, importanza scientifica e valenza naturalistica ha pochi eguali al mondo. È per questi motivi che dal marzo 2005 il comprensorio del Parco è riconosciuto come Geoparco Internazionale ed è inserito nella Rete Europea dei Geoparchi e nella Rete Globale dei Geoparchi dell’UNESCO.           </div>
          <br/>

          <div className="centro">
            <img className="cava" src={img1}/>
          </div>

          <br/>
          <div className="s400" variant='Poppins'>
          Il giacimento di titanio di Piampaludo è conosciuto e studiato dagli anni '70. Questo prezioso metallo è stato inserito, dalla Comunità Europea, nell'elenco delle materie prime "critiche" e "strategiche", ovvero tra quelle risorse che, oltre al valore economico, presentano elevati rischi di approvvigionamento in quanto l’attività mineraria comporta inevitabilmente la produzione di enormi volumi di materiali sterili derivanti sia dalle operazioni di coltivazione del giacimento sia dalle varie fasi di arricchimento del minerale estratto. Tali materiali sono di norma deposti nell'area mineraria in cumuli a cielo aperto di dimensioni considerevoli o entro bacini naturali e artificiali. Nel caso delle miniere di titanio la concentrazione di TiO2 dei giacimenti attualmente coltivati varia tra il 5 e il 20%, implicando che oltre l'80% del materiale estratto è sterile ed è destinato a discarica.          </div>
          <br/>

          <div className="centro">
            <img className="foto" src={img2}/>
          </div>

          <br/>
          <div className="s400" variant='Poppins'>
          Sebbene il titanio non abbia un impatto significativo per l'ambiente e la salute umana, potrebbero insorgere rischi correlati alla presenza di metalli potenzialmente ecotossici (ad esempio Co, Ni, Cr, V, Zn) e di minerali classificati come amianto. Il rischio amianto è in particolare significativo nei giacimenti associati a rocce ofiolitiche come le eclogiti del giacimento ligure di Piampaludo.  In altre parole dei 458 ettari presi inizialmente in esame, le indagini minerarie potranno concentrarsi solamente nei 183 ettari non compresi da tutele di sorta, vale da dire dai confini del parco e da quelli delle zone speciale di conservazione, vale a dire il 39% di quello richiesto.          </div>
          <br/>
        </div>


        </Grid>
      <Grid item xs={12}  md={1} backgroundColor="black"></Grid>
    </Grid>
    </>
    );
}

export default Informazioni;