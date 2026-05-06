import React, { useRef } from "react";
import useMobileVideoFix from "../hooks/useMobileVideo";

const ShowReel = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef);

  return (
    <section className="w-full h-auto md:h-screen overflow-hidden relative">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        controls={false}
        className="w-full h-full object-contain md:object-cover"
      >
        <source src="/video/showReel.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default ShowReel;