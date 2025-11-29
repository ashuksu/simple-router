import {useParams} from "react-router";

export function Users() {

    const params = useParams<{ userId: string }>();

    return (
        <section>
            <h1>Users {params.userId}</h1>
        </section>
    )
}