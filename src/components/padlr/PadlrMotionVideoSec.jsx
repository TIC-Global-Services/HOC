import { useRef } from "react";
import video from "../../assets/client/padlr/vdo/padlr_animation_1_final.mp4";
import useMobileVideoFix from "../../hooks/useMobileVideo";

const PadlrMotionVideoSec = () => {
  const videoRef = useRef(null);
    
      useMobileVideoFix(videoRef);
  
  return (
    <section className="w-full md:h-screen bg-white relative overflow-hidden">
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
        md:absolute md:inset-0 md:w-full md:h-full md:object-contain md:object-center 
      "
      />

     
    </section>
  );
};

export default PadlrMotionVideoSec;
