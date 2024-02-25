'use client';

import React from 'react';
import {
  Box,
} from '@mui/material';
import Stub from '@/components/molecule/Stub';
// import AboutMeSection from '@/components/organism/AboutMeSection';
// import ArticlesSlider from '@/components/organism/ArticlesSlider';

function HomePage() {
  // const tg = typeof window === 'undefined' ? undefined : (window as any).Telegram?.WebApp;

  return (
    <Box sx={{
      // maxWidth: 1200,
      // mx: 'auto',
    }}
    >
      <Stub />
      {/* <AboutMeSection /> */}
      {/* <ArticlesSlider /> */}
    </Box>

  );
}

export default HomePage;
