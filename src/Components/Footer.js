import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#211135">
    
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' }, color: '#FFF' }} mt="41px" textAlign="center" pb="40px" pt="40px ">
      Copyright <a href="https://www.linkedin.com/in/harshit-walecha-8353a4142/" target='_blank
      ' style={{
        textDecoration : 'none'
        ,
        color : '#FFF'
      }} > @HarshitWalecha</a>
    </Typography>
  </Box>
);

export default Footer;
