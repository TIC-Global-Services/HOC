import { useRef } from "react";
import video from "../../../../assets/client/raks/vdo/Raks Animation V3.mp4";

const Section13 = () => {

  return (
    <section
      className="w-full h-screen relative overflow-hidden bg-white"
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="w-full h-full object-contain"
      />
    </section>
  );
};

export default Section13;
