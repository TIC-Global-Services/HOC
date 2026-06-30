import { useRef } from "react";
import { motion } from "framer-motion";
import useMobileVideoFix from "../../hooks/useMobileVideo";
import video from "../../assets/client/raks/vdo/Raks_animation1.mp4";

const RaksInstitutionVideo = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef); 

  return (
    <section className="w-full relative overflow-hidden">

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
        className="
          w-full 
          h-[30vh]        
          lg:absolute 
          lg:top-0 
          lg:left-0 
          lg:w-full 
          lg:h-full 
          lg:object-cover
          object-cover
        "
      />

      {/* Desktop height */}
      <div className="hidden lg:block h-screen" />

    </section>
  );
};

export default RaksInstitutionVideo;