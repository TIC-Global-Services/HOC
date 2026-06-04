import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import tvpng from "../assets/tv.png";
// import logo from "../assets/logo.png";
// import befooter from "../assets/befooter.png";
import hand from "../assets/hand.png";
import ufo from "../assets/ufo.png";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

import { motion } from "framer-motion";
// import { div } from "framer-motion/client";
const Careers = () => {

  return (
    <>
      <Navbar />
      <div className="bg-white jost relative" style={{ minHeight: "100vh" }}>
        {/* Absolutely Centered Text */}
        <div className="items-center flex-col md:-space-y-24 relative justify-center h-[50vh] md:h-screen mt-20 flex px-10">
          {/* Hand Image Animation */}
          <motion.img
            src={hand}
            className="w-[70px] md:w-[150px] hidden md:block absolute z-[1] left-10 md:left-1/4 ml-20 top-4 md:top-28 [@media(min-width:1800px)]:top-[29%] [@media(max-width:800px)]:top-[28%]  "
            alt="Hand"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          />
          {/* <motion.img
            src={hand}
            className="w-[30px]   md:hidden block absolute z-[1] left-10 ml-5 top-14  "
            alt="Hand"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          /> */}
          {/* UFO Image Animation */}
          <motion.img
            src={ufo}
            className="w-[100px] md:w-[150px] md:block hidden absolute z-[20] !-mt-[7.5rem] top-1/2"
            alt="UFO"
            initial={{ x: 0, opacity: 0 }} // Start slightly off-screen right
            animate={{ x: 300, opacity: 1 }} // Spring animation into position
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            onAnimationComplete={() => {
              // After initial animation, start continuous movement
              document
                .getElementById("ufo")
                .animate(
                  [
                    { transform: "translateX(300px)" },
                    { transform: "translateX(500px)" },
                    { transform: "translateX(400px)" },
                    { transform: "translateX(300px)" },
                  ],
                  {
                    duration: 6000, // Total loop duration
                    iterations: Infinity, // Loop forever
                    easing: "linear",
                  },
                );
            }}
            id="ufo"
          />
          {/* <motion.img
            src={ufo}
            className="w-[40px] mt-20  md:hidden block absolute z-[20]   top-0"
            alt="UFO"
           
            id="ufo"
          /> */}
          {/* <motion.img
  src={ufo}
  className="w-[100px] md:w-[150px] absolute z-[20] top-1/2"
  alt="UFO"
  initial={{ x: -200, opacity: 0 }} // Start from the left
  animate={{ x: [0, 300, -300, 0] }} // Moves right, then left, then back
  transition={{ 
    duration: 6, // Adjust speed as needed
    repeat: Infinity, // Infinite loop
    ease: "linear"
  }}
/> */}

          {/* CAREERS Title Animation */}
          <motion.h1
            className="font-[1000] px-10 -mt-40 md:!mt-20 md:leading-[0px] text-7xl md:text-[clamp(2rem,18vw,260px)] alinsa text-[#060ebb] z-[10]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            CAREERS
          </motion.h1>

          {/* Tagline Animation */}
          <motion.p
            className="jost font-[500]  text-xl md:!mt-24 lowercase md:text-[60px] z-[10]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            WANT TO JOIN THE CHAOS ?
          </motion.p>
        </div>
        <JobListings />
        <Footer />
      </div>
    </>
  );
};

export default Careers;

import { useInView } from "framer-motion";
import { useRef } from "react";

const JobListings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  const positions = [
    "Sales Executive",
    "Motion Designer",
    "Illustrator/Multimedia Designer",
    "Experimental Graphic Designer",
  ];

  return (
    <div className="md:px-10 px-2  md:mt-0 -mt-60 py-10">
      <div
        ref={ref}
        className="min-h-[70vh] rounded-[20px] bg-black text-white p-4 md:p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex  md:flex-row flex-col mx-auto md:px-10 py-10 md:py-20 gap-10"
        >
          <div className="mb-12 md:w-[55%] text-left">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="xl:text-[50px] lg:text-[42px] text-4xl md:leading-[50px] font-bold jost mb-6"
            >
              <span className="text-[#060ebb] hover:text-white ">E-mail us</span> if you are a
              creator, open to learning, nurturing, growing, and fostering the
              ethos of the company, "order in chaos".
            </motion.h1>

            <div className="flex gap-4">
              <div className="flex justify-center items-center">
                <button
                  className="bg-white jost text-[#060ebb] px-6 py-3 rounded-full font-medium transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents unwanted navigation issues
                    window.open(
                      "mailto:explore@hausofchaos.co?subject=Contact%20from%20Website",
                      "_self",
                    );
                  }}
                >
                  E-MAIL NOW
                </button>
              </div>

              <a
                href="https://www.linkedin.com/company/hausofchaos/"
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border jost border-white px-6 py-3 rounded-full font-medium transition-colors duration-300 hover:bg-white hover:text-black"
                >
                  VIEW LINKEDIN
                </motion.button>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="space-y-4  md:mt-20 text-center md:text-right md:w-[45%]"
          >
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index }}
                whileHover={{ x: 10 }}
                className="border-b border-gray-800 py-4  transition-colors duration-300 hover:text-[#060ebb]"
              >
                <h2 className="text-xl jost font-medium">{position}</h2>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
