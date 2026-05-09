import React, { useRef } from 'react'
import video2 from "../../assets/client/padlr/vdo/Padlr_Animation_3.mp4";
import useMobileVideoFix from "../../hooks/useMobileVideo";

const PadlrVideoSec2 = () => {
  const videoRef = useRef(null);
    
      useMobileVideoFix(videoRef);

  return (
    <section className="w-full min-h-screen md:hidden relative bg-[#0506C3] overflow-hidden">

      <video
        ref={videoRef}
        src={video2}
        autoPlay
        loop
        muted
        controls={false}
        webkit-playsinline="true"
        preload="auto"
        playsInline
        className="absolute inset-0 w-full h-full object-contain"
      />

    </section>
  )
}

export default PadlrVideoSec2
