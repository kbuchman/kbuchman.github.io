import { Box, Collapse, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Album } from '../data-model.interface';
import defaultCover from '../assets/default_cover.svg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

export interface AlbumListProps {
  albums: Album[];
  onRecordPlay: (albumId: string, recordId: string) => void;
  selectedRecordId: string;
}

export const AlbumList: React.FC<AlbumListProps> = ({
  albums,
  onRecordPlay,
  selectedRecordId
}) => {
  const [openAlbums, setOpenAlbums] = React.useState<{ [albumId: string]: boolean }>({});

  return (
    <Paper
      sx={{
        minWidth: '300px',
        width: '35%',
        height: '100%',
        padding: 2,
        overflowY: 'auto'
      }}
    >
      <List
        sx={{
          width: '100%',
          height: '100%',
          padding: 0
        }}
      >
        {albums.map((album) => (
          <React.Fragment key={album.id}>
            <ListItemButton
              onClick={() =>
                setOpenAlbums((prev) => ({
                  ...prev,
                  [album.id]: !prev[album.id]
                }))
              }
              sx={{
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '8px',
              }}
            >
              <img
                src={/* album.coverUrl ||  */defaultCover}
                alt={album.name}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px'
                }}
              />
              <Stack
                sx={{
                  width: '100%',
                  paddingLeft: 2,
                  gap: '4px',
                  alignSelf: 'flex-end'
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant={'h6'}>
                      {album.name}
                    </Typography>
                  }
                  sx={{ margin: 0 }}
                />
                <Box
                  sx={{
                    width: '100%',
                    height: '4px',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                  }}
                />
              </Stack>
              <Box
                sx={{
                  position: 'absolute',
                  right: '4px',
                  top: '16px'
                }}
              >
                {!!openAlbums[album.id]
                  ? <ExpandLess />
                  : <ExpandMore />
                }
              </Box>
            </ListItemButton>
            <Collapse
              in={!!openAlbums[album.id]}
              timeout={'auto'}
              unmountOnExit
            >
              <List sx={{ paddingLeft: 8 }}>
                <ListItem
                  disablePadding
                  alignItems={'flex-start'}
                >
                  <Typography
                    sx={{
                      width: '32px',
                      paddingLeft: 1,
                      paddingRight: 2
                    }}
                  >
                    #
                  </Typography>
                  <Typography sx={{ width: '100%' }}>
                    Title
                  </Typography>
                </ListItem>
                {album.records.map((record, idx) => (
                  <ListItemButton
                    key={album.id + record.id}
                    alignItems={'flex-start'}
                    sx={{
                      padding: 0,
                      alignItems: 'center',
                      borderRadius: '16px',
                      marginBottom: 1,
                      backgroundColor:
                        album.id + record.id === selectedRecordId
                          ? 'rgba(100, 15, 150, 0.5)'
                          : 'inherit',
                      ':hover': {
                        backgroundColor:
                          album.id + record.id === selectedRecordId
                            ? 'rgba(100, 15, 150, 0.7)'
                            : 'inherit'
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        width: '32px',
                        paddingLeft: 1,
                        paddingRight: 2
                      }}
                    >
                      {`${idx + 1}.`}
                    </Typography>
                    <Typography sx={{ width: '100%' }}>
                      {record.name}
                    </Typography>
                    <IconButton
                      onClick={() => onRecordPlay(album.id, record.id)}
                      size={'small'}
                      sx={{
                        color: 'black',
                        backgroundColor: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }
                      }}
                    >
                      <PlayArrowIcon />
                    </IconButton>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Paper >
  );
};