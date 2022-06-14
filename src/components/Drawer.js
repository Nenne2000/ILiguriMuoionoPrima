import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, textAlign } from "@mui/system";
import { Link } from 'react-router-dom';

//const pages = ["Info", "Documenti", "Il Beigua", "Ora tocca a te"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box p={4} width='250px' textAlign='left' role='presentation' backgroundColor="#212121">
          <Typography variant="h4" color="common.white"> 
            I LIGURI MUOIONO PRIMA
          </Typography>
        </Box>
        <List>
            <Link to="/Informazioni" style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText style={{color: '#484848'}}>Info</ListItemText>
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
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;