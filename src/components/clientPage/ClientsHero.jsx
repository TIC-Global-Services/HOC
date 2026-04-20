import { motion } from "framer-motion";
import button from "../../assets/client/page/button.png";

const ClientsHero = () => {
  return (
    <div className="items-center flex-col relative justify-center h-[50vh] md:h-screen flex px-10 md:mt-[10%]">
      
      {/* button Animation */}
      <motion.img
        src={button}
        className="w-[70px] md:w-[200px] hidden md:block absolute z-[1] left-14 md:left-1/4 ml-15 top-4 md:top-27 [@media(min-width:1800px)]:top-[29%] [@media(max-width:800px)]:top-[28%]"
        alt="Hand"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      />

      {/* CLIENT Title */}
      <motion.h1
        className="font-[1000] px-10 mt-40 md:!mt-20 md:leading-[0px] md:tracking-tight text-7xl md:text-[clamp(2rem,18vw,260px)] alinsa text-[#0000FF] z-[10]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        CLIENTS
      </motion.h1>

      {/* Tagline Animation */}
      <motion.p
        className="jost font-[500] max-w-[600px] md:leading-[100%] md:tracking-tight text-[25px] md:!mt-24 lowercase md:text-[60px] z-[10]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Ready to Be Part of the Creative Process?
      </motion.p>

    </div>
  );
};

export default ClientsHero;