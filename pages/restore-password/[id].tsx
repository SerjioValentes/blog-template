import {
  Button, Stack, TextField, Typography,
} from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const RestorePassword = () => {
  const [password, setPassword] = useState({
    password_1: '',
    password_2: '',
  });
  const [error, setError] = useState('');

  const router = useRouter();

  const handlerChangepassword = (e: any) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };
  const restorePassword = () => {
    if (password.password_1 !== password.password_2) {
      setError('*Пароли не совпадают');
    } else {
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/restorepasswordandsave`, {
        password: password.password_1,
        token: router.query.id,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => console.log('response1', response)).catch((e) => {
        console.log('e', e);
      });
    }
  };

  return (
    <div>
      <Stack sx={{ pt: 4 }} spacing={2}>
        <TextField name="password_1" onChange={handlerChangepassword} label="Пароль" />
        <TextField name="password_2" onChange={handlerChangepassword} label="Повторите пароль" />
        <Typography
          color="error"
          sx={{
            fontSize: '0.8rem',
          }}
        >
          {error && error}
        </Typography>
        <Button onClick={restorePassword} variant="contained">Восстановить</Button>
      </Stack>
    </div>
  );
};

export default RestorePassword;
