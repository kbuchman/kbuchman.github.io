import { Typography } from '@mui/material';
import { Album, Record } from '../data-model.interface';
import side_cover from '../assets/side_cover.svg';


export const SIDE: Album = {
    id: 'side',
    name: 'Side activities',
    coverUrl: side_cover,
    recordsIds: ['fishing', 'photography']
}

export const SIDE_RECORDS: Record[] = [
    {
        id: 'fishing',
        albumId: 'side',
        name: 'Fishing',
        segments: []
    },
    {
        id: 'photography',
        albumId: 'side',
        name: 'Photography',
        segments: []
    }
]