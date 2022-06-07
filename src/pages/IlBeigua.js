import React from "react";
import GlobalStyle from "../components/Globalstyle";
import background from "../images/immagginebbbrutta.png"

function IlBeigua() {

    return (
    <>
    <GlobalStyle />
    <article style={{height:"100%", windth:"100%", position:"relative", overflow:"hidden"}}>
        <img src={background} alt="un prato" style={{objectFit:"cover", windth:"100%", height:"100%"}}/>
        <h1 style={{fontSize: "80px", color:"white", textAlign:"left", position:"absolute", 
                    top:"10", bottom:"0", left:"0", right:"0", height:"fit-content", margin:"auto", paddingLeft: "20"}}>IL BEIGUA</h1>
    </article>

    </>
    );
}

export default IlBeigua;