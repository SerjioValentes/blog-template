'use client';

import React from 'react';
import {
  Box,
  Stack,
} from '@mui/material';
// import AboutMeSection from '@/components/organism/AboutMeSection';
// import ArticlesSlider from '@/components/organism/ArticlesSlider';
import Header from '@/components/Header';
import useWindowSize from '@/hooks/useWindowSize';
// import Stub from '@/components/molecule/Stub';

function HomePage() {
  // const tg = typeof window === 'undefined' ? undefined : (window as any).Telegram?.WebApp;
  const isMobile = useWindowSize();
  return (
    <Box sx={{
      maxWidth: '1200px',
      m: 'auto',
      height: '100vh',
      position: 'relative',
    }}
    >
      {!isMobile
      && <Header />}
      {/* <AboutMeSection /> */}
      {/* <ArticlesSlider /> */}
      <Stack sx={{
        position: 'absolute',
        bottom: 0,
      }}
      >
        {isMobile
      && <Header />}
      </Stack>
    </Box>

  );
}

export default HomePage;
