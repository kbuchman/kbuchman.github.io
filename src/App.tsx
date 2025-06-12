import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Header } from './components/Header';
import { RecordInfo } from './components/RecordInfo';


const App: React.FC = () => (
  <Stack
    sx={{
      height: '100vh',
      width: '100vw',
      padding: 2,
    }}
  >
    <Header />
    <Stack direction={"row"}>
      <Paper
      >
        <Typography
          variant="h4"
          sx={{
            whiteSpace: {
              xs: 'normal',
              sm: 'nowrap',
            },
          }}
        >
          KAROL BUCHMAN
        </Typography>
      </Paper>
      <Paper
        sx={{
          width: '100%',
        }}
      />
    </Stack>
    <Stack flex={1}>

      <Stack direction="row" flex={1}>
        <Paper
        >
          ALBUM LIST
        </Paper>
        <Paper
        >
          CONTENT
        </Paper>
      </Stack>
    </Stack>

    <Paper />
    {/* Footer */}
    <Stack>
      <Stack direction="row" width="100%">
        <RecordInfo />
        <Paper
        >
          PLAYER
        </Paper>
      </Stack>
    </Stack >
  </Stack >
);

export default App;
