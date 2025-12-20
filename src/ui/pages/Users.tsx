import {useParams} from "react-router";
import {Title} from "../elements/Title.tsx";
import {usePageTitle} from "../../bll/usePageTitle.ts";

export function Users() {
    const params = useParams<{ userId: string }>();

    usePageTitle(`Users ${params.userId}`);

    return (
        <section>
            <Title title={`Users ${params.userId}`} className='text-white'/>
        </section>
    )
}