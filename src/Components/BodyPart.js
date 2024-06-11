import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? 
        { borderTop: '4px solid #bb86fc', background: '#333', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px', color: '#e0e0e0' } : 
        { background: '#333', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px', color: '#e0e0e0' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography 
      fontSize="24px" 
      fontWeight="bold" 
      fontFamily="Alegreya" 
      color="#e0e0e0" 
      textTransform="capitalize">
        {item}
    </Typography>
  </Stack>
);

export default BodyPart;
