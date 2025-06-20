import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Header } from './components/Header';
import { RecordInfo } from './components/RecordInfo';
import { Player } from './components/Player';
import { AlbumList } from './components/AlbumList';
import { ContentDisplay } from './components/ContentDisplay';
import { ALBUMS } from './content/all-albums';
import { useRecordHandler } from './record-handler.hook';


const App: React.FC = () => {
  const {
    currentAlbum,
    currentRecord,
    currentSegment,
    currentSegmentNumber,
    currentTotalSegments,
    played,
    setPlayed,
    onStartPlay,
    onRecordPlay,
    onRepeat,
    onShuffle,
    onBackward,
    onForward,
    onSegmentClick
  } = useRecordHandler();

  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        padding: 2
      }}
    >
      <Header />
      <Stack direction={'row'}>
        <Paper>
          <Typography
            variant={'h4'}
            fontWeight={400}
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
        <Paper sx={{ width: '100%' }} />
      </Stack>
      <Stack
        direction={'row'}
        sx={{
          height: '100%',
          maxHeight: 'calc(100vh - 298px)'
        }}
      >
        <AlbumList
          albums={ALBUMS}
          onRecordPlay={(albumId, recordId) => onRecordPlay(albumId, recordId)}
          selectedRecordId={(currentRecord?.albumId ?? '') + (currentRecord?.id ?? '')}
        />
        <ContentDisplay
          onStartPlay={() => onStartPlay()}
          segment={currentSegment?.segment}
        />
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
        <RecordInfo
          recordCoverUrl={currentAlbum?.coverUrl}
          recordAlbum={currentAlbum?.name}
          recordTitle={currentRecord?.name}
        />
        <Player
          timeline={{
            currentRecordId: (currentRecord?.albumId ?? '') + (currentRecord?.id ?? ''),
            currentSegmentNumber: currentSegmentNumber,
            totalSegments: currentTotalSegments,
            onSegmentClick: (segmentNumber) => onSegmentClick(segmentNumber),
          }}
          played={played}
          setPlayed={setPlayed}
          onShuffle={(status) => onShuffle(status)}
          onRepeat={(status) => onRepeat(status)}
          onBackward={() => onBackward()}
          onForward={() => onForward()}
        />
      </Stack>
    </Stack >
  )
};

export default App;
