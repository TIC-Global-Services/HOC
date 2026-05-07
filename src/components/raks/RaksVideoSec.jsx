import { useRef } from "react";
import useMobileVideoFix from "../../hooks/useMobileVideo";
import video from "../../assets/client/raks/vdo/Raks Animation V3.mp4";

const RaksVideoSec = () => {
  const videoRef = useRef(null);

  useMobileVideoFix(videoRef);

  return (
    <section
      className="w-full md:hidden relative bg-white -mb-[2px]"
      style={{ fontSize: 0, lineHeight: 0 }}
    >
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
        className="w-full h-[40vh]"
        style={{
          transform: "translateZ(0)",
          display: "block",
          verticalAlign: "bottom",
        }}
      />
    </section>
  );
};

export default RaksVideoSec;
