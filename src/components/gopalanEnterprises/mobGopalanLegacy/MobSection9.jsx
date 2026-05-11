import React, { useRef } from "react";

import useMobileVideoFix from "../../../hooks/useMobileVideo";

import mobileVideo from "../../../assets/client/gopalan/patternGif.mp4";

const MobSection9 = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef);

  return (
    <section
      className="
        relative
        w-full
        h-[60vh]
        overflow-hidden
        leading-none
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
        inset-0
        w-full
        h-full
        object-cover
        scale-[1.01]
      "
      />
    </section>
  );
};

export default MobSection9;
