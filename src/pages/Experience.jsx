import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import tvpng from "../assets/tv.png";
// import logo2 from "../assets/logo2.png";
// import befooter from "../assets/befooter.png";
// import hand from "../assets/hand.png";
// import ufo from "../assets/ufo.png";


import { motion } from "framer-motion";
// import { div } from "framer-motion/client";

import Navbar from "../components/Navbar";
import Footer from "./Footer.jsx";


const grid = "https://ik.imagekit.io/hoc01/assets/lines.png";
const two = "https://ik.imagekit.io/hoc01/assets/two.png";
const three = "https://ik.imagekit.io/hoc01/assets/three.png";
const linelab = "https://ik.imagekit.io/hoc01/assets/linelab.png";
const noswitch = "https://ik.imagekit.io/hoc01/assets/noswitch.svg";

const Experience = () => {

  return (
    <>
      <Navbar variant="dark" />
      <div className="bg-black jost relative" style={{ minHeight: "100vh" }}>
        {/* Absolutely Centered Text */}
        <div className="items-center flex-col  bg-black mt-20 lg:mt-14 relative justify-center min-h-screen  flex ">
          <SecondSection />
        </div>
        {/* <div className="items-center flex-col   -mt-20 relative justify-center !h-screen  flex "> */}
        <Play />
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Experience;

// import { useInView } from "framer-motion";
import { useRef } from "react";

const SecondSection = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionBounds, setSectionBounds] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update section bounds on resize or initial load
  useEffect(() => {
    const updateBounds = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY;
        setSectionBounds({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
        });
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  // Limit movement based on scroll position
  const moveImageOne = (scrollY) => {
    if (scrollY < sectionBounds.top) return 0; // Before section starts
    if (scrollY > sectionBounds.bottom)
      return (sectionBounds.bottom - sectionBounds.top) * 0.07; // After section ends
    return (scrollY - sectionBounds.top) * 0.14; // Inside section
  };

  const moveImageTwo = (scrollY) => {
    if (scrollY < sectionBounds.top) return 0; // Before section starts
    if (scrollY > sectionBounds.bottom)
      return (sectionBounds.bottom - sectionBounds.top) * -0.07; // After section ends
    return (scrollY - sectionBounds.top) * -0.14; // Inside section
  };

  return (
    <div ref={sectionRef} className="overflow-hidden z-[300] ">
      <div className="bg-black mt-6 lg:mt-0 py-[60px] lg:py-[120px] flex flex-col   items-center gap-10">
        <div>
          <h1 className="text-[#F4ECE0] text-[clamp(36px,7.6vw,110px)] lg:leading-[97px] text-center uppercase alinsa">
            Experience Lab
          </h1>
          <h2 className="text-white text-[clamp(20px,2.1vw,30px)] text-center jost">
            Spaces speak and spaces narrate
          </h2>
        </div>
        <div className="relative hidden lg:flex justify-center items-center gap-10 h-[300px] w-full">
          {/* LineLab Image */}
          {/* <img
            src={linelab}
            className="w-[65%] z-[5] left-[-20rem] top-1/2 -mt-[1.6px] absolute"
            alt="Lab"
          /> */}

          {/* Three Image */}
          <motion.img
            src={three}
            className="w-[50%] z-[10] min-[1470] absolute left-[15%]"
            alt="Lab"
            style={{
              transform: `translateX(${moveImageOne(scrollY)}px)`,
            }}
            transition={{ duration: 0.4 }}
          />

          <div className="w-full absolute h-[2px] bg-[#F4ECE0]"></div>
          <div className="absolute left-1/2 top-1/2 z-[0]
            h-[20px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            bg-black"
          />

          {/* Two Image */}
          <motion.img
            src={two}
            className="w-[50%] z-[5] min-[1470] -mt-2 absolute right-[18%] !-mr-10"
            alt="Lab"
            style={{
              transform: `translateX(${moveImageTwo(scrollY)}px)`,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* <img
            src={linelab}
            className="w-full z-[1] right-[-45rem] top-1/2 -mt-[5.5px] absolute"
            alt="Lab"
          /> */}
        </div>

        <div className="relative lg:hidden -mt-20 flex justify-center items-center gap-10 h-[300px] w-full">
          {/* LineLab Image */}
          {/* <img
            src={linelab}
            className="w-full left-[-16rem] top-1/2 -mt-[0.5px] absolute"
            alt="Lab"
          /> */}

          {/* Three Image */}
          <motion.img
            src={three}
            className="w-[95%] z-[10] absolute left-[-10%]"
            alt="Lab"
            style={{
              transform: `translateX(${moveImageOne(scrollY)}px)`,
            }}
            transition={{ duration: 0.4 }}
          />

          <div className="w-full absolute h-[2px] bg-[#F4ECE0]"></div>
          <div className="absolute left-1/2 top-1/2 z-[0]
            h-[20px]
            w-[100px]
            -translate-x-1/2
            -translate-y-1/2
            bg-black"
          />


          {/* Two Image */}
          <motion.img
            src={two}
            className="w-[100%] z-[2] absolute -mt-0  right-[-6%] !-mr-10"
            alt="Lab"
            style={{
              transform: `translateX(${moveImageTwo(scrollY)}px)`,
            }}
            transition={{ duration: 0.4 }}
          />

            {/* <img
            src={linelab}
            className="w-full right-[-16rem] top-1/2 -mt-[2.5px] absolute"
            alt="Lab"
          /> */}
        </div>
        <h1 className="lg:px-20 lg:mt-0 -mt-28 lg:-pt-40 px-4 text-[clamp(20px,1.7vw,24px)] pb-[80px] text-white xl:w-[70%] lg:w-[77%] text-center jost">
          Born from our ethos, the Chaos Lab serves as a testing ground for the
          diverse narrative environments we experiment with and explore. Based
          in India, with plans for growth, we embrace a 'test-and-learn'
          mindset. Our aim is to decode + disrupt conventional norms and beliefs
          in experimental communication + experience design.
        </h1>
      </div>
    </div>
  );
};
// import gridethos from "../assets/gridethos.png";
// import playground from "../assets/playground.png";
const tictacX = "https://ik.imagekit.io/hoc01/assets/tictacX.png";
const tictacO = "https://ik.imagekit.io/hoc01/assets/tictacO.png";

const Play = () => {
  const [clicks, setClicks] = useState([]);
  const [isXTurn, setIsXTurn] = useState(true); // Explicitly track turns
  const isClicking = useRef(false); // Prevents fast consecutive clicks

  const handleClick = (e) => {
    if (isClicking.current) return; // Prevent rapid clicks
    isClicking.current = true;

    setTimeout(() => {
      isClicking.current = false; // Re-enable clicks after a short delay
    }, 300);

    // Get container position relative to viewport
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now();
    const newClick = {
      id,
      x,
      y,
      type: isXTurn ? "X" : "O", // Strict alternation
    };

    setClicks((prev) => [...prev, newClick]);
    setIsXTurn((prev) => !prev); // Toggle turn

    setTimeout(() => {
      setClicks((prev) => prev.filter((click) => click.id !== id));
    }, 2000);
  };

  return (
    <div
      className="lg:min-h-screen -mt-[35px] bg-black text-white relative overflow-hidden"
      onClick={handleClick}
    >
      {/* Grid Overlay */}
      <div
        className="absolute inset-0   -ml-2.5 opacity-50"
      />

      {/* Grid */}
      <GridOverlay color="255,255,255" opacity={0.90}/>

      {/* Main Content */}
      <div className="relative flex flex-col justify-between">
        <div className="flex justify-between items-center px-20 py-10">
          <div className="max-w-xl"></div>

          <div className="max-w-xl relative hidden lg:flex flex-col  justify-start items-end">
            <h1 className="font-[1000] alinsa -ml-40 text-[100px] whitespace-nowrap">
              PLAY GROUND
            </h1>
            <p className="text-3xl -mt-10 mb-10  -left-40 top-[155px] absolute !text-left  whitespace-nowrap font-bold text-white/60">
              Click on the boxes to explore X's and O's
            </p>
            <div className="relative w-[130%] mt-10 h-[700px] [perspective:1000px]">
              <AutoFlipImages />
            </div>
          </div>

          <div className="w-full  py-10 relative lg:hidden flex flex-col  text-center   items-center justify-center">
            <h1 className="  alinsa   text-center text-5xl !font-medium whitespace-nowrap">
              PLAY GROUND
            </h1>
            <p className="text-sm   mb-10      text-center whitespace-nowrap font-bold text-white/60">
              Click on the boxes to explore X's and O's
            </p>
            <div className="relative w-[90vw] mt-60 h-[600px] [perspective:1000px]">
              <AutoFlipImages />
            </div>
          </div>
        </div>
      </div>

      {/* Clicked Symbols */}
      {clicks.map(({ id, x, y, type }) => (
        <motion.img
          key={id}
          src={type === "X" ? tictacX : tictacO}
          alt={type}
          className="absolute w-20 h-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          style={{ top: y - 40, left: x - 40 }} // Centered positioning
        />
      ))}
    </div>
  );
};
// import playground1 from "../assets/hocpo/05080625-c986-468e-b4c1-1376ff24c56f-min.jpg";
// import playground2 from "../assets/hocpo/54f31009-987f-4ed5-be3c-1500148ef995-min.jpg";
// import playground3 from "../assets/hocpo/831bc518-1ffb-4c9c-a99d-356d62ccb9eb-min.jpg";
import GridOverlay from "../components/GridOverlay.jsx";


const playground5 = "https://ik.imagekit.io/hoc01/assets/hocpo/TID05724-min.jpg";
const playground6 = "https://ik.imagekit.io/hoc01/assets/hocpo/TID05738-min.jpg";
const playground7 = "https://ik.imagekit.io/hoc01/assets/hocpo/TID05735-min.jpg";
const playground8 = "https://ik.imagekit.io/hoc01/assets/hocpo/TID05757-min.jpg";
const playgorund4 = "https://ik.imagekit.io/hoc01/assets/hocpo/TID05717-min.jpg";

const AutoFlipImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    playground8,
    playgorund4,
    playground5,
    playground6,
    playground7,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full [transform-style:preserve-3d]"
          initial={{ rotateY: index === currentIndex ? 0 : -180 }}
          animate={{ rotateY: index === currentIndex ? 0 : 180 }}
          transition={{ duration: 0.8 }}
          style={{
            zIndex: index === currentIndex ? 1 : 0,
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={image}
            alt={`Playground ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      ))}
    </div>
  );
};
