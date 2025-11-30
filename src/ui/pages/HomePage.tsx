import {Title} from "../elements/Title.tsx";
import {HomePageContent} from "../layouts/HomePageContent.tsx";

export function HomePage() {
    return (
        <section>
            <Title title='Home Page' className='text-white container'/>
            <HomePageContent/>
        </section>
    )
}

