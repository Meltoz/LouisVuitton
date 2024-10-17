import {Language} from "@/components/language/language";


export const Menu = () =>{

    return(
        <div className="z-10">
            <div className="flex items-center">
                <div className="uppercase p-8 text-xl basis-1/10 shrink-0">
                    louis vuitton <br/> <span className="text-blue-400">& Logitech</span>
                </div>
                <div className="basis-1/3 shrink-0">
                    <ul className="flex justify-around">
                        <li>
                            Collection
                        </li>
                        <li>
                            Collection
                        </li>
                        <li>
                            Collection
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