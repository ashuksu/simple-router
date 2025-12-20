import {Link} from "react-router";
import {Title} from "../elements/Title.tsx";
import {usePageTitle} from "../../bll/usePageTitle.ts";

export function NotFoundPage() {
    usePageTitle("404 - Page not Found");

    return (
        <div className="flex flex-col items-center justify-center gap-3 flex-1 text-white">
            <Title title='404' className='text-4xl'/>
            <p>Page not found</p>
            <Link to="/" className="text-amber-400 hover:text-amber-300">Go to Home</Link>
        </div>
    );
}