import {useEffect, useState} from "react";
import {getTrack, type GetTrackDetailsOutputData} from "../dal/api.ts";

export function useTrackDetail(trackId: string | null) {
    const [trackDetails, setTrackDetails] = useState<GetTrackDetailsOutputData | null>(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        if (!trackId) {
            setTrackDetails(null)
            return;
        }

        const promise = getTrack(trackId)
        promise.then(json => setTrackDetails(json.data))
        promise.catch(error => {
            setError(error)
        })

    }, [trackId])

    return {
        trackDetails,
        error
    }
}