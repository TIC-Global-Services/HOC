import React, { useRef } from "react";
import useMobileVideo from "../hooks/useMobileVideo";

const ShowReel = () => {
  const videoRef = useRef(null);

  useMobileVideo(videoRef);

  return (
    <section className="w-full md:h-screen overflow-hidden relative bg-white">
      <video
        ref={videoRef}
        src="/video/showReel-HP.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-contain md:object-cover"
      />
    </section>
  );
};

export default ShowReel;