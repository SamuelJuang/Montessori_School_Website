import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VideoBackgroundHome = () => {
    const textRef = useRef();
    const lineRef = useRef();
    const titleRef = useRef();
    
    const tl = gsap.timeline({
        defaults: {duration:2.5, ease: "ease-in-out"},
       
    });

    useEffect(() => {
        tl.
        from(textRef.current,1, {transformOrigin: "bottom", opacity:0, duration: 0.5, ease: "power4.out", delay:1, skewY: 5})
        .from(lineRef.current, {opacity: 0,transformOrigin:"left center", scaleX:0, duration: 1, ease: "ease-in-out"})
        .to(lineRef.current, {opacity: 1, scaleX:1, duration: 0.5, ease: "ease-in-out"})
        .to(textRef.current, {opacity: 1, y: 0, duration: 0.5,skewY:0, ease: "ease-in-out"})
        
    },[]);

    return (
        <div>
          <div>
                <video
                    src="src\assets\testVideo.MP4"
                    autoPlay
                    loop
                    muted 
                    className=" w-screen h-screen brightness-[.25] object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-balance">
                    <h1 ref={titleRef} className="text-5xl font-bold text-white pt-5  font-bold text-white pt-5 font-bold text-white pt-5">Montessori Community School </h1>
                    <hr className=' mt-5' ref={lineRef}/>
                    <p ref={textRef} className="lg:text-sm text-slate-400 pt-5 sm:text-lg text-slate-400 pt-5">Explore learning through play and discovery at our Montessori school! We nurture independence, curiosity, and a passion for lifelong learning in a supportive environment tailored to each child's needs</p>
                </div>
          </div>
        </div>
    );
};

export default VideoBackgroundHome;
