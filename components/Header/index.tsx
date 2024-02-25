'use client';

import {
  Button, Stack,
} from '@mui/material';
import React from 'react';
// import LoggedMenu from '../molecule/LoggedMenu';
import UnLoggedMenu from '../molecule/UnLoggedMenu';

const Header = () => (
  <Stack
    direction="row"
    spacing={2}
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      p: 1,
    }}
  >
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Курсы</Button>
      <Button variant="contained">Все статьи</Button>
    </Stack>
    {/* <LoggedMenu /> */}
    <UnLoggedMenu />
  </Stack>
);
export default Header;
