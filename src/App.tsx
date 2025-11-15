import {Link, Route, Routes} from "react-router";
import {clsx} from "clsx";

export function App() {
    const classNameLink = 'hover:text-amber-300 transition-colors';

    return (
        <>
            <nav className='flex items-center gap-3 p-3'>
                <Link className={clsx(classNameLink)} to={'/'}>Home</Link>
                <Link className={clsx(classNameLink)} to={'/about'}>About</Link>
                <Link className={clsx(classNameLink)} to={'/users'}>Users</Link>
            </nav>
            <main className={'p-3 prose'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                </Routes>
            </main>
        </>
    )
}

function Home() {
    return <h1>Home</h1>
}

function About() {
    return <h1>About</h1>
}

function Users() {
    return <h1>Users</h1>
}