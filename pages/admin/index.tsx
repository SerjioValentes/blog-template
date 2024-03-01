import $api from '@/api/auth';
import { Stack, Button } from '@mui/material';
// import axios from 'axios';
import React from 'react';

const AdminPage = () => {
  const adminPage = 'AdminPage';
  const getAllUsers = async () => {
    await $api.get('/users')
      .then((res) => { console.log('res', res); })
      .catch((err) => console.log('err', err));
  };
  return (
    <div>
      {adminPage}
      <Stack>
        {/* hide this field */}
        <Button variant="contained" onClick={getAllUsers}>Get all users</Button>

      </Stack>
    </div>
  );
};

export default AdminPage;
