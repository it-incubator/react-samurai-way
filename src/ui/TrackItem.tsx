import type {TrackListItemOutput} from "../dal/api.ts";
import styles from "./TracksList.module.css";
import clsx from "clsx";
import {Link} from "react-router";

type Props = {
    isSelected: boolean
    onSelect?: (trackId: string) => void
    track: TrackListItemOutput
}

export function TrackItem({onSelect, track, isSelected}: Props) {
    const handleClick = () => onSelect?.(track.id)

    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
    })

    return <li  className={className} key={track.id}>
        <Link onClick={handleClick} to={`/tracks/${track.id}`}>
            {track.attributes.title.toUpperCase()}
        </Link>
        <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
}