import {NavLink, type NavLinkRenderProps} from "react-router";
import {clsx} from "clsx";

export default function Header() {
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
        <header className='header shrink-0 bg-gray-800'>
            <nav className='container flex items-center justify-center gap-3 py-3 text-white'>
                <NavLink className={classNameLink} to={'/'}>Home</NavLink>
                <NavLink className={classNameLink} to={'/users/29'}>User 29</NavLink>
                <NavLink className={classNameLink} to={'/users/liu'}>Use Liu</NavLink>
            </nav>
        </header>
    )
}