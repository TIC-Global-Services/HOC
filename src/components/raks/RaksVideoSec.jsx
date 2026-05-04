import { motion } from "framer-motion";
import video from "../../assets/client/raks/vdo/Raks3.mp4";

const RaksVideoSec = () => {
  return (
    <section className="w-full relative md:h-screen overflow-hidden">

      <video
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
        h-[40vh]       
        md:h-full     
        object-contain md:scale-110
        "
      />

    </section>
  );
};

export default RaksVideoSec;