'use client';

import React, { useEffect } from 'react';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
// import AboutMeSection from '@/components/organism/AboutMeSection';
// import ArticlesSlider from '@/components/organism/ArticlesSlider';
import Header from '@/components/Header';
import useWindowSize from '@/hooks/useWindowSize';
// import Stub from '@/components/molecule/Stub';

const tg = typeof window === 'undefined' ? undefined : (window as any)?.Telegram?.WebApp;
function HomePage() {
  const isMobile = useWindowSize();
  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <Box sx={{
      maxWidth: '1200px',
      m: 'auto',
      height: '100vh',
      position: 'relative',
    }}
    >
      <Typography>test text2</Typography>
      <Typography>test text2</Typography>
      <Typography>
        {tg && JSON.stringify(tg)}
        <Typography>-----------------------------------</Typography>
        {tg && JSON.stringify(tg.initDataUnsafe)}
        {/* {tg && tg.initDataUnsafe?.user} */}
      </Typography>
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
