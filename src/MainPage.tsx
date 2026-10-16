import {TracksList} from "./ui/TracksList.tsx";
import {TrackDetail} from "./ui/TrackDetail.tsx";
import {useTrackSelection} from "./bll/useTrackSelection.tsx";

export function MainPage() {
    const {trackId} = useTrackSelection()


    return <div>
        <div style={{display: 'flex', gap: '40px'}}>
            <TracksList selectedTrackId={trackId} />
            <TrackDetail trackId={trackId}/>
        </div>
    </div>
}