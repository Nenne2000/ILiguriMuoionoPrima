import React from "react";
import GlobaStyle from "./components/Globalstyle";
import Navbar from "./components/Navbar"
import Card from "./components/Card";
import Typography from '@mui/material/Typography';
import { padding } from "@mui/system";
import CountdownTimer from './components/CountdownTimer'

const App = () => {

  const THREE_DAYS_IN_MS = 3*24*60*1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
      <GlobaStyle />
      <Navbar/>
      <div className="App" style={{ marginLeft: "32px", padding:"20px"}}> 
      <Typography variant="h3" color="common.white"> 
        I LIGURI 
      </Typography> 
      <Typography variant="h3" color="common.white"> 
       MUOIONO 
      </Typography>   
      <Typography variant="h3" color="common.white"> 
       PRIMA. 
      </Typography>
    </div>
    <div className="App" style={{ backgroundColor: "#484848" , textAlign:"justify", padding:"20px"}}> 
    <Typography color="common.white"> 
    What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
    </Typography>   
    </div>

    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ padding:"20px"}} >
      <Card/>
      </div>
      <div style={{ padding:"20px" }} >
      <Card/>
      </div>
      <div style={{ padding:"20px" }} >
      <Card/>
      </div>
      <div style={{ padding:"20px" }} >
      <Card/>
      </div>
    </div>

    </>
  );
}

export default App;
