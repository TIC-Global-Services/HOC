import { useRef } from "react";
import video from "../../assets/client/padlr/vdo/Padlr_Animation1.mp4";
import useMobileVideoFix from "../../hooks/useMobileVideo";

const PadlrMotionVideoSec = () => {
  const videoRef = useRef(null);
    
      useMobileVideoFix(videoRef);
  
  return (
    <section className="w-full h-screen md:h-screen bg-white relative overflow-hidden">
      {/* VIDEO */}
      <video
       ref={videoRef}
        style={{
          transform: "scale(1.01)",
          backfaceVisibility: "hidden",
        }}
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
        scale-[1.01]
        bg-white
      "
      />
    </section>
  );
};

export default PadlrMotionVideoSec;
