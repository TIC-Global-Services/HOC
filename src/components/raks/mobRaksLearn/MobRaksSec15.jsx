import React, { useRef } from "react";

import raksVideo from "../../../assets/client/raks/vdo/raks.mp4"; 
import useMobileVideoFix from "../../../hooks/useMobileVideo";

const MobRaksSec15 = () => {
  const videoRef = useRef(null);
  
    useMobileVideoFix(videoRef);
  return (
    <section className="w-full">

      <video
      ref={videoRef}
        className="w-full h-auto object-cover"
        src={raksVideo}
        autoPlay
        muted
        loop
        playsInline
      />

    </section>
  );
};

export default MobRaksSec15;