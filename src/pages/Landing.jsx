import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";
import Navbar from "../components/Navbar";


const arrow = "https://ik.imagekit.io/hoc01/assets/downwhite.png";
// import { useInView } from "react-intersection-observer";

const Landing = () => {
  const [isSection2, setIsSection2] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    <div
      dangerouslySetInnerHTML={{
        __html: "We Design tO  DisRupt",
      }}
    />,
    <div>
      We build narrative <br />
      environments for brands
    </div>,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsSection2(scrollPosition > windowHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <Navbar variant="landing" showCursorHover={true} />

      {/* Section 1 */}
      <div
        className={`${
          isSection2 ? "bg-white text-[#060ebb]" : "bg-[#060ebb] text-white"
        } relative cursor-pointer transition-all z-[600] duration-700`}
        style={{ minHeight: "100vh" }}
      >
        {/* Centered Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform lg:whitespace-nowrap -translate-x-1/2 -translate-y-1/2 px-4"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              className="text-[44px] px-20   alinsa uppercase lg:text-[80px] font-[1000] text-center leading-tight lg:leading-[1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {texts[currentText]}
            </motion.h1>
            {currentText === 0 && (
              <>
                {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="z-[-1] w-full right-[23.5rem] -top-[15.5rem] absolute"
                >
                <Three />
              </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="z-[-1] w-full left-[6.1rem] -top-[15rem] absolute"
                >
                <O />
                
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="z-[-1] w-full left-[20rem] -top-[13rem] absolute"
                >
                <R /> */}
                {/* </motion.div> */}
              </>
            )}
          </AnimatePresence>
        </motion.div>
        {/* Footer */}

        {/* <div className="absolute px-4 uppercase lg:px-20 jost text-[14px] flex w-full items-center justify-between bottom-4">
          <h1>@Madeintic</h1>
          <h1>SCROLL NOW</h1>
          <h1 className="text-right font-normal leading-[17px]">
            India <br />
            ch 10-01-2025
          </h1>
        </div> */}
        {/* <img className="absolute w-12 bottom-4 left-1/2 opacity-85 transform -translate-x-1/2" src={arrow}/> */}
      </div>

      {/* Section 2 */}
      <Home />
    </>
  );
};

export default Landing;
