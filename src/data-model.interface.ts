export interface Record {
    id: string;
    name: string;
    sections: React.FC[];
}

export interface Album {
    id: string;
    name: string;
    coverUrl: string;
    records: Record[];
}