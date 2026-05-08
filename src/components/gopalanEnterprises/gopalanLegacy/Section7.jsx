import React from "react";

import visualVideo2 from "../../../assets/client/gopalan/GE_Visual Identity 2_Animaiton.mp4";

import GridOverlay from "../../GridOverlay";

const Section7 = () => {
  return (
    <section
      className="
        relative
        h-screen
        overflow-hidden
        flex-shrink-0
      "
      style={{
        width: "100vw",
      }}
    >
      {/* VIDEO */}
      <video
        src={visualVideo2}
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          object-cover
        "
      />
    </section>
  );
};

export default Section7;