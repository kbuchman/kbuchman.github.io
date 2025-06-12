import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import defaultCover from '../assets/default_cover.svg';

interface RecordInfoProps {
  recordCoverUrl?: string;
  recordTitle?: string;
  recordAlbum?: string;
};

export const RecordInfo: React.FC<RecordInfoProps> = ({
  recordCoverUrl,
  recordTitle,
  recordAlbum
}) => {
  return (
    <Stack direction={'row'} width={'100%'}>
      <Paper
        sx={{
          padding: 1,
          flex: 1,
          maxWidth: 'max-content'
        }}
      >
        <img
          src={recordCoverUrl || defaultCover}
          alt="Record Cover"
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '128px',
            maxWidth: '128px',
            minHeight: '96px',
            minWidth: '96px',
            borderRadius: '8px'
          }}
        />
      </Paper>
      <Paper
        sx={{
          width: '100%',
          maxWidth: '256px',
          minWidth: 'min-content',
          padding: 2,
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        <Stack
          gap={1}
          style={{ height: '100%' }}
        >
          <Typography
            variant={'h5'}
            fontWeight={'bold'}
          >
            {recordTitle || 'HI'}
          </Typography>
          <Typography variant={'body1'}>
            {recordAlbum || 'THERE!'}
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};