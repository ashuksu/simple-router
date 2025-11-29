import Title from "../elements/Title.tsx";
import {Game} from "../game/Game";

export function GamePage() {
    return (
        <section>
            <Title title='Game' className='my-5'/>
            <Game/>
        </section>
    )
}
