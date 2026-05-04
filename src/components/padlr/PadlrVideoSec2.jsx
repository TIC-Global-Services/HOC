import React from 'react'
import video2 from "../../assets/client/padlr/vdo/Padlr_Animation 3.mp4";

const PadlrVideoSec2 = () => {
  return (
    <section className="w-full min-h-screen relative bg-[#0506C3] overflow-hidden">

      <video
        src={video2}
        autoPlay
        loop
        muted
        controls={false}
        playsInline
        className="absolute inset-0 w-full h-full object-contain"
      />

    </section>
  )
}

export default PadlrVideoSec2
