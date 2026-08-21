import TrackList from "./TrackList.tsx";
import {Title} from "../elements/Title.tsx";

interface Props {
    trackId: string | null;
    onTrackSelect: (id: string | null) => void;
}

export function Main({trackId, onTrackSelect}: Props) {
    return (
        <section className="section w-1/2">
            <Title title='Track List' className='mb-5'/>
            <TrackList selectedTrackId={trackId} onTrackSelect={onTrackSelect}/>
        </section>
    );
}

