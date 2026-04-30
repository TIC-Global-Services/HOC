import { motion } from "framer-motion";
import button from "../../../assets/client/page/button.png";
import starImg from "../../../assets/client/page/endIcon.png";

const ClientHero = () => {
  return (
    <div className="flex flex-col items-center justify-center relative h-[60vh]  text-center">

      {/* TITLE BLOCK */}
      <div className="relative flex items-center justify-center">

        {/* BUTTON ICON */}
        <motion.img
          src={button}
          alt="button"
          className="absolute w-[50px] left-[0%] bottom-[25px] z-[1]"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* CLIENTS TEXT */}
        <motion.h1
          className="alinsa text-[#0000FF] text-[50px] leading-none z-[10]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          CLIENTS
        </motion.h1>

        {/* STAR ICON */}
        <motion.img
          src={starImg}
          alt="star"
          className="absolute w-[35px] right-[-6%] top-[25px] z-[20]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

      </div>

      {/* TAGLINE */}
      <motion.p
        className="jost mt-6 max-w-[350px] text-[25px] leading-[30px] font-[500]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        ready to be part of the creative process?
      </motion.p>

    </div>
  );
};

export default ClientHero;