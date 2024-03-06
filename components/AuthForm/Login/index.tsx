import CustomizedSwitches from '@/components/atom/Switch';
import AuthService from '@/services/AuthService';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';

export interface IUserData {
  email: string;
  password: string;
}

const LoginPart = ({
  errors, isNewUser, setIsNewUser, setErrors, handleClose,
}: any) => {
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
  });

  const userDataOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setUserData((prev: IUserData) => ({
      ...prev,
      [name]: value,
    }));
  };
  const logIn = async () => {
    AuthService.login(userData, handleClose, setErrors);
  };
  return (
    <Box>
      <Stack spacing={2}>
        <TextField label="Почта" name="email" placeholder="Ваша почта" onChange={userDataOnChange} />
        <TextField label="Пароль" name="password" placeholder="Пароль" onChange={userDataOnChange} />
      </Stack>
      <Stack>
        {errors
            && errors.map((error: string) => (
              <Typography
                key={error}
                variant="body1"
                color="error"
                sx={{
                  fontSize: '0.8rem',
                }}
              >
                *
                {error}
              </Typography>
            ))}
      </Stack>
      <CustomizedSwitches
        setIsNewUser={setIsNewUser}
        isNewUser={isNewUser}
        setErrors={setErrors}
      />
      <Button
        fullWidth
        variant="contained"
        onClick={logIn}
      >
        Войти
      </Button>
    </Box>
  );
};

export default LoginPart;
