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

const prepareHeaders = () => {
    const apiKey =  import.meta.env.VITE_API_KEY
    if (!apiKey) return undefined

    return {
        'api-key': apiKey
    }
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: prepareHeaders()
    }).then(res => {
        if (!res.ok) {

            if (res.status === 404) {
                throw new NotFoundError(`Track with id ${trackId} not found`)
            }
            throw new Error('Unable to get track with id ' + trackId)
        }

        return res.json();
    })

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
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise;
}

export class NotFoundError extends Error {
    constructor(message: string) {
        super(message)
    }
}