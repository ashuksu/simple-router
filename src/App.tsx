import {Route, Routes, useParams} from "react-router";
import Header from "./ui/layouts/Header.tsx";
import Footer from "./ui/layouts/Footer.tsx";
import {HomePage} from "./ui/pages/HomePage.tsx";

export function App() {
    return (
        <>
            <Header/>
            <main className="flex flex-col flex-1 gap-3 py-5">
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/users/:userId'} element={<Users/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

function Users() {

    const params = useParams<{ userId: string }>();

    return <section><h1>Users {params.userId}</h1></section>
}