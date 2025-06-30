import { Typography, Stack } from '@mui/material';
import { Album, Record } from '../data-model.interface';
import work_cover from '../assets/work_cover.svg';

export const WORK: Album = {
    id: 'work',
    name: 'Work experience',
    coverUrl: work_cover,
    recordsIds: ['abb']
}

export const WORK_RECORDS: Record[] = [
    {
        id: 'abb',
        albumId: 'work',
        name: 'ABB (2023 - ...) - Software Developer',
        segments: [
            {
                duration: 5,
                segment: (
                    <Stack
                        direction={"column"}
                        sx={{ width: '80%' }}
                    >
                        <Typography
                            variant={'h4'}
                            fontWeight={600}
                        >
                            ABB
                        </Typography>
                        <Typography variant={'subtitle1'}>
                            Cracow, Małopolskie, Poland &nbsp;|&nbsp; Hybrid
                        </Typography>
                    </Stack>
                )
            },
            {
                duration: 5,
                segment: (
                    <Stack
                        direction={'column'}
                        sx={{ width: '80%' }}
                    >
                        <Typography
                            variant={'h4'}
                            fontWeight={600}
                        >
                            Software Developer (Internship)
                        </Typography>
                        <Typography variant={'subtitle1'}>
                            Jan 2023 - Dec 2023
                        </Typography>
                    </Stack>
                )
            },
            {
                duration: 15,
                segment: (
                    <Stack
                        direction={'column'}
                        sx={{ width: '80%' }}
                    >
                        <Typography variant={'h5'}>
                            Key responsibilities during internship:
                        </Typography>
                        <Typography>
                            <ul>
                                <li>
                                    Maintained and resolved issues for a Manufacturing Execution
                                    System (MES) application, enhancing reliability and performance.
                                </li>
                                <li>
                                    Developed new app modules through close collaboration with UI/UX
                                    team and other team members, ensuring user-friendly designs and
                                    seamless functionality.
                                </li>
                            </ul>
                        </Typography>
                    </Stack>
                )
            },
            {
                duration: 15,
                segment: (
                    <Stack
                        direction={'column'}
                        sx={{ width: '80%' }}
                    >
                        <Typography>
                            <ul>
                                <li>
                                    Collaborated within a Scrum team, including developers, testers,
                                    and UI/UX designers.
                                </li>
                                <li>
                                    Contributed to code migration from TFS to Git, ensuring a smooth
                                    transition and improved version control processes.
                                </li>
                                <li>
                                    Utilized technologies such as C#, .NET, WinForms, and Blazor.
                                </li>
                                <li>
                                    Ensured documentation was up to date for streamlined knowledge
                                    sharing and project tracking.
                                </li>
                            </ul>
                        </Typography>
                    </Stack>
                )
            },
            {
                duration: 5,
                segment: (
                    <Stack
                        direction={'column'}
                        sx={{ width: '80%' }}
                    >
                        <Typography
                            variant={'h4'}
                            fontWeight={600}
                        >
                            Software Developer (Contract)
                        </Typography>
                        <Typography variant={'subtitle1'}>
                            Jan 2024 - Present
                        </Typography>
                    </Stack>
                )
            },
            {
                duration: 15,
                segment: (
                    <Stack
                        direction={'column'}
                        sx={{ width: '80%' }}
                    >
                        <Typography variant={'h5'}>
                            My current responsibilities as a contractor:
                        </Typography>
                        <Typography>
                            <ul>
                                <li>
                                    Maintain and develop an AI-enhanced application.
                                </li>
                                <li>
                                    Implement full-stack features based on prototypes.
                                </li>
                                <li>
                                    Collaborate in a Scrum team with multinational colleagues.
                                </li>
                                <li>
                                    Deploy solutions into Azure infrastructure.
                                </li>
                                <li>
                                    Write tests and documentation to ensure project quality.
                                </li>
                                <li>
                                    Utilize a technical stack including C#, .NET, React, and TypeScript.
                                </li>
                            </ul>
                        </Typography>
                    </Stack>
                )
            }
        ]
    }
]