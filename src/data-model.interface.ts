export interface Segment {
    duration: number; // in seconds
    segment: any;
}

export interface Record {
    id: string;
    albumId: string;
    name: string;
    segments: Segment[];
}

export interface Album {
    id: string;
    name: string;
    coverUrl: string;
    recordsIds: string[];
}