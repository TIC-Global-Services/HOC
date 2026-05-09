import React, { useRef } from "react";
import useMobileVideo from "../hooks/useMobileVideo";

const ShowReel = () => {
  const videoRef = useRef(null);

  useMobileVideo(videoRef);

  return (
    <section className="w-full h-screen overflow-hidden relative bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/video/showReel2.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default ShowReel;