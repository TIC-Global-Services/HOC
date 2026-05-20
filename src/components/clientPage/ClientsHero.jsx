import { motion } from "framer-motion";
import heroCallout from "../../assets/client/page/hoc-callout.png";
import starImg from "../../assets/client/page/endIcon.png";

const ClientsHero = () => {
  return (
    <div className="relative flex h-[50vh] flex-col justify-center px-10 pt-24 items-center md:min-h-screen md:pt-32">

      {/* CLIENT Title  */}
      <div className="relative inline-block">

        {/* Button image */}
        <motion.img
          src={heroCallout}
          className="absolute left-[2%] top-[-3rem] w-[50px] z-[1] md:top-[-14rem] md:w-[200px]"
          style={{
            rotate: "-15deg",
          }}
          alt="Button"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        />

        {/* CLIENTS text*/}
        <motion.h1
          className="relative mt-24 px-10 font-[1000] text-7xl alinsa text-[#060ebb] z-[10] md:mt-8 md:leading-[0px] md:tracking-tight md:text-[clamp(2rem,35vh,260px)]"
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
