import { motion } from "framer-motion";
import video from "../../assets/client/raks/vdo/Raks Animation 2.mp4";


const RaksVideoSec = () => {
  return (
    <>
    {/* Second Video */}
    <section className="w-full min-h-screen relative overflow-hidden">

      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      />

    </section>
    </>
  );
};

export default RaksVideoSec;