import { useRef } from "react";
import video from "../../assets/client/padlr/vdo/padlr_animation_1_final.mp4";
import useMobileVideoFix from "../../hooks/useMobileVideo";

const PadlrMotionVideoSec = () => {
  const videoRef = useRef(null);
    
      useMobileVideoFix(videoRef);
  
  return (
    <section className="w-full lg:h-screen bg-white relative overflow-hidden">
      {/* VIDEO */}
      <video
       ref={videoRef}
        src={video}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        webkit-playsinline="true"
        preload="auto"
        className="
        w-full h-auto
        object-cover object-center
        lg:absolute lg:inset-0 lg:w-full lg:h-full lg:object-contain lg:object-center 
      "
      />

     
    </section>
  );
};

export default PadlrMotionVideoSec;
