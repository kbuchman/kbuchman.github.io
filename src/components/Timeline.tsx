import { Box, Stack } from '@mui/material';
import React from 'react';

export interface TimelineProps {
  currentRecordId: string;
  currentSegmentNumber: number;
  totalSegments: number;
  onSegmentClick: (segmentNumber: number) => void;
};

export const Timeline: React.FC<TimelineProps> = ({
  currentRecordId,
  currentSegmentNumber,
  totalSegments,
  onSegmentClick
}) => {
  const [stripesPerSegment, setStripesPerSegment] = React.useState<number>(0);
  const [playedSegments, setPlayedSegments] = React.useState<number[]>([]);
  const [hoveredSegment, setHoveredSegment] = React.useState<number | null>(null);
  const [stripeHeights, setStripeHeights] = React.useState<number[]>([]);

  const maxStripes = 64;

  React.useEffect(() => {
    if (totalSegments < 1) return;

    const sps = Math.floor(maxStripes / totalSegments);
    setStripesPerSegment(sps);
    setStripeHeights(
      Array.from({
        length: sps * totalSegments
      }, () => Math.floor(Math.random() * 90) + 30)
    );
  }, [totalSegments, currentRecordId]);

  React.useEffect(() => {
    setPlayedSegments(Array.from({
      length: stripesPerSegment * (currentSegmentNumber + 1)
    }, (_, i) => i + 1));
  }, [stripesPerSegment, currentSegmentNumber]);

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      gap={0}
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      {Array.from({ length: totalSegments }, (_, segmentIdx) => (
        <Box
          key={segmentIdx}
          onMouseEnter={() => setHoveredSegment(segmentIdx)}
          onMouseLeave={() => setHoveredSegment(null)}
          onClick={() => onSegmentClick(segmentIdx)}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            flex: 1,
            height: '100%',
            gap: '1px',
            cursor: 'pointer',
            zIndex: 1
          }}
        >
          {Array.from({ length: stripesPerSegment }, (_, stripeIdx) => {
            const globalIdx = segmentIdx * stripesPerSegment + stripeIdx;
            return (
              <Box
                key={stripeIdx}
                sx={{
                  padding: 0,
                  borderRadius: '8px',
                  width: `${100 / (stripesPerSegment * 2)}%`,
                  height: `${stripeHeights[globalIdx]}%`,
                  backgroundColor:
                    hoveredSegment === segmentIdx
                      ? 'rgba(60, 10, 70, 0.6)'
                      : playedSegments.includes(globalIdx + 1)
                        ? 'black'
                        : 'white',
                  transition: 'transform 0.1s ease-in-out, background 0.3s ease-in-out',
                  ':hover': {
                    transform: 'scale(1.5)',
                    transition: 'transform 0.05s ease-in-out',
                  }
                }}
              />
            );
          })}
        </Box>
      ))}
      <Box
        sx={{
          width: '100%',
          height: '4px',
          position: 'absolute',
          borderRadius: '8px',
          zIndex: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        }}
      />
    </Stack>
  );
};