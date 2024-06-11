import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }, color: '#FFF' }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px" width="100%" display="flex" justifyContent="center">
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
              color: '#000',
            },
            width: { lg: '800px', xs: '300px' },
            backgroundColor: '#FFF',
            borderRadius: '40px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: 'red',
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '150px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: { lg: '10px', xs: '5px' },
            fontSize: { lg: '20px', xs: '14px' },
            borderRadius: '40px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            '&:hover': {
              bgcolor: '#FF6347',
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts}  bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box> 
    </Stack>
  );
};

export default SearchExercises;
