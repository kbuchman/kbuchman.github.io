import { IconButton, Paper, Stack } from '@mui/material';
import React from 'react';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Timeline, TimelineProps } from './Timeline';

export interface PlayerProps {
  timeline: TimelineProps;
  played: boolean;
  setPlayed: (value: React.SetStateAction<boolean>) => void;
  onShuffle: (status: boolean) => void;
  onRepeat: (status: boolean) => void;
  onBackward: () => void;
  onForward: () => void;
}

export const Player: React.FC<PlayerProps> = ({
  timeline,
  played,
  setPlayed,
  onShuffle,
  onRepeat,
  onBackward,
  onForward
}) => {
  const [shuffled, setShuffled] = React.useState(false);
  const [repeated, setRepeated] = React.useState(false);

  const handleShuffle = () => {
    setShuffled(!shuffled);
    onShuffle(!shuffled);
  };

  const handleRepeat = () => {
    setRepeated(!repeated);
    onRepeat(!repeated);
  };

  return (
    <Paper
      sx={{
        height: '100%',
        width: '100%',
        padding: 2,
      }}
    >
      <Stack
        justifyContent={'flex-end'}
        sx={{ width: '100%' }}
      >
        <Timeline {...timeline} />
        <Stack
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            '.MuiIconButton-root': {
              color: 'black',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              },

            }
          }}
        >
          <IconButton
            onClick={() => handleShuffle()}
            size={'small'}
          >
            <ShuffleIcon color={shuffled ? 'secondary' : 'inherit'} />
          </IconButton>
          <IconButton
            onClick={() => onBackward()}
            size={'small'}
          >
            <ReplyAllIcon />
          </IconButton>
          <IconButton onClick={() => setPlayed(prev => !prev)}>
            {played ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton
            onClick={() => onForward()}
            size={'small'}
          >
            <ReplyAllIcon sx={{ transform: 'scaleX(-1)' }} />
          </IconButton>
          <IconButton
            onClick={() => handleRepeat()}
            size={'small'}
          >
            <RestartAltIcon color={repeated ? 'secondary' : 'inherit'} />
          </IconButton>
        </Stack>
      </Stack>
      {/* TODO: Functionality to be implemented */}
      {/*       
      <IconButton
        size={'small'}
        sx={{
          position: 'absolute',
          alignSelf: 'flex-end'
        }}
      >
        <PlaylistPlayIcon />
      </IconButton> 
*/}
    </Paper>
  );
};