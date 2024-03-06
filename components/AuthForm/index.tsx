'use client';

import React, { useState } from 'react';
import {
  Link,
  Stack,
} from '@mui/material';
import FormWrapper from './style';
import Registration from './Registration';
import LoginPart from './Login';

const AuthForm = ({ handleClose }: { handleClose: () => void }) => {
  // For a switcher
  const [isNewUser, setIsNewUser] = useState(true);
  // Errors
  const [errors, setErrors] = useState<string[] | null>(null);
  return (
    <FormWrapper>
      <Stack>
        {
          isNewUser
            ? (
              <Registration
                errors={errors}
                isNewUser={isNewUser}
                setIsNewUser={setIsNewUser}
                setErrors={setErrors}
                handleClose={handleClose}
              />
            )
            : (
              <LoginPart
                errors={errors}
                isNewUser={isNewUser}
                setIsNewUser={setIsNewUser}
                setErrors={setErrors}
                handleClose={handleClose}
              />
            )
          }
      </Stack>
      <Link
        href="/restore-email"
        align="right"
        color="secondary"
        sx={{
          fontSize: '0.8rem',
        }}
      >
        Забыли пароль?
      </Link>
    </FormWrapper>
  );
};
export default AuthForm;
