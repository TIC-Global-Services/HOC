import { useRef } from "react";
import video from "../../assets/client/padlr/vdo/Padlr_Animation1.mov";
import useMobileVideoFix from "../../hooks/useMobileVideo";

const PadlrMotionVideoSec = () => {
  const videoRef = useRef(null);
    
      useMobileVideoFix(videoRef);
  
  return (
    <section className="w-full h-screen md:h-screen bg-white relative overflow-hidden">
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
        absolute inset-0
        w-full h-full
        object-contain
      "
      />

     
    </section>
  );
};

export default PadlrMotionVideoSec;
