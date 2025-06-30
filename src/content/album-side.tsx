import { Typography } from '@mui/material';
import { Album, Record } from '../data-model.interface';
import side_cover from '../assets/side_cover.svg';
import photo1 from '../assets/side/1.jpg';
import photo2 from '../assets/side/2.jpg';
import photo3 from '../assets/side/3.jpg';
import photo4 from '../assets/side/4.jpg';
import photo5 from '../assets/side/5.jpg';


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
        segments: [
            {
                duration: 15,
                segment:
                    <>
                        <img
                            alt={'fishing'}
                            src={photo1}
                            height={'80%'}
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                        <Typography sx={{ width: '45%' }}>
                            One of my most favorite activities is fishing, and to be more precise,
                            fly fishing. I enjoy the peacefulness of being by the water, the challenge
                            of casting, and the excitement of catching fish using hand-tied flies.
                            It's a relaxing way to connect with nature and unwind from daily routines.
                        </Typography>
                    </>
            }
        ]
    },
    {
        id: 'photography',
        albumId: 'side',
        name: 'Photography',
        segments: [
            {
                duration: 10,
                segment:
                    <>
                        <Typography sx={{ width: '50%' }}>
                            I derive a lot of joy from photography. I focus mainly on macro and birds.
                        </Typography>
                        <img
                            alt={'bird'}
                            src={photo2}
                            height={'80%'}
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                    </>
            },
            {
                duration: 10,
                segment:
                    <>
                        <img
                            alt={'dragonfly'}
                            src={photo3}
                            height={'80%'}
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                        <img
                            alt={'flower'}
                            src={photo4}
                            height={'80%'}
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                        <img
                            alt={'bird'}
                            src={photo5}
                            height={'80%'}
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                    </>
            }
        ]
    }
]