import CustomizedSwitches from '@/components/atom/Switch';
import AuthService from '@/services/AuthService';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';

export interface IUserData {
  email: string;
  password: string;
  password_2: string;
}
const Registration = ({
  errors, isNewUser, setIsNewUser, setErrors, handleClose,
}: any) => {
//   const userPasswordRequire = (e: any) => {
//     console.log('password', e.target);
//   };
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
    password_2: '',
  });

  const userDataOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserData((prev: IUserData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createAccount = () => {
    if (userData.password !== userData.password_2) {
      setErrors(['Пароли не совпадают']);
      return;
    }
    AuthService.registration(userData, handleClose, setErrors);
  };
  return (
    <Box>
      <Stack spacing={2}>
        <TextField label="Почта" name="email" placeholder="Ваша почта" onChange={userDataOnChange} />
        <TextField label="Пароль" name="password" placeholder="Пароль" onChange={userDataOnChange} />
        <TextField label="Пароль" name="password_2" placeholder="Повторите пароль" onChange={userDataOnChange} />
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
      <Button fullWidth variant="contained" onClick={createAccount}>Создать аккаунт</Button>
    </Box>
  );
};
export default Registration;
