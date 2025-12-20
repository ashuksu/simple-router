import {Title} from "../elements/Title.tsx";
import {HomePageContent} from "../layouts/HomePageContent.tsx";
import {usePageTitle} from "../../bll/usePageTitle.ts";

export function HomePage() {
    usePageTitle("Home Page");

    return (
        <section>
            <Title title='Home Page' className='text-white container'/>
            <HomePageContent/>
        </section>
    )
}

