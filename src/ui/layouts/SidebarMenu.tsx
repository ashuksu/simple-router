import TrackDetails from "../TrackDetails";
import {Title} from "../elements/Title.tsx";

export default function SidebarMenu({trackId}: { trackId: string | null }) {
    return (
        <aside className="sidebar-menu w-1/2">
            <Title title='Track Details' className='mb-5'/>
            <TrackDetails key={trackId} trackId={trackId}/>
        </aside>
    );
}