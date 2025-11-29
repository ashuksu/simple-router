import {Title} from "../elements/Title.tsx";
import {Game} from "../game/Game";

export function GamePage() {
    return (
        <section>
            <Title title='Game' className='mb-5'/>
            <Game/>
        </section>
    )
}
