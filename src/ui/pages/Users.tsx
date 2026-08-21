import {useParams} from "react-router";
import {Title} from "../elements/Title.tsx";

export function Users() {
    const params = useParams<{ userId: string }>();

    return (
        <section>
            <Title title={`Users ${params.userId}`} className='text-white'/>
        </section>
    )
}