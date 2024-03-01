'use client';

import React, { useState } from 'react';
import {
  Button, Stack, TextField, Typography,
} from '@mui/material';
import CustomizedSwitches from '@/components/atom/Switch';
import AuthService from '@/services/AuthService';
import FormWrapper from './style';

export interface IUserData {
  email: string;
  password: string;
}

const AuthForm = ({ handleClose }: { handleClose: () => void }) => {
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
  });
  // For a switcher
  const [isNewUser, setIsNewUser] = useState(true);
  // Errors
  const [errors, setErrors] = useState<string[] | null>(null);

  const userDataOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setUserData((prev: IUserData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createAccount = () => {
    AuthService.registration(userData, handleClose, setErrors);
  };

  const logIn = async () => {
    AuthService.login(userData, handleClose, setErrors);
  };

  return (
    <FormWrapper>
      <Stack sx={{
        width: '300px',
        height: '280px',
      }}
      >
        <Stack spacing={1}>
          <TextField name="email" placeholder="Ваша почта" onChange={userDataOnChange} />
          <TextField name="password" placeholder="Пароль" onChange={userDataOnChange} />
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
          firstLabel="Войти"
          secondLabel="Создать аккаунт"
          setIsNewUser={setIsNewUser}
          isNewUser={isNewUser}
          setErrors={setErrors}
        />

        {isNewUser
          ? (
            <Button
              fullWidth
              variant="contained"
              onClick={logIn}
            >
              Войти
            </Button>
          )
          : <Button variant="contained" onClick={createAccount}>Создать аккаунт</Button>}
      </Stack>
    </FormWrapper>
  );
};
export default AuthForm;
