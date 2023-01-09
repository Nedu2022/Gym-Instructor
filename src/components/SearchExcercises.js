import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { excerciseOptions, fetchData } from '../utility/FetchData';

const SearchExcercises = () => {

  const [search, setSearch] = useState('')
  const [excercise, setExcercises] = useState([])

  const handleSearch = async () => {
    if(search) {
      const excercisesData = await fetchData ('https://excercisedb.p.rapidapi.com/excercises/bodyPartList', excerciseOptions);

      const searchedExcercises = exerciseData.filter(
        (excercise) => excercise.name.toLowerCase().includes(search)
          || excercise.target.toLowerCase().includes(search)
          || excercise.equipment.toLowerCase().includes(search)
          || excercise.bodyPart.toLowerCase().includes(search) 
      );

      setSearch('');
      setExcercises(searchedExcercises)
    }
  }

  return (
    <div>
      <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} 
        sx={{ fontSize:{lg:'44px', xs: '30px'}}}
        mb="50px" textAlign='center'
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
            fontWeight: '700',
            border: 'none', 
            borderRadius:'4px'
          },

            width: {lg:'800px', xs:'350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Excercises'
          type='text'
        />

        <Button className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: {lg: '175px', xs:'80px'},
            fontSize: { lg:'20px', xs:'14px'},
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      </Stack>
    </div>
  )
}

export default SearchExcercises
