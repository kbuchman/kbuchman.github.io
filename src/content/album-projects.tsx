import { Typography } from '@mui/material';
import { Album, Record } from '../data-model.interface';
import projects_cover from '../assets/projects_cover.svg';

export const PROJECTS: Album = {
    id: 'projects',
    name: 'Projects',
    coverUrl: projects_cover,
    recordsIds: ['studies', 'noise']
}

export const PROJECTS_RECORDS: Record[] = [
    {
        id: 'studies',
        albumId: 'projects',
        name: 'Projects from studies',
        segments: []
    },
    {
        id: 'noise',
        albumId: 'projects',
        name: 'Spy the NOISE',
        segments: []
    }
]