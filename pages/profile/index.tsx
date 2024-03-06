import {
  Button, Divider, Stack, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';

const ProfilePage = () => {
  const [tgBotCode, setTgBotCode] = useState<string>('');

  const handleAproveTgBotCode = () => {
    console.log(tgBotCode);
  };

  return (
    <div>
      <Stack sx={{ pt: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Настройки
        </Typography>
        <Divider />
      </Stack>
      <Stack
        spacing={2}
        sx={{
          py: 4,
        }}
      >
        <Stack>

          <Typography
            sx={{
              fontWeight: 'bold',
            }}
          >
            Продолжить проходить в тг боте
          </Typography>
          <Typography>
            {/* eslint-disable-next-line max-len */}
            Код активации бота можно получить внутри самого бота - просто перейдите в бота и напишите /start
          </Typography>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            sx={{
              width: '200px',
            }}
            variant="contained"
          >
            Перейти в бот
          </Button>
          <TextField
            fullWidth
            onChange={(e) => setTgBotCode(e.target.value)}
            label="Код активации бота"
          />
        </Stack>
        <Button variant="contained" onClick={handleAproveTgBotCode}>Принять</Button>
      </Stack>

      <Stack sx={{ pt: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Ваши курсы
        </Typography>
        <Divider />
      </Stack>
      <Stack
        spacing={2}
        sx={{
          py: 4,
        }}
      >
        <TextField
          label="Выбрать курс"
        />
      </Stack>

    </div>
  );
};

export default ProfilePage;
