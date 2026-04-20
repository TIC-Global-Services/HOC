import { motion } from "framer-motion";
import video from "../../assets/client/padlr/vdo/Padlr_Animation1.mp4";
import video2 from "../../assets/client/padlr/vdo/Padlr_Animation 3.mp4"; 

const PadlrMotionVideoSec = () => {
  return (
    <>
    {/* First Video */}
    <section className="w-full min-h-screen relative overflow-hidden">

      <motion.video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-contain"
      />

    </section>

    {/* second Video */}
    <section className="w-full min-h-screen relative bg-[#0506C3] overflow-hidden">

      <motion.video
        src={video2}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cotain"
      />

    </section>


    </>
  );
};

export default PadlrMotionVideoSec;