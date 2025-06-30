import { Record } from '../data-model.interface';
import { ABOUT_RECORDS } from './album-about';
import { EDUCATION_RECORDS } from './album-education';
import { PROJECTS_RECORDS } from './album-projects';
import { SIDE_RECORDS } from './album-side';
import { WORK_RECORDS } from './album-work';

export const RECORDS: Record[] = [
    ...ABOUT_RECORDS,
    ...EDUCATION_RECORDS,
    ...WORK_RECORDS,
    //...PROJECTS_RECORDS,
    ...SIDE_RECORDS
];