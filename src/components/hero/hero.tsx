"use client";
import React, {useEffect, useRef} from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const panneauRef = useRef<HTMLDivElement>();

    useEffect(() => {
        gsap.fromTo(
            panneauRef.current,
            {
                x:'100%'
            },
            {
                x:0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: panneauRef.current,
                    start: 'top top-=50',
                    toggleActions: 'play none none none'
                }
            }
        )
    }, []);

    return(
        <div className="h-[100vh] relative">
            <div ref={panneauRef} className="h-[90vh] bg-neutral-800 w-1/3 absolute -top-32 -z-30 right-0 flex justify-center items-center">
                <p className="vertical text-5xl text-whiteMedium">Step In Tech</p>
            </div>
            <div className="w-2/3 h-[80vh] flex items-center justify-center ">
                <div className="rounded-full bg-neutral-300 p-24 pt-28"> produit</div>
            </div>
        </div>
    )
}