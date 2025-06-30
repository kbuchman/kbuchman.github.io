import { Typography } from '@mui/material';
import { Album, Record } from '../data-model.interface';
import education_cover from '../assets/education_cover.svg';
import photo1 from '../assets/education/1.jpg'

export const EDUCATION: Album = {
    id: 'education',
    name: 'Education',
    coverUrl: education_cover,
    recordsIds: ['studies1', /* 'secondary' */]
};

export const EDUCATION_RECORDS: Record[] = [
    {
        id: 'studies1',
        albumId: 'education',
        name: 'Studies (2021 - ...) - Acoustic Engineering',
        segments: [
            {
                duration: 15,
                segment:
                    <>
                        <img
                            alt={'agh'}
                            src={photo1}
                            height={'80%'}
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                        <Typography width={'60%'}>
                            Since January 2021 I have been pursuing a degree in Acoustics Engineering at
                            AGH in Cracow, focusing on the scientific study of sound and its applications
                            in various engineering fields.
                        </Typography>
                    </>
            },
            {
                duration: 15,
                segment:
                    <>
                        <Typography width={'80%'}>
                            This studies has given me the opportunity to:
                            <ul>
                                <li>
                                    Study sound analysis, noise control, and acoustic system design.
                                </li>
                                <li>
                                    Gain expertise in building acoustics, audio technology, and environmental noise control.
                                </li>
                                <li>
                                    Learn to use technical programs like AutoCAD, Inventor, SoundPlan, and others.
                                </li>
                                <li>
                                    Develop programming skills in Python, C#, LabVIEW, and MATLAB for
                                    acoustics-related applications.
                                </li>
                            </ul>
                        </Typography>
                    </>
            }
        ]
    },
    /*     {
            id: 'secondary',
            albumId: 'education',
            name: 'Secondary School',
            segments: []
        } */
];