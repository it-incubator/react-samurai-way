import {useTrackDetail} from "../bll/useTrackDetail.tsx";

import styles from "./TrackDetail.module.css"
import {Navigate} from "react-router";
import {NotFoundError} from "../dal/api.ts";

type Props = {
    trackId: string | null
}


export function TrackDetail({trackId}: Props) {
    const {trackDetails, error} = useTrackDetail(trackId)

    if (error && error instanceof NotFoundError) return <Navigate to={'/not-found'}/>
    if (error) return <div>Some error occurred</div>

    return <div className={styles.track}>
        <h2>Details</h2>
        {!trackDetails && !trackId && 'Track is not selected'}
        {!trackDetails && trackId && 'Loading...'}
        {trackDetails && trackId && trackDetails.id !== trackId && 'Loading...'}
        {trackDetails && <div>
            <h3>{trackDetails.attributes.title}</h3>
            <h4>Lyrics</h4>
            <p>
                {trackDetails.attributes.lyrics ?? 'no lyrics'}
            </p>
        </div>
        }
    </div>
}