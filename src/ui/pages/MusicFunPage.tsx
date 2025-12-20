import {Main} from "../music-fun/Main.tsx";
import {SidebarMenu} from "../music-fun/SidebarMenu.tsx";
import {useTrackSelection} from "../../bll/music-fun/useTrackSelection.tsx";
import {usePageTitle} from "../../bll/usePageTitle.ts";

export function MusicFunPage() {
    const {trackId, setTrackId} = useTrackSelection();
    const handleTrackSelect = (id: string | null) => setTrackId(id)

    usePageTitle(`Music Fun${trackId ? ` - Track ${trackId}` : ''}`);

    return (
        <div className="container flex flex-1 gap-3">
            <Main
                trackId={trackId}
                onTrackSelect={handleTrackSelect}
            />
            <SidebarMenu trackId={trackId}/>
        </div>
    )
}