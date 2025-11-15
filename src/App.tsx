import {NavLink, type NavLinkRenderProps, Route, Routes, useParams} from "react-router";
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
                <NavLink className={classNameLink} to={'/users/29'}>User 29</NavLink>
                <NavLink className={classNameLink} to={'/users/liu'}>Use Liu</NavLink>
            </nav>
            <main className={'p-3 prose'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/users/:userId'} element={<Users/>}/>
                </Routes>
            </main>
        </>
    )
}

function Home() {
    return <h1>Home</h1>
}

function Users() {

    const params = useParams<{ userId: string }>();

    return <h1>Users {params.userId}</h1>
}