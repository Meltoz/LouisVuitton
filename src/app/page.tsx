import {Bristen} from "@/components/bristen/bristen";
import {Partner} from "@/components/patner/partner";
import {Hero} from "@/components/hero/hero";
import {Dinner} from "@/components/dinner/dinner";
import {Footer} from "@/components/footer/footer";
import {Carousel} from "@/components/carousel/carousel";


export default function Home() {
    const tab = [{
        name: "The Set",
        active: true,
        item: {
            name: '',
            src: './imgs/products/set.webp',
            description: ''
        }
    }, {
        name: 'Mouse',
        active: false,
        item: {
            name: 'Logitech G Pro leghtspeed',
            src: './imgs/products/mouse.webp',
            description: 'So light but so powerfull'
        }
    }, {
        name: 'KeyBoard',
        active: false,
        item: {
            name: 'Clavier G315 Wireless',
            src: './imgs/products/keyboard.webp',
            description: 'The French elegance with wireless performance'
        }
    }, {
        name: 'Mousepad',
        active: false,
        item: {
            name: 'Louis Vuitton Full Grain Leather mousepad',
            src: './imgs/products/mousepad.webp',
            description: 'The softness of Italian leather for you long gaming sessions'
        }
    }];

    return (
        <div>
            <div id="collection">
                <Hero/>
            </div>

            <Partner/>
            <div id="partner">
                <Carousel data={tab}/>
            </div>

            <Bristen/>
            <div id="event">
                <Dinner/>
            </div>

            <Footer/>
        </div>
    );
}
