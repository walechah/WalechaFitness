import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{
      gap: { sm: '123px', xs: '20px' },
      mt: { sm: '32px', xs: '20px' },
      px: '20px',
      backgroundColor: '#333',
      padding: '10px 20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    }}
  >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center"
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#FFF',
          borderBottom: '3px solid red',
          paddingBottom: '4px',
          transition: 'color 0.3s, border-bottom 0.3s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = '#FF6347';
          e.currentTarget.style.borderBottom = '3px solid #FF6347';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = '#FFF';
          e.currentTarget.style.borderBottom = '3px solid red';
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{
          textDecoration: 'none',
          color: '#FFF',
          paddingBottom: '4px',
          transition: 'color 0.3s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = '#FF6347';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = '#FFF';
        }}
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
