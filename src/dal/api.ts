import {API_KEY, API_URL} from "../config";

export type TrackAttachment = {
    url: string
    updatedAt?: string
}

export type TrackImages = {
    width?: number
    height?: number
    url?: string
}

export type Track = {
    id: string
    attributes: {
        title: string
        attachments: TrackAttachment[]
    }
}

export type TrackDetailsResource = {
    id: string | null
    attributes: {
        images?: {
            main: TrackImages[]
        }
        title: string
        attachments: TrackAttachment[]
    }
}

export type GetTrackDetailsOutput = { data: TrackDetailsResource }
export type GetTrackListOutput = { data: Track[] }

const PAGE_SIZE = (value?: number) => value ? `?pageSize=${value}` : '';
const TRACKS_URL = `${API_URL}/playlists/tracks`;
const LIMITED_TRACKS_URL: string = TRACKS_URL + PAGE_SIZE(5); // 5 tracks per page
const headers = {
    'api-key': API_KEY
}

export function getTracks(): Promise<GetTrackListOutput> {
    return fetch(LIMITED_TRACKS_URL, {
        headers: headers
    }).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status (Track List): ${res.status}`);
        return res.json();
    })
}


export function getTrack(trackId: string): Promise<GetTrackDetailsOutput> {
    return fetch(TRACKS_URL + '/' + trackId, {
        headers: headers
    }).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status (Track Detail): ${res.status}`);
        return res.json();
    });
}
