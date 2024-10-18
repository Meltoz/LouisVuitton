import {Bristen} from "@/components/bristen/bristen";
import {Partner} from "@/components/patner/partner";
import {Hero} from "@/components/hero/hero";
import {Dinner} from "@/components/dinner/dinner";
import {Footer} from "@/components/footer/footer";
import {Video} from "@/components/video/video";


export default function Home() {
    return (
        <div>
            <Video />
            <Hero />
            <Partner/>
            <Bristen/>
            <Dinner />
            <Footer />
        </div>
    );
}
