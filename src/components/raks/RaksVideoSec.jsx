import { useRef } from "react";
import useMobileVideoFix from "../../hooks/useMobileVideo";
import video from "../../assets/client/raks/vdo/Raks Animation V3.mp4";

const RaksVideoSec = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef);

  return (
    <section className="w-full h-[40vh] md:h-auto relative overflow-hidden bg-white">
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
        w-full
        h-[40vh] md:h-auto
        object-cover md:object-fill
        block
      "
        style={{ transform: "translateZ(0)" }}
      />
    </section>
  );
};

export default RaksVideoSec;
