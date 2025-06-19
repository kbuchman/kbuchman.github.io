import React from 'react'
import { RECORDS } from './content/all-records';
import { Album, Record, Segment } from './data-model.interface';
import { ALBUMS } from './content/all-albums';

export const useRecordHandler = () => {
    const [currentRecord, setCurrentRecord] = React.useState<Record | null>(null);
    const [currentQueue, setCurrentQueue] = React.useState<string[]>([]);
    const [currentSegment, setCurrentSegment] = React.useState<Segment | null>(null);
    const [currentAlbum, setCurrentAlbum] = React.useState<Album | null>(null)
    const [currentSegmentNumber, setCurrentSegmentNumber] = React.useState<number>(0);
    const [currentTotalSegments, setCurrentTotalSegments] = React.useState<number>(0);
    const [played, setPlayed] = React.useState<boolean>(false);
    const [repeated, setRepeated] = React.useState<boolean>(false);

    const resetQueue = () => {
        const queue = RECORDS.map(r => r.albumId + r.id);
        setCurrentQueue(queue);
    };

    const findRecord = (fullId: string): Record | null => {
        return RECORDS.find(r =>
            r.albumId + r.id === fullId) ?? null;
    };

    const onStartPlay = () => {
        const queue = RECORDS.map(r => r.albumId + r.id);
        setCurrentQueue(queue);
        setPlayed(true);
        setCurrentRecord(findRecord(queue[0]));
    };

    const onRecordPlay = (albumId: string, recordId: string) => {
        setPlayed(true);
        setCurrentRecord(findRecord(albumId + recordId));
    };

    const onShuffle = (status: boolean) => {
        if (status) {
            const shuffled = [...currentQueue].sort(() => Math.random() - 0.5);
            setCurrentQueue(shuffled);
        } else {
            resetQueue();
        }
    };

    const onRepeat = (status: boolean) => {
        setRepeated(status);
    };

    const onBackward = () => {
        if (currentSegmentNumber > 0) {
            setCurrentSegmentNumber(0);
            return;
        }

        const currentId = (currentRecord?.albumId ?? '') + (currentRecord?.id ?? '');
        const idx = currentQueue.indexOf(currentId);

        if (idx > 0) {
            setCurrentRecord(findRecord(currentQueue[idx - 1]));
        } else {
            setCurrentRecord(findRecord(currentQueue[currentQueue.length - 1]));
        }
    };

    const onForward = () => {
        const currentId = (currentRecord?.albumId ?? '') + (currentRecord?.id ?? '');
        const idx = currentQueue.indexOf(currentId);

        if (idx < currentQueue.length - 1) {
            setCurrentRecord(findRecord(currentQueue[idx + 1]));
        } else {
            setCurrentRecord(findRecord(currentQueue[0]));
        }
    };

    const onSegmentClick = (segmentNumber: number) => {
        setCurrentSegmentNumber(segmentNumber);
    };

    React.useEffect(() => {
        setCurrentTotalSegments(currentRecord?.segments.length ?? 0);
        setCurrentSegmentNumber(0);

        const newAlbum = ALBUMS.find(a => a.id === currentRecord?.albumId) ?? null;
        setCurrentAlbum(newAlbum);

        const newSegment = currentRecord?.segments[0] ?? null;
        setCurrentSegment(newSegment);
    }, [currentRecord]);

    React.useEffect(() => {
        const newSegment = currentRecord?.segments[currentSegmentNumber] ?? null;
        setCurrentSegment(newSegment);
    }, [currentSegmentNumber]);

    React.useEffect(() => {
        if (
            !played ||
            !currentRecord ||
            !currentRecord.segments ||
            currentRecord.segments.length === 0
        ) return;

        let timer: NodeJS.Timeout | null = null;

        const playSegments = (index: number) => {
            if (
                !played ||
                !currentRecord ||
                !currentRecord.segments ||
                index >= currentRecord.segments.length ||
                !currentRecord.segments[index]
            ) {
                setPlayed(false);
                return;
            }

            setCurrentSegmentNumber(index);

            const segment = currentRecord.segments[index];
            timer = setTimeout(() => {
                if (index + 1 < currentRecord.segments.length) {
                    playSegments(index + 1);
                } else {
                    setCurrentSegmentNumber(0);
                    if (repeated) {
                        playSegments(0);
                        return;
                    }
                    onForward();
                }
            }, (segment?.duration ?? 0) * 1000);
        };

        playSegments(currentSegmentNumber);

        return () => {
            if (timer) clearTimeout(timer);
        };

    }, [
        played,
        currentRecord,
        currentQueue,
        repeated,
        currentSegmentNumber
    ])

    return {
        currentAlbum,
        currentRecord,
        currentSegment,
        currentSegmentNumber,
        currentTotalSegments,
        played,
        setPlayed,
        onStartPlay,
        onRecordPlay,
        onShuffle,
        onRepeat,
        onBackward,
        onForward,
        onSegmentClick
    }
};