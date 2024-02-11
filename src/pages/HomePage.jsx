import React from "react";
import VideoBackgroundHome from "../components/videobackgroundhome";
import AboutHome from "../components/aboutHome";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "../components/testimonials";
import peekGalery from "../components/peekGalery";
import PeekGalery from "../components/peekGalery";

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
  const lenisRef = useRef();
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  })

  return (
    <ReactLenis root>
    
     <div style={{overflowY: "hidden"}}>
        <VideoBackgroundHome/>
        <AboutHome/>
        <PeekGalery/>
        <Testimonials/>
      </div>

    </ReactLenis>
  );
  //anjay lenis
}

export default HomePage;
