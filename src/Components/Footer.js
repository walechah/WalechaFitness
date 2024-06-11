import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#211135">
    
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' }, color: '#FFF' }} mt="41px" textAlign="center" pb="40px" pt="40px">
      Copyright @HarshitWalecha
    </Typography>
  </Box>
);

export default Footer;
