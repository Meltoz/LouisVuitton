"use client";

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Bristen = () =>{
    const bristenRef = useRef<HTMLDivElement>()

    useEffect(() =>{
        const bristenElement = bristenRef.current;

        if(bristenElement){
            gsap.to(bristenElement,{
                scrollTrigger: {
                    trigger: bristenElement,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                    markers: true
                },
                y: () => window.innerHeight
            })
        }
    })

    return (
        <div className="relative h-[2000px]">
            <div ref={bristenRef} className="absolute">
                <p
                    className="font-bold text-center text-6xl">BRISTEN</p>
            </div>

            <p className="text-center font-bold text-xl mb-96">The Victory travels with Louis Vuitton</p>

            <img src="/imgs/malette.png" width="823px"/>
            <p className="text-center font-bold mt-96">Buying our peripherals collection also mean getting a unique
                lightweight trunk, <br/> designed with the essence of the collaboration between Louis Vuitton and
                Logitech : <br/> creativity, premium materials and performance. </p>

        </div>
    )
}