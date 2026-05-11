import React, { useRef } from "react";

import useMobileVideoFix from "../../../hooks/useMobileVideo";

import mobileVideo from "../../../assets/client/gopalan/GE_Pattern_Animation.mp4";


const MobSection9 = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef);

  return (
    <section
      className="
        relative
        w-full
        h-[50vh]
        overflow-hidden
        bg-[#f0ebd4]
      "
    >

      {/* VIDEO */}
      <video
        ref={videoRef}
        src={mobileVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        webkit-playsinline="true"
        className="
          absolute
          w-full
          h-full
          object-cover
        "
      />
    </section>
  );
};

export default MobSection9;