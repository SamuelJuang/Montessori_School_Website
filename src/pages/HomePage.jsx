import React from "react";
import VideoBackgroundHome from "../components/videobackgroundhome";
import AboutHome from "../components/aboutHome";
import PeekGalery from "../components/PeekGalery";
import Testimonials from "../components/Testimonials";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


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

      <div style={{ overflowY: "hidden" }}>
        <VideoBackgroundHome />
        <AboutHome />
        <PeekGalery />
        <Testimonials />
      </div>

    </ReactLenis>
  );
  //anjay lenis
}

export default HomePage;
