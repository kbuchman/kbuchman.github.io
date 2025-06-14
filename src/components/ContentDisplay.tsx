import { Box, IconButton, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

export interface ContentDisplayProps {
    onStartPlay: () => void;
    section?: any;
};

export const ContentDisplay: React.FC<ContentDisplayProps> = ({
    onStartPlay,
    section
}) => {

    const welcomePage = () => {
        return (
            <Stack direction={'row'}
                sx={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <Typography
                    variant={'h3'}
                    sx={{
                        width: '50%',
                        padding: 4
                    }}
                >
                    PLAY a SONG to get ME know BETTER
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        padding: 4
                    }}
                >
                    <IconButton
                        onClick={() => onStartPlay()}
                        sx={{
                            color: 'black',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            },
                            height: '200px',
                            width: '200px',
                            '.MuiSvgIcon-root': {
                                height: '100px',
                                width: '100px',
                            }
                        }}
                    >
                        <PlayArrowIcon />
                    </IconButton>
                </Box>
            </Stack>
        );
    }

    return (
        <Paper
            sx={{
                width: '100%',
                height: '100%',
                padding: 2
            }}
        >
            {section ?? welcomePage()}
        </Paper>
    );
};