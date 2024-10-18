"use client";

import {useEffect, useRef} from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Bristen = () => {
    const bristenRef = useRef<HTMLDivElement>()

    useEffect(() => {
        gsap.fromTo(bristenRef.current, {y: 0},
            {
                ease: 'none',
                scrollTrigger: {
                    trigger: bristenRef.current,
                    start: 'top 20%',
                    end: 'bottom bottom',
                    scrub: true,
                    markers: true}
            })
    }, [])

    return (
        <div className="h-[100vh]">
            <h1 ref={bristenRef} className="text-center h-full text-[25em]">BRISTEN</h1>
        </div>
    )
}