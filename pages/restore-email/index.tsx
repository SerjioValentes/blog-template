import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const RestoreEmail = () => {
  const [email, setEmail] = useState('');

  const [success, setSuccess] = useState('');

  const restoreEmail = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/restorepassword`, { email }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => setSuccess('Вам на почту выслано письмо')).catch((e) => {
      console.log('e', e);
    });
  };

  return (
    <Box sx={{
      height: '100vh',
    }}
    >
      <Stack
        spacing={2}
        sx={{
          maxWidth: '400px',
          m: 'auto',
          pt: '20%',
        }}
      >
        <Typography align="center" variant="h6">{success || 'Забыли пароль?'}</Typography>
        <TextField label="Введите вашу почту" onChange={(e) => setEmail(e.target.value)} />
        <Button variant="contained" onClick={restoreEmail}>Восстановить пароль</Button>
      </Stack>
    </Box>
  );
};

export default RestoreEmail;
