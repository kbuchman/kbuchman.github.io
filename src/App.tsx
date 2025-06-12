import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Header } from './components/Header';
import { RecordInfo } from './components/RecordInfo';
import { Player } from './components/Player';
import { AlbumList } from './components/AlbumList';


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
    <Stack
      direction={'row'}
      sx={{
        height: '100%',
        overflowY: 'hidden'
      }}
    >
      <AlbumList
        albums={[
          {
            id: '1',
            name: 'Album 1',
            coverUrl: 'https://via.placeholder.com/150',
            records: [
              { id: '1', name: 'Record 1', sections: [] },
              { id: '2', name: 'Record 2', sections: [] },
              { id: '3', name: 'Record 3', sections: [] },
            ],
          },
          {
            id: '2',
            name: 'Album 2',
            coverUrl: 'https://via.placeholder.com/150',
            records: [
              { id: '1', name: 'Record 1', sections: [] },
              { id: '2', name: 'Record 2', sections: [] },
              { id: '3', name: 'Record 3', sections: [] },
            ],
          },
          {
            id: '3',
            name: 'Album 3',
            coverUrl: 'https://via.placeholder.com/150',
            records: [
              { id: '1', name: 'Record 1', sections: [] },
              { id: '2', name: 'Record 2', sections: [] },
              { id: '3', name: 'Record 3', sections: [] },
            ],
          },
        ]}
        onRecordPlay={(albumId, recordId) => console.log(albumId, recordId)}
        selectedRecordId={'21'}
      />
      <Paper
      >
        CONTENT
      </Paper>
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
