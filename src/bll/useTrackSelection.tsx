import {useNavigate, useParams} from "react-router";

export function useTrackSelection() {
    const {trackId = null} = useParams<{ trackId: string }>()
    const navigate = useNavigate()

    const setTrackId = (id: string | null) => {
        navigate(id === null ? '/' : `/tracks/${id}`)
    }

    return {
        trackId,
        setTrackId
    }
}
