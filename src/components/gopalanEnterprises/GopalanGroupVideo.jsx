import { useRef } from "react";
import useMobileVideoFix from "../../hooks/useMobileVideo";
import video from "../../assets/client/gopalan/GE_Logo_Animation.mp4";

const GopalanGroupVideo = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef); 

  return (
    <section className="w-full md:min-h-screen relative overflow-hidden">

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
          md:absolute 
          md:top-0 
          md:left-0 
          md:w-full 
          md:h-full 
          md:object-cover bg-white
          object-cover
        "
      />

      {/* Desktop height */}
      <div className="hidden md:block h-screen" />

    </section>
  );
};

export default GopalanGroupVideo;