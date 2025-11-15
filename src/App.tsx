import {NavLink, type NavLinkRenderProps, Route, Routes} from "react-router";
import {clsx} from "clsx";

export function App() {
    const classNameLink = ({isActive}: NavLinkRenderProps) => {
        return clsx(
            'transition-colors font-bold',
            {
                'text-amber-500 cursor-default': isActive,
                'hover:text-amber-300': !isActive
            }
        );
    };

    return (
        <>
            <nav className='flex items-center gap-3 p-3'>
                <NavLink className={classNameLink} to={'/'}>Home</NavLink>
                <NavLink className={classNameLink} to={'/about'}>About</NavLink>
                <NavLink className={classNameLink} to={'/users'}>Users</NavLink>
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