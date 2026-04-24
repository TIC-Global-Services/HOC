import { motion } from "framer-motion";
import button from "../../assets/client/page/button.png";
import starImg from "../../assets/client/page/endIcon.png";

const ClientsHero = () => {
  return (
    <div className="items-center flex-col relative justify-center h-[50vh] md:h-screen flex px-10 md:-mt-[10%]">

      {/* CLIENT Title — relative wrapper anchors both decorative images */}
      <div className="relative inline-block">

        {/* Button image */}
        <motion.img
          src={button}
          className="absolute w-[50px] md:w-[160px] z-[1]"
          style={{
            left: "20%",     
            bottom: "-10px", 
          }}
          alt="Button"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        />

        {/* CLIENTS text*/}
        <motion.h1
          className="relative font-[1000] px-10 mt-40 md:!mt-20 md:leading-[0px] md:tracking-tight text-7xl md:text-[clamp(2rem,18vw,260px)] alinsa text-[#0000FF] z-[10]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          CLIENTS
        </motion.h1>

        {/* Image  */}
        <motion.img
          src={starImg}
          alt="star_image"
          className="absolute w-[40px] md:w-[100px] z-[20]"
          style={{
            right: "0px",
            top: "70px",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        />

      </div>

      {/* Tagline */}
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