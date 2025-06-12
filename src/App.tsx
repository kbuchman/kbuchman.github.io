import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Header } from './components/Header';
import { RecordInfo } from './components/RecordInfo';
import { Player } from './components/Player';


const App: React.FC = () => (
  <Stack
    sx={{
      height: '100vh',
      width: '100vw',
      padding: 2,
    }}
  >
    <Header />
    <Stack direction={'row'}>
      <Paper>
        <Typography
          variant={'h4'}
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
      <Stack direction={'row'}>
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
    <Paper
      sx={{
        backgroundColor: 'rgba(60, 10, 70, 0.6)',
        ':hover': {
          backgroundColor: 'rgba(60, 10, 70, 0.8)',
        }
      }}
    />
    <Stack
      direction={'row'}
      sx={{ width: '100%' }}
    >
      <RecordInfo />
      <Player
        timeline={{
          currentSegmentNumber: 4,
          totalSegments: 10,
          onSegmentClick: (segmentNumber) => console.log(segmentNumber),
        }}
        onPlay={() => null}
        onShuffle={() => null}
        onRepeat={() => null}
        onBackward={() => null}
        onForward={() => null}
      />
    </Stack>
  </Stack >
);

export default App;
