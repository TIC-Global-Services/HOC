import React from "react";
import showReel from "../assets/showReel.mp4";

const ShowReel = () => {
  return (
    <section className="w-full h-auto md:h-screen overflow-hidden relative">

      <video
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