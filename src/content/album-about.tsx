import { Stack, Typography } from '@mui/material';
import { Album, Record } from '../data-model.interface';
import about_cover from '../assets/about_cover.svg';
import photo1 from '../assets/about/1.jpg';
import photo2 from '../assets/about/2.jpg';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

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
                duration: 3,
                segment:
                    <>
                        <Stack>
                            <Typography variant={'h2'}>
                                Hi!
                            </Typography>
                            <Typography variant={'h3'}>
                                I am Karol
                            </Typography>
                        </Stack>
                        <img
                            alt={'me'}
                            src={photo1}
                            height={'80%'}
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                    </>
            },
            {
                duration: 15,
                segment:
                    <Typography
                        sx={{ width: '60%' }}
                        textAlign={'center'}
                    >
                        I am an Acoustics Engineering student with a strong foundation in technical
                        problem-solving and innovation. Alongside my academic pursuits, I work as a
                        software developer within an R&D team, where I contribute to the design and
                        implementation of advanced solutions in dynamic and challenging environments.
                    </Typography>
            },
            {
                duration: 15,
                segment:
                    <>
                        <SentimentSatisfiedAltIcon
                            sx={{
                                height: '96px',
                                width: '96px'
                            }}
                        />
                        <Typography sx={{ width: '60%' }}>
                            This combination of academic learning and hands-on experience has shaped my
                            ability to adapt and grow. Working on a variety of projects has enabled me
                            to strengthen my skills in both backend and frontend development, allowing me
                            to build more comprehensive and efficient solutions.
                        </Typography>
                    </>
            },
            {
                duration: 15,
                segment:
                    <>
                        <Typography
                            textAlign={'right'}
                            sx={{ width: '60%' }}
                        >
                            In my professional experience, I have worked in Scrum teams and collaborated with
                            diverse, multinational teams. These experiences have strengthened my ability to work
                            in cross-functional environments, solving complex problems and driving innovative
                            solutions together with colleagues from various roles.
                        </Typography>
                        <img
                            alt={'way'}
                            src={photo2}
                            height={'80%'}
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                    </>
            }
        ]
    }
];