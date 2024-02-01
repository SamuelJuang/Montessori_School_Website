import React from "react";
import VideoBackgroundHome from "../components/videobackgroundhome";
import AboutHome from "../components/aboutHome";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function HomePage() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <div style={{overflowY: "hidden"}}>
        <VideoBackgroundHome/>
        <AboutHome/>
      </div>
    </ReactLenis>
  );
  //anjay lenis
}

export default HomePage;
