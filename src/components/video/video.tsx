"use client";

import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const Video = () =>{
    const videoRef = useRef<HTMLVideoElement>();

    useEffect(() =>{
        if(typeof window !=='undefined') {
            const videoElement = videoRef.current;

            gsap.to(videoElement, {
                x: '100vw',
                duration: 2,
                opacity:0,
                scrollTrigger: {
                    trigger: videoElement,
                    start: 'top top',
                    end: '+=100px',
                    once: true
                },
                onComplete: () =>{
                    videoElement.style.display = 'none';
                }
            })
        }

    }, []);

    return (
        <div className="absolute -top-0 -z-10">
            <video ref={videoRef} autoPlay loop muted>
                <source src="videos/12487101_1920_1080_25fps.mp4"/>
            </video>
        </div>
    )
}