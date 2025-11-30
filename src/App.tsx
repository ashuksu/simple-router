import {Route, Routes} from "react-router";
import {Header} from "./ui/layouts/Header.tsx";
import {Footer} from "./ui/layouts/Footer.tsx";
import {HomePage} from "./ui/pages/HomePage.tsx";
import {GamePage} from "./ui/pages/GamePage.tsx";
import {Users} from "./ui/pages/Users.tsx";
import {MusicFun} from "./ui/pages/MusicFun.tsx";

export function App() {
    return (
        <>
            <Header/>
            <main className="flex flex-col flex-1 gap-3 py-5">
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/music-fun'} element={<MusicFun/>}/>
                    <Route path={'/game'} element={<GamePage/>}/>
                    <Route path={'/users/:userId'} element={<Users/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}
