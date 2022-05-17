import React from "react";
import {AppBar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styled from "styled-components";

const Navbar = () => {
    return (
        <AppBar>
        <IconButton>
            <MenuIcon />
        </IconButton>
        <MyP>Ciao</MyP>
        </AppBar>
    )
}

const MyP = styled.p`
    color: black;
`

export default Navbar;