import { Stack, Typography } from '@mui/material';
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
        segments: [
            {
                duration: 10,
                segment:
                    <Stack sx={{ width: '80%' }}>
                        <Typography>
                            Most of the projects from my studies can be divided
                            into these two categories:
                        </Typography>
                        <Typography>
                            <ul>
                                <li>
                                    signal processing algorithms,
                                </li>
                                <li>
                                    scripts to speed-up some of studies connected activities.
                                </li>
                            </ul>
                        </Typography>
                    </Stack>
            }
        ]
    },
    {
        id: 'noise',
        albumId: 'projects',
        name: 'Spy the NOISE',
        segments: []
    }
]