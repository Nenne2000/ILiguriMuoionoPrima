import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShareIcon from '@mui/icons-material/Share';
import DrawerComp from "./Drawer";

import {
  FacebookShareButton, FacebookIcon,
  TelegramShareButton, TelegramIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon
} from "react-share";

import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';


export default function ButtonAppBar() {

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ background: "#212121" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          <DrawerComp/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit" onClick={handleClick}>
            <ShareIcon />
          </IconButton>

          <Popper placement="left" id={id} open={open} anchorEl={anchorEl} transition >
            {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box>
                <FacebookShareButton url="http://localhost:3000/"><FacebookIcon size={32} round={true} /></FacebookShareButton>
                <TelegramShareButton url="http://localhost:3000/"><TelegramIcon size={32} round={true} /></TelegramShareButton>
                <TwitterShareButton url="http://localhost:3000/"><TwitterIcon size={32} round={true} /></TwitterShareButton>
                <WhatsappShareButton url="http://localhost:3000/"><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
              </Box>
            </Fade>
            )}
          </Popper>

        </Toolbar>
      </AppBar>
    </Box>
  );
}