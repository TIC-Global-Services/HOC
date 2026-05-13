import { motion } from "framer-motion";
import video from "../../assets/client/syedBawkher/vdo/SB_Animation_1.mp4";
import useMobileVideoFix from "../../hooks/useMobileVideo";
import { useRef } from "react";

const SyedDesignVideo = () => {
  const videoRef = useRef(null);
  
    useMobileVideoFix(videoRef); 
  return (
    <>
      {/* First Video */}
      <section className="w-full h-auto md:min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef} 
          src={video}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          controls={false}
          preload="auto"
          className="w-full h-full object-cover"
        />
      </section>
    </>
  );
};

export default SyedDesignVideo;
