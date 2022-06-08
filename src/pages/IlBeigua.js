import React from "react";
import GlobalStyle from "../components/Globalstyle";
import background from "../images/immagginebbbrutta.png"
import { Typography } from "@mui/material";

function IlBeigua() {

    return (
    <>
    <GlobalStyle />
    <article style={{height:"100%", width:"100%", position:"relative", overflow:"hidden"}}>
        <img src={background} alt="un prato" style={{objectFit:"cover", windth:"100%", height:"100%"}}/>
        <Typography paddingLeft={10} style={{fontSize: "80px", color:"white", textAlign:"left", position:"absolute", 
                    top:"10", bottom:"0", left:"0", right:"0", height:"fit-content", margin:"auto"}}>IL BEIGUA</Typography>
    </article>

    </>
    );
}

export default IlBeigua;