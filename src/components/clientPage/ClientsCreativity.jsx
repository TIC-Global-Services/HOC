import { motion } from "framer-motion";
import creativity from "../../assets/client/page/creativity.png";

const ClientsCreativity = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-[-50%] md:-mt-[8%] gap-10 px-10">
      {/* Left Image */}
      <motion.img
        src={creativity}
        alt="Creativity"
        className="w-[400px] md:w-[500px] lg:w-[600px]"
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
