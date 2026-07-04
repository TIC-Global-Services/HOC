import { motion } from "framer-motion";
const heroCallout ="https://ik.imagekit.io/hoc01/assets/client/clientPage/hoc-callout.png";
const starImg ="https://ik.imagekit.io/hoc01/assets/client/clientPage/endIcon.png";

const ClientsHero = () => {
  return (
    <div className="relative flex h-[50vh] flex-col justify-center px-10 pt-24 items-center lg:min-h-screen lg:pt-32">

      {/* CLIENT Title  */}
      <div className="relative">

        {/* Button image */}
        <motion.img
          src={heroCallout}
          className="absolute left-[0%] top-[-2rem] w-[50px] z-[1] lg:top-[-6rem] lg:w-[200px]"
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
          className="relative mt-24 px-10  text-7xl alinsa text-[#060ebb] z-[10] lg:mt-8  lg:tracking-tight lg:text-[clamp(2rem,35vw,260px)]"
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
          className="absolute w-[40px] lg:w-[130px] z-[20] right-0 top-40"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        />

      </div>

      {/* Tagline */}
      <motion.p
        className="jost font-[500]  leading-[1] lg:tracking-tight text-[clamp(25px,4.2vw,60px)] lg:mt-0 lowercase z-[10]"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Ready to Be Part of the <br className="hidden md:block"/> Creative Process?
      </motion.p>

    </div>
  );
};

export default ClientsHero;
