import {cn} from "../../lib/utils";

interface TitleProps {
    title: string;
    className?: string;
}

export function Title({title, className}: TitleProps) {
    return (
        <h2 className={cn(
            'text-gray-50 font-bold text-2xl text-center m-0',
            className
        )}>
            {title}
        </h2>
    )
}