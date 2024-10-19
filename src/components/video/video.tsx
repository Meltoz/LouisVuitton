"use client";

import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const Video = () =>{
    const videoRef = useRef<HTMLVideoElement>();

    useEffect(() =>{
        if(typeof window !=='undefined') {

            gsap.fromTo(videoRef.current,{
                x: 0
            }, {
                x: '66vw',
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: 'top top',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            })
        }

    }, []);

    return (
        <div className="absolute top-0 video z-10">
            <video ref={videoRef} autoPlay loop muted className="-z-10">
                <source src="videos/placeholder.mp4" type="video/mp4" />
            </video>
        </div>
    )
}