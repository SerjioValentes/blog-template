'use client';

import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import CustomizedSwitches from '@/components/atom/Switch';
import axios from 'axios';
import FormWrapper from './style';

export interface IUserData {
  email: string;
  password: string;
}

function AuthForm() {
  const linkRegistration = process.env.API_LINK_REG;
  const linkLogin = process.env.API_LINK_LOG;

  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
  });

  const [isNewUser, setIsNewUser] = useState(true);

  const userDataOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setUserData((prev: IUserData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createAccount = () => {
    // console.log('create', userData);
    // axios.post(linkRegistration, userData, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }).then((response) => {
    //   console.log('response.data');
    //   console.log(response.data);
    // }).catch((error) => {
    //   console.log('error');
    //   console.log(error);
    // });
  };

  const logIn = async () => {
    // console.log('login');
    // axios.post(linkLogin, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }).then((response) => {
    //   console.log(response.data);
    // }).catch((error) => {
    //   console.log(error);
    // });
  };

  return (
    <FormWrapper>
      <TextField name="email" placeholder="email" onChange={userDataOnChange} />
      <TextField name="password" placeholder="password" onChange={userDataOnChange} />
      <CustomizedSwitches firstLabel="Log In" secondLabel="Create account" setIsNewUser={setIsNewUser} isNewUser={isNewUser} />
      {isNewUser
        ? <Button variant="contained" onClick={logIn}>Log In</Button>
        : <Button variant="contained" onClick={createAccount}>Create account</Button>}
    </FormWrapper>
  );
}
export default AuthForm;
