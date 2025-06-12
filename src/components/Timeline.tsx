import { Box, Stack } from '@mui/material';
import React from 'react';

export interface TimelineProps {
  currentSegmentNumber: number;
  totalSegments: number;
  onSegmentClick: (segmentNumber: number) => void;
};

export const Timeline: React.FC<TimelineProps> = ({
  currentSegmentNumber,
  totalSegments,
  onSegmentClick
}) => {
  const [stripesPerSegment, setStripesPerSegment] = React.useState<number>(0);
  const [playedSegments, setPlayedSegments] = React.useState<number[]>([]);
  const [hoveredSegment, setHoveredSegment] = React.useState<number | null>(null);
  const [stripeHeights, setStripeHeights] = React.useState<number[]>([]);

  const maxStripes = 48;

  React.useEffect(() => {
    const sps = Math.floor(maxStripes / totalSegments);
    setStripesPerSegment(sps);
    setStripeHeights(
      Array.from({
        length: sps * totalSegments
      }, () => Math.floor(Math.random() * 90) + 30)
    );
  }, [totalSegments]);

  React.useEffect(() => {
    setPlayedSegments(Array.from({
      length: stripesPerSegment * currentSegmentNumber
    }, (_, i) => i + 1));
  }, [stripesPerSegment, currentSegmentNumber]);

  return (
    <Stack
      direction={'row'}
      gap={'1px'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      {Array.from({ length: stripesPerSegment * totalSegments }, (_, i) => (
        <Box
          key={i}
          onMouseEnter={() => setHoveredSegment(Math.floor(i / stripesPerSegment))}
          onMouseLeave={() => setHoveredSegment(null)}
          onClick={() => onSegmentClick(Math.floor(i / stripesPerSegment))}
          sx={{
            padding: 0,
            borderRadius: '8px',
            width: `${100 / (stripesPerSegment * totalSegments * 2)}%`,
            height: `${stripeHeights[i]}%`,
            backgroundColor:
              hoveredSegment === Math.floor(i / stripesPerSegment)
                ? 'rgba(60, 10, 70, 0.6)'
                : playedSegments.includes(i + 1)
                  ? 'black'
                  : 'white',
            ':hover': {
              cursor: 'pointer'
            }
          }}
        />
      ))}
      <Box
        sx={{
          width: '100%',
          height: '4px',
          position: 'absolute',
          borderRadius: '8px',
          zIndex: -1,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        }}
      />
    </Stack>
  );
};