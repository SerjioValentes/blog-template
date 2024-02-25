'use client';

import React from 'react';
import type { AppProps } from 'next/app';
import theme from '@/helpers/ThemeProvider';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from '@/components/Header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
