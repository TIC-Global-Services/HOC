import React from "react";
import video2 from "../../../../assets/client/padlr/vdo/Padlr_Animation_3.mp4";

const Section8 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0506C3]">
      <video
        src={video2}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
          absolute
          top-1/2
          left-1/2
          w-full
          h-full
          -translate-x-1/2
          -translate-y-1/2
          object-contain bg-[#0506C3]
          will-change-transform
        "
      />
    </section>
  );
};

export default Section8;