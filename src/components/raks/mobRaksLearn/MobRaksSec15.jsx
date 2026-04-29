import React from "react";

import raksVideo from "../../../assets/client/raks/vdo/raks.mp4"; 

const MobRaksSec15 = () => {
  return (
    <section className="w-full">

      <video
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