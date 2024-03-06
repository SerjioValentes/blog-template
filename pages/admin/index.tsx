import $api from '@/api/auth';
import {
  Stack, Button, TextField, Divider, Typography,
} from '@mui/material';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminPage = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);

  const [changeUserValues, setChangeUserValues] = useState({
    roleValue: '',
    userId: '',
  });

  const [tgBotMessage, setTgBotMessage] = useState<string>('');

  const getAllUsers = async () => {
    await $api.get('/users')
      .then((res) => { console.log('res', res); })
      .catch((err) => console.log('err', err));
  };
  useEffect(() => {
    // getAllUsers();
  }, []);

  const sendMsgToBot = () => {
    console.log('tgBotMessage', tgBotMessage);
  };

  const saveUserRole = () => {
    console.log('users', users);
    //   await $api.post('/roles/setrole', {
  //     roleValue: 'USER',
  //     userId: '2',
  //   })
  //     // .then((res) => { console.log('res', res); })
  //     .catch((err) => console.log('err', err));
  };

  return (
    <div>
      {/* Start---------------- Some testing stuff DELETE ON PRODUCTION ----------------------- */}
      {/* <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={getAllUsers}>Get all users</Button>
      </Stack> */}
      {/* End--------------------Some testing stuff DELETE ON PRODUCTION --------------------- */}
      <Stack>
        <Stack sx={{ py: 4 }}>
          <Typography variant="h5">Настройки</Typography>
          <Divider />
        </Stack>

        <Stack spacing={2}>
          <Stack>
            <Typography sx={{
              fontWeight: 'bold',
            }}
            >
              Изменить роль пользователя
            </Typography>
            <Divider />
          </Stack>
          <TextField
            label="Все пользователи"
            name="userId"
          />
          <TextField
            label="Роли"
            name="roleValue"
          />
          <Button variant="contained" onClick={saveUserRole}>Сохранить</Button>
        </Stack>

        <Stack
          spacing={2}
          sx={{
            py: 4,
          }}
        >
          <Typography sx={{
            fontWeight: 'bold',
          }}
          >
            Отправить сообщение в бот
          </Typography>
          <Divider />
          <TextField
            label="Выбрать пользователей"
          />

          <TextField
            label="Текст сообщения"
            onChange={(e) => setTgBotMessage(e.target.value)}
          />
          <Button variant="contained" onClick={sendMsgToBot}>Отправить</Button>
        </Stack>
      </Stack>

    </div>
  );
};

export default AdminPage;
