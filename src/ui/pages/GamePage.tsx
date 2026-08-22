import {Title} from "../elements/Title.tsx";
import {Game} from "../game/Game";
import {usePageTitle} from "../../bll/usePageTitle.ts";

export function GamePage() {
    usePageTitle("Game Page");

    return (
        <section>
            <Title title='Game' className='mb-5'/>
            <Game/>
        </section>
    )
}

