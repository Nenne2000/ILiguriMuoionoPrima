import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo  from '../images/logo_uni.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#212121" }}>
        <Toolbar>
        <Typography component="div" variant='Poppins' sx={{flexGrow: 1 }}>
          <div className='footer'>
            Progetto realizzato per il corso di web design dell'anno accademico 2021/2022.
            </div>
        </Typography>
        <img className="photo" src={logo} alt="logo" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
