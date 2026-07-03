import { motion } from "framer-motion";

const heroCallout ="https://ik.imagekit.io/hoc01/assets/client/clientPage/hoc-callout.png";
const starImg ="https://ik.imagekit.io/hoc01/assets/client/clientPage/endIcon.png";

const ClientHero = () => {
  return (
    <div className="flex flex-col items-center justify-center relative min-h-[70dvh] text-center">

      {/* TITLE BLOCK */}
      <div className="relative flex items-center justify-center">

        {/* Button image */}
        <motion.img
          src={heroCallout}
          className="absolute w-[60px] sm:w-[80px] z-[1] -left-10 sm:bottom-20 bottom-10"
          alt="Button"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
        />

        {/* CLIENTS TEXT */}
        <motion.h1
          className="alinsa text-[#060ebb] text-[50px] sm:text-8xl leading-none z-[10]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          CLIENTS
        </motion.h1>

        {/* STAR ICON */}
        <motion.img
          src={starImg}
          alt="star"
          className="absolute w-[35px] sm:w-[45px] right-[-6%] top-10 sm:bottom-12 z-[20]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
        />

      </div>

      {/* TAGLINE */}
      <motion.p
        className="jost mt-6 max-w-[350px] text-[25px] leading-[30px] font-[500]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        ready to be part of the creative process?
      </motion.p>

    </div>
  );
};

export default ClientHero;