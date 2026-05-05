import React, { useRef } from "react";
import showReel from "../assets/showReel.mp4";
import useMobileVideoFix from "../hooks/useMobileVideo";

const ShowReel = () => {
  const videoRef = useRef(null);
        
      useMobileVideoFix(videoRef);
  return (
    <section className="w-full h-auto md:h-screen overflow-hidden relative">

      <video
      ref={videoRef}
        src={showReel}
        autoPlay
        muted
        loop
        controls={false}
        playsInline
        className="w-full h-full object-contain md:object-cover"
      />

    </section>
  );
};

export default ShowReel;