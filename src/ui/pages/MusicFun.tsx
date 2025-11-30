import Main from "../layouts/Main";
import SidebarMenu from "../layouts/SidebarMenu";
import {useTrackSelection} from "../../bll/useTrackSelection";

export function MusicFun() {
    const {trackId, setTrackId} = useTrackSelection();
    const handleTrackSelect = (id: string | null) => setTrackId(id)

    return (
        <>
            <main className="flex flex-1 gap-3 py-3">
                <Main
                    trackId={trackId}
                    onTrackSelect={handleTrackSelect}
                />
                <SidebarMenu trackId={trackId}/>
            </main>
        </>
    )
}