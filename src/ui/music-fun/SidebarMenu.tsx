import TrackDetails from "./TrackDetails.tsx";
import {Title} from "../elements/Title.tsx";

type Props = {
    trackId: string | null
}

export function SidebarMenu({trackId}: Props) {
    return (
        <aside className="sidebar-menu w-1/2">
            <Title title='Track Details' className='mb-5'/>
            <TrackDetails key={trackId} trackId={trackId}/>
        </aside>
    );
}