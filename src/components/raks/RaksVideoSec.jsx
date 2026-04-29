import { motion } from "framer-motion";
import video from "../../assets/client/raks/vdo/Raks Animation 2.mp4";

const RaksVideoSec = () => {
  return (
    <section className="w-full relative overflow-hidden">

      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="
          w-full 
          h-[40vh]       
          md:min-h-screen     
          object-cover
        "
      />

    </section>
  );
};

export default RaksVideoSec;