export type GetTrackDetailsOutputData = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}

export type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
           // 'api-key': '8fef2f5b-1e1e-48a3-802e-10b7d5962ab4'
        }
    }).then(res => res.json())

    return promise
}

type AttachmentDto = {
    url: string
}

type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
    id: string
    attributes: TrackListItemOutputAttributes
}
export type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}
export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
          //  'api-key': '8fef2f5b-1e1e-48a3-802e-10b7d5962ab4'
        }
    }).then(res => res.json())

    return promise;
}