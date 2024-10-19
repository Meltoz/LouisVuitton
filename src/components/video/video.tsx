"use client";

import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./video.css";

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
        <div className="absolute top-20 video left-1/2 -translate-x-1/2">
            <video ref={videoRef} autoPlay loop muted >
                <source src="videos/products.mp4" type="video/mp4" />
            </video>
        </div>
    )
}