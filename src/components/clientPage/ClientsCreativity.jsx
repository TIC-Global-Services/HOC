import { motion } from "framer-motion";
import creativityVideo from "../../assets/client/page/vinyl_final.mp4";

const ClientsCreativity = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-[-50%] md:-mt-[10%] gap-10 px-10">
      
      {/* Left Video */}
      <motion.video
        src={creativityVideo}
        autoPlay
        muted
        loop
        playsInline
        className="block w-1/2 rounded-[20px] object-cover"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      />

      {/* Right Text */}
      <motion.p
        className="jost font-[500] max-w-[550px] capitalize text-center md:text-center leading-none md:leading-[100%] md:tracking-tight text-[25px] md:text-[60px]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our Clients Are The Reason
        Our Creativity Keeps Evolving.
      </motion.p>
    </div>
  );
};

export default ClientsCreativity;