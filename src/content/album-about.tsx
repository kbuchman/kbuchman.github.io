import { Typography } from '@mui/material';
import { Album, Record } from '../data-model.interface';
import about_cover from '../assets/about_cover.svg';

export const ABOUT: Album = {
    id: 'about',
    name: 'About',
    coverUrl: about_cover,
    recordsIds: ['me']
};

export const ABOUT_RECORDS: Record[] = [
    {
        id: 'me',
        albumId: 'about',
        name: 'ME',
        segments: [
            {
                duration: 5,
                segment: <div>HI</div>
            },
            {
                duration: 5,
                segment: <div>HI</div>
            }

        ]
    }
];