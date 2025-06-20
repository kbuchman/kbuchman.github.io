import { Typography } from '@mui/material';
import { Album, Record } from '../data-model.interface';
import work_cover from '../assets/work_cover.svg';

export const WORK: Album = {
    id: 'work',
    name: 'Work expirience',
    coverUrl: work_cover,
    recordsIds: ['abb']
}

export const WORK_RECORDS: Record[] = [
    {
        id: 'abb',
        albumId: 'work',
        name: 'ABB',
        segments: []
    }
]