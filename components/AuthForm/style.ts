'use client';

import theme from '@/helpers/ThemeProvider';
import styled from '@emotion/styled';

const FormWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  padding: '20px',
  gap: 20,
  borderRadius: 4,
  background: theme.palette.primary.main,
});

export default FormWrapper;
