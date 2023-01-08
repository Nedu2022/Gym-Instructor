import React, { useState } from 'react';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <HeroBanner>
        <SearchExcercises />
        <Excercise />
      </HeroBanner>
    </Box>
  )
}

export default Home
