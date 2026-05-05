import { useRef } from "react";
import useMobileVideoFix from "../../hooks/useMobileVideo";
import video from "../../assets/client/raks/vdo/Raks3.mp4";

const RaksVideoSec = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef);

  return (
    <section className="w-full h-[30vh] md:h-screen relative overflow-hidden bg-white">

      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="
          absolute inset-0
          w-full h-full
          object-cover md:object-contain
          scale-[1.02] md:scale-[1.01]
          -translate-y-[1px]
          bg-white
        "
      />

    </section>
  );
};

export default RaksVideoSec;