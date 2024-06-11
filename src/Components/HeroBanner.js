import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' },
      position: 'relative',
      p: '20px',
      color: '#FFF',
      textAlign: 'left',
      backgroundColor: '#282c34',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    }}
  >
    <Typography color="red" fontWeight="600" fontSize="26px">
      Walecha's Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px' }, color: '#FFF' }}
      mb="23px"
      mt="30px"
    >
      No pain <br />
      No gain
    </Typography>
    <Typography
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      mb="20px"
    >
      It's time to get Stronger
    </Typography>
    <Stack direction="row" justifyContent="flex-start">
      <a
        href="#exercises"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: 'red',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
          transition: 'background 0.3s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = '#FF6347';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'red';
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="red"
      sx={{
        opacity: '0.1',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
        position: 'absolute',
        bottom: '10px',
        right: '10px',
      }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '50%',
        maxWidth: '400px',
        opacity: '0.8',
      }}
    />
  </Box>
);

export default HeroBanner;
