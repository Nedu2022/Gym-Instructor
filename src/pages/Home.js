import React, { useState } from 'react';
import { Box } from '@mui/material';

import Excercises from '../components/Excercises';
import SearchExcercises from '../components/SearchExcercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises />
      <Excercises />
    </Box>
  )
}

export default Home
