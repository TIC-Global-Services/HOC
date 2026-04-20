import { motion } from "framer-motion";
import video from "../../assets/client/syedBawkher/vdo/Brochure_animation.mp4";


const SyedCraftmanShip = () => {
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
        className="absolute top-0 left-0 w-full h-full object-contain"
      />

    </section>
    </>
  );
};

export default SyedCraftmanShip;