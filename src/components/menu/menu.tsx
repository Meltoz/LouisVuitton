import {Language} from "@/components/language/language";


export const Menu = () =>{

    return(
        <div className="font-futura " style={{zIndex:999}}>
            <div className="flex items-center">
                <div className="uppercase p-8 text-2xl basis-1/10 shrink-0">
                    louis vuitton <br/> <span className="text-blue-400">& Logitech</span>
                </div>
                <div className="basis-1/3 shrink-0 font-semibold">
                    <ul className="flex justify-around">
                        <li>
                            <a href="#collection">Collection</a>
                        </li>
                        <li>
                            <a href="#partner">The Partnership</a>
                        </li>
                        <li>
                            <a href="#event">Our Event</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <div className="flex justify-end mx-8">
                        <Language />
                    </div>

                </div>
            </div>

        </div>
    );
}