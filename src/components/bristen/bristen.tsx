"use client";

import React from "react";
import { useEffect, useRef} from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Bristen = () => {
    const bristenRef = useRef<HTMLDivElement>()

    useEffect(() => {
        gsap.fromTo(bristenRef.current, {y: 0},
            {
                y: 900,
                ease: 'none',
                scrollTrigger: {
                    trigger: bristenRef.current,
                    start: 'top 20%',
                    end: 'bottom bottom',
                    scrub: true
                }
            })
    }, [])

    return (
        <div className="mt-36">
            <p className="text-center text-4xl">The Victory travels with Louis Vuitton</p>
            <div className="h-[161vh]">
                <h1 ref={bristenRef} className="text-center h-full text-[34em]">BRISTEN</h1>
            </div>
            <div>
                <img src="./imgs/malette.png" className="relative h-[70vh] left-1/2 -translate-x-1/2 -top-72" />
            </div>
            <div className="text-center text-2xl -mt-36 mb-32">
                <p >Buying our peripherals collectiona lso means getting a unique
                    lightweight trunk,</p>
                <p>designed with the essence of the collaboration between Louis Vuitton and Logitech:</p>
                <p>creativity, premium materials and performance.</p>
            </div>
        </div>
    )
}