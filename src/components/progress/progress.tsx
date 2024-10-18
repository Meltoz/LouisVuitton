"use client";

import './progress.css'
import {useEffect, useRef} from "react";
import {gsap} from 'gsap';

export const Progress = () => {
    const progressBarRef = useRef<HTMLDivElement>();

    useEffect(() =>{
        const updateProgressBar = () =>{
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const scrollPercent = (scrollPosition/scrollHeight) * 100;

            gsap.to(progressBarRef.current, {width: `${scrollPercent}%`, duration: 0.1, ease: "none"});
        };

        window.addEventListener('scroll', updateProgressBar);

        return() =>{
            window.removeEventListener('scroll', updateProgressBar);
        }
    });

    return (
        <div className="vertical fixed top-[60%] -left-64 m-0 font-futura font-semibold flex items-center gap-5 w-[600px]">
            <div className="top-0 left-0 h-0.5 progress w-2/3">
                <div ref={progressBarRef} className="w-0 h-0.5 bg-neutral-300"></div>
            </div>
            <p className="w-1/3 text-neutral-300">Louis Vuitton x Logitech</p>
        </div>
    )
}