import { Record } from '../data-model.interface';
import { ABOUT_RECORDS } from './album-about';
import { EDUCATION_RECORDS } from './album-education';

export const RECORDS: Record[] = [
    ...ABOUT_RECORDS,
    ...EDUCATION_RECORDS
];