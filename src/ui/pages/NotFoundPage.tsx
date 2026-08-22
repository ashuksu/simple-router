import {Link} from "react-router";
import {Title} from "../elements/Title.tsx";

export function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-3 flex-1 text-white">
            <Title title='404' className='text-4xl'/>
            <p>Page not found</p>
            <Link to="/" className="text-amber-400 hover:text-amber-300">Go to Home</Link>
        </div>
    );
}