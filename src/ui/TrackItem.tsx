import type {TrackListItemOutput} from "../dal/api.ts";
import styles from "./TracksList.module.css";
import clsx from "clsx";

type Props = {
    isSelected: boolean
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
}

export function TrackItem({onSelect, track, isSelected}: Props) {
    const handleClick = () => onSelect?.(track.id)

    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
    })

    return <li  className={className} key={track.id}>
        <div onClick={handleClick}>
            {track.attributes.title.toUpperCase()}
        </div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
}