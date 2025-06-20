import { Typography } from '@mui/material';
import { Album, Record } from '../data-model.interface';
import education_cover from '../assets/education_cover.svg';

export const EDUCATION: Album = {
    id: 'education',
    name: 'Education',
    coverUrl: education_cover,
    recordsIds: ['secondary', 'studies1']
};

export const EDUCATION_RECORDS: Record[] = [
    {
        id: 'secondary',
        albumId: 'education',
        name: 'Secondary School',
        segments: []
    },
    {
        id: 'studies1',
        albumId: 'education',
        name: 'Studies - Acoustic Engineering',
        segments: []
    }
];