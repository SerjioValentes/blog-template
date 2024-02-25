import { Box, Typography } from '@mui/material';
import React from 'react';

const Stub = () => (
  <Box sx={{
    width: '100vw',
    height: '100vh',
  }}
  >
    <Typography
      variant="h5"
      align="center"
      sx={{
        pt: '40vh',
        m: 4,
        fontWeight: 'bold',
      }}
    >
      Тут должен скоро появиться очень крутой сайт с курсами
    </Typography>
  </Box>
);

export default Stub;
