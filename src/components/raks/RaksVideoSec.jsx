import { motion } from "framer-motion";
import video from "../../assets/client/raks/vdo/Raks Animation 2.mp4";


const RaksVideoSec = () => {
  return (
    <>
    {/* Second Video */}
    <section className="w-full min-h-screen relative overflow-hidden">

      <motion.video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-full h-auto object-cover object-center"
      />

    </section>
    </>
  );
};

export default RaksVideoSec;