'use client';

import {
  Button, Stack,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoggedMenu from '../molecule/LoggedMenu';
import UnLoggedMenu from '../molecule/UnLoggedMenu';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem('accessToken')) {
      setIsAuth(true);
    }
  }, []);
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        display: 'flex',
        maxWidth: '1200px',
        m: 'auto',
        justifyContent: 'space-between',
        p: 1,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Button onClick={() => router.push('/')} variant="contained">Домой</Button>
        <Button onClick={() => router.push('/articles')} variant="contained">Все статьи</Button>
      </Stack>
      {isAuth
        ? <LoggedMenu />
        : <UnLoggedMenu />}
    </Stack>
  );
};
export default Header;
