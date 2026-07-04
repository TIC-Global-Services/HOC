import { useRef } from "react";
import useMobileVideoFix from "../../hooks/useMobileVideo";
import video from "../../assets/client/gopalan/GE_Logo_Animation.mp4";

const GopalanGroupVideo = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef); 

  return (
    <section className="w-full lg:min-h-screen relative overflow-hidden">

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
          sm:h-[50dvh]       
          lg:absolute 
          lg:top-0 
          lg:left-0 
          lg:w-full 
          lg:h-full 
          lg:object-cover bg-white
          object-cover
        "
      />

      {/* Desktop height */}
      <div className="hidden lg:block h-screen" />

    </section>
  );
};

export default GopalanGroupVideo;