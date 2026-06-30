import React from "react";
import { motion, useInView } from "framer-motion";
// import tvpng from "../assets/tv.png";
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

// import logo1 from "../assets/logo.png";
// import befooter from "../assets/befooter.png";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import tvideo from "../assets/6.webm";
import safarivideo from "../assets/6.mp4";

import { useState, useEffect, useRef } from "react";

const Ethos = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      ua.includes("iphone") ||
      ua.includes("ipad");

    setIsSafari(isSafariBrowser);
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="bg-white isolate jost relative"
        style={{ minHeight: "100vh" }}
      >
        {/* Absolutely Centered Text */}
        <div className=" !z-[-200]  items-end   lg:flex-row flex-col  h-full lg:h-full mt-0 lg:mt-0  bottom-0 flex px-4 lg:px-10">
          <div className="  lg:mt-0 mt-80  w-[100%]">
            <h2 className="jost lg:text-[26px] text-2xl text-left lg:block hidden  mb-10  lg:-mb-20 lg:leading-[40px]">
              <span className=" lg:text-[45px]  text-3xl salo uppercase  text-[#060ebb]">
                {" "}
                Haus Of Chaos{" "}
              </span>{" "}
              <span className="   whitespace-nowrap">
                is a process-oriented design firm <br /> that prioritizes{" "}
                innovative forms of communication. <br /> Embracing the concept
                of{" "}
                <span className=" lg:text-[45px] text-3xl uppercase salo text-[#060ebb]">
                  {" "}
                  Organized Chaos, 
                </span>
                <br />
                <span className=" whitespace-nowrap">
                   akin to chaos theory, our philosophy centers on <br />
                   challenging conventional{" "}
                 </span>
              </span>
              <span className="  lg:text-[45px] text-3xl salo uppercase text-[#060ebb]">
                {" "}
                Design{" "}
              </span>{" "}
              paradigms <br className=" lg:block hidden" /> integrating the
              intangible aspects of interdisciplinary <br /> design,
              particularly
              <span className=" lg:text-[45px] text-3xl uppercase salo text-[#060ebb]">
                {" "}
                Transmedia Approaches.
              </span>
            </h2>
            <h2 className="jost text-2xl -mt-40 lg:mt-0  lg:hidden block text-left">
              <span className="salo uppercase  text-3xl text-[#060ebb]">
                {" "}
                Haus Of Chaos{" "}
              </span>{" "}
              is a process-oriented design firm that prioritizes innovative
              forms of communication. Embracing the concept of{" "}
              <span className="salo uppercase  text-3xl text-[#060ebb]">
                Organized Chaos{" "}
              </span>
               , akin to chaos theory, our philosophy centers on challenging
              conventional{" "}
              <span className="salo uppercase  text-3xl text-[#060ebb]">
                {" "}
                Design
              </span>{" "}
              paradigms integrating the intangible aspects of interdisciplinary
              design, particularly{" "}
              <span className="salo uppercase  text-3xl text-[#060ebb]">
                {" "}
                Transmedia Approaches.
              </span>
            </h2>
          </div>

          {/* Adding smooth infinite rotation */}
          <motion.div
            className="w-[80%] mt-4 lg:-mt-10 -top-4 !z-[-800] relative left-10 lg:left-16 lg:top-[19rem] overflow-hidden"
            animate={{ rotate: 360 }}
          >
            <video
              src={isSafari ? safarivideo : tvideo} // Corrected: Removed `{}` around variables
              autoPlay
              loop
              muted
              playsInline
              className="lg:w-[140%]  mb-[6px] h-[20rem] lg:h-[45rem] object-cover lg:rotate-[-10deg] -rotate-[10deg] lg:scale-x-[-1] scale-x-[-1]"
            />
          </motion.div>
        </div>
        <FounderSection />
        {/* <Play /> */}
        {/* <FAQ /> */}
        <Footer />
      </div>
    </>
  );
};

export default Ethos;

const founder = "https://ik.imagekit.io/hoc01/assets/RIA3.jpg";
const founder2 = "https://ik.imagekit.io/hoc01/assets/FounderBanner.jpg";

const FounderSection = () => {
  const handleEmailClick = () => {
    console.log("Email button clicked"); // Debugging
    window.open("mailto:explore@hausofchaos.co", "_self");
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  return (
    <div className="lg:mt-40  -mt-20 !z-[1000]  ">
      <div
        ref={ref}
        className=" bg-[#060ebb]  lg:pb-0 pb-20  lg:p-8 relative overflow-hidden flex items-center justify-between w-full"
      >
        <div className="lg:px-14   flex flex-col  lg:items-start justify-center mt-20 lg:mt-40 text-left">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className=" lg:w-1/2  !scale-75 w-full lg:w-1/2 block lg:hidden relative  h-full"
          >
            <div className="relative   -top-20 h-[800px] [perspective:1000px] cursor-pointer group">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front image */}
                <div className="absolute inset-0 h-[80%] w-full">
                  <img
                    src={founder}
                    alt="Founder Front"
                    className="w-full h-full object-cover border-[1rem] block rounded-lg"
                  />
                </div>
                {/* Back image */}
                <div className="absolute inset-0 h-[80%] w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={founder2}
                    alt="Founder Back"
                    className="w-full h-full object-cover object-top border-[1rem] block rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[#F4ECE0] lg:-ml-10 lg:mt-0 -mt-60 text-center uppercase alinsa text-7xl    lg:mb-10 lg:text-[110px] font-bold tracking-wide">
              FOUNDER
            </h1>
          </motion.div>

          <div className="flex lg:w-[88%] w-full lg:p-0 p-2  -mt-40 lg:-mt-6 flex-col  text-center   lg:flex-row justify-between lg:text-left  lg:items-start gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2 lg:-ml-10 lg:block flex flex-col items-center"
            >
              <p className="text-white   lg:-ml-5  lg:text-[26px] jost  text-lg lg:w-full lg:text-[28px]  px-4 lg:leading-[37px] mb-4 lg:mb-8">
                As experiential designers, we never remain neutral. The more
                compelling the story, the greater the influence we hold. Haus of
                Chaos is the intersection of a graphic design house and an
                experimental studio, enabling us to dive into new, experimental
                forms of communication, disrupting and redefining existing norms.
              </p>
              <div className="flex text-xs lg:text-base   gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium"
                  onClick={handleEmailClick}
                >
                  E-mail
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 bg-white text-blue-600 px-6 py-3 rounded-full font-medium"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/hausofchaos/",
                      "_blank"
                    )
                  }
                >
                  LinkedIn
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/hausofchaos.co/",
                      "_blank"
                    )
                  }
                >
                  Instagram
                </motion.button>
              </div>
            </motion.div>
            {/* image */}
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className=" lg:w-1/2 lg:block lg:w-1/2 hidden relative  h-full"
            >
              <div className="relative left-40 -top-40 h-[800px] [perspective:900px] cursor-pointer group">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front image */}
                  <div className="absolute inset-0 h-[90%] w-full">
                    <img
                      src={founder}
                      alt="Founder Front"
                      className="w-full h-full object-cover border-[1rem] block rounded-lg"
                    />
                  </div>
                  {/* Back image */}
                  <div className="absolute inset-0 h-[90%] w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <img
                      src={founder2}
                      alt="Founder Back"
                      className="w-full h-full object-cover object-top border-[1rem] block rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
