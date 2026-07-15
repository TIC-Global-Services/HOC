import { motion } from "framer-motion";
import creativityVideo from "../../assets/client/page/vinyl_new_2.mp4";

const ClientsCreativity = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center -mt-32 lg:mt-12 lg:mb-6 gap-10 px-4">

      {/* Left Video */}
      <div className="w-1/2 max-w-[600px] rounded-[4px] overflow-hidden">
        <motion.video
          src={creativityVideo}
          autoPlay
          muted
          loop
          playsInline
          className="block w-full h-full object-cover scale[1.005]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        />
      </div>

      {/* Right Text */}
      <motion.p
        className="jost font-[500] max-w-[550px] text-center lg:text-center leading-none lg:leading-[100%] lg:tracking-tight text-[clamp(25px,4.2vw,60px)] "
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our clients are the reason
        our creativity keeps evolving.
      </motion.p>
    </div>
  );
};

export default ClientsCreativity;