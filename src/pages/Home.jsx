import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
// import logo from "../assets/logo2.png";
// import logo1 from "../assets/logo.png";
// import swrillpng from "../assets/swrill2.png";
// import worldsmall from "../assets/worldsmall.png";
// import labsvg from "../assets/labsvg.svg";
import { useScroll } from "framer-motion";
import FAQ from "./FAQ";
import Footer from "./Footer";

import { useEffect } from "react";
import Swrillmaker from "./Swrilltrans";

const noswitch = "https://ik.imagekit.io/hoc01/assets/noswitch.svg";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const swrillimageref = useRef(null);
  return (
    <>
      <div ref={ref} className="lg:h-[200vh] h-full relative">
        <div className="bg-white jost lg:-mt-[22rem] relative lg:min-h-screen">
          <div className="absolute  transform  lg:top-[35rem] -top-40 lg:-bottom-40 flex px-4 lg:px-10">
            <div className=" z-[500]">
              <h1
                className="text-3xl   salo lg:text-[110px] text-[#060ebb]
               font-[500] text-left leading-tight lg:leading-normal"
              >
                WHO WE ARE
              </h1>

              <h2 className="jost text-[clamp(18px,2.1vw,30px)] whitespace-nowrap w-[100%] text-left lg:leading-[40px]">
                A seriously playful process-oriented <br /> experience design
                studio that disrupts +<br /> questions + creates narrative{" "}
                environments <br /> and experiences for brands worldwide
              </h2>
            </div>

            {swrillimageref.current && (
              <Swrillmaker
                scrollYProgress={scrollYProgress}
                targetRef={swrillimageref}
              />
            )}
          </div>
        </div>

        <div className="     !z-[-1]    mt-80 flex px-10">
          {/* Adding smooth infinite rotation */}
          <motion.div
            ref={swrillimageref}
            className="w-[100%] !z-[150]  overflow-hidden transform translate-x-[-50px] lg:translate-x-[-120px]"
          >
            {/* <img src={swrillpng} className="w-[80%]" alt="Swrill" /> */}
          </motion.div>
          <div className=" !z-[500] w-full lg:-mt-12 mt-20 whitespace-nowrap -mr-5 lg:mr-0">
            <h1 className="text-[clamp(30px,7.6vw,110px)] salo text-[#060ebb] font-[500] text-right leading-tight lg:leading-normal">
              WHAT WE DO
            </h1>
            <h2 className="jost w-[100%] text-right text-[clamp(18px,2.1vw,30px)] lg:leading-[40px]">
              We dabble in graphic design, <br />
               a smidge of branding + packaging,
              <br />focus extensively on experience{" "}
              <br className=" lg:hidden block" /> design{" "}
              <br className=" lg:block hidden" />
              to tie everything together seamlessly.
            </h2>
          </div>
          {/* <div className=" text-[clamp(14px,1.5vw,22px)] -left-20 bottom-20 lg:left-auto flex gap-4 text-[#2354CF] lg:leading-[32px] tracking-widest lg:bottom-[20rem] whitespace-nowrap lg:-right-20 rotate-[-90deg] absolute lg:rotate-[90deg]">
            Scroll To Learn More
            <svg
              width="36"
              height="36"
              className=" lg:block hidden -rotate-90"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.8803 18C35.8803 27.875 27.875 35.8803 18 35.8803C8.12501 35.8803 0.11969 27.875 0.11969 18C0.11969 8.12503 8.12501 0.119705 18 0.119705C27.875 0.119705 35.8803 8.12503 35.8803 18Z"
                fill="#174DD5"
              />
              <path
                d="M24.396 16.5635L18 22.9595L11.604 16.5635"
                stroke="white"
                stroke-width="1.84978"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              className=" block lg:hidden rotate-90"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.8803 18C35.8803 27.875 27.875 35.8803 18 35.8803C8.12501 35.8803 0.11969 27.875 0.11969 18C0.11969 8.12503 8.12501 0.119705 18 0.119705C27.875 0.119705 35.8803 8.12503 35.8803 18Z"
                fill="#174DD5"
              />
              <path
                d="M24.396 16.5635L18 22.9595L11.604 16.5635"
                stroke="white"
                stroke-width="1.84978"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> */}
        </div>
      </div>

      {/* <SecondSection /> */}
      <div className="lg:mt-10 lg:mb-20">
        <LogosLoop />
      </div>
      <ThirdSection />
      <div className="lg:hidden block mb-10">
        <div className="h-10"></div>
      </div>
      <ShowReel />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
// import  {   useState } from "react";
// import { motion } from "framer-motion";
// import two from "../assets/two.png";
// import three from "../assets/three.png";
// import linelab from "../assets/linelab.png";

// const SecondSection = () => {
//   const sectionRef = useRef(null);
//   const [scrollY, setScrollY] = useState(0);
//   const [sectionBounds, setSectionBounds] = useState({ top: 0, bottom: 0 });

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listener
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Update section bounds on resize or initial load
//   useEffect(() => {
//     const updateBounds = () => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const scrollTop = window.scrollY;
//         setSectionBounds({
//           top: rect.top + scrollTop,
//           bottom: rect.bottom + scrollTop,
//         });
//       }
//     };

//     updateBounds();
//     window.addEventListener("resize", updateBounds);

//     return () => window.removeEventListener("resize", updateBounds);
//   }, []);

//   // Limit movement based on scroll position
//   const moveImageOne = (scrollY) => {
//     if (scrollY < sectionBounds.top) return 0; // Before section starts
//     if (scrollY > sectionBounds.bottom)
//       return (sectionBounds.bottom - sectionBounds.top) * 0.07; // After section ends
//     return (scrollY - sectionBounds.top) * 0.14; // Inside section
//   };

//   const moveImageTwo = (scrollY) => {
//     if (scrollY < sectionBounds.top) return 0; // Before section starts
//     if (scrollY > sectionBounds.bottom)
//       return (sectionBounds.bottom - sectionBounds.top) * -0.07; // After section ends
//     return (scrollY - sectionBounds.top) * -0.14; // Inside section
//   };

//   return (
//     <div ref={sectionRef} className="overflow-hidden py-40">
//       <div className="bg-black py-20 flex flex-col   gap-10">
//         <div>
//           <h1 className="text-[#F4ECE0] text-[clamp(36px,7.6vw,110px)] lg:leading-[97px] text-center font-sans">
//             Experience Lab
//           </h1>
//           <h2 className="text-white text-[clamp(20px,2.1vw,30px)] text-center jost">
//             Spaces speak and spaces narrate
//           </h2>
//         </div>
//         <div className="relative hidden lg:flex justify-center items-center gap-10 h-[300px]">
//           {/* LineLab Image */}
//           <img
//             src={linelab}
//             className="w-[40%] left-[4rem] top-1/2 -mt-[1.2px] absolute"
//             alt="Lab"
//           />

//           {/* Three Image */}
//           <motion.img
//             src={three}
//             className="w-[40%] z-[10] absolute left-[20%]"
//             alt="Lab"
//             style={{
//               transform: `translateX(${moveImageOne(scrollY)}px)`, // Move based on scrollY
//             }}
//             transition={{ duration: 0.4 }}
//           />

//           <img src={noswitch} className="w-full" alt="Lab" />

//           {/* Two Image */}
//           <motion.img
//             src={two}
//             className="w-[50%] z-[2] absolute right-[20%] !-mr-10"
//             alt="Lab"
//             style={{
//               transform: `translateX(${moveImageTwo(scrollY)}px)`, // Move based on scrollY
//             }}
//             transition={{ duration: 0.4 }}
//           />

//           <img
//             src={linelab}
//             className="w-[40%] z-[1] right-[1rem] top-1/2 -mt-[5.5px] absolute"
//             alt="Lab"
//           />
//         </div>
//         <h1 className="lg:px-20 px-4 lg:text-2xl text-white text-center jost">
//           Born from our ethos, the Chaos Lab serves as a testing ground for the
//           diverse narrative environments we experiment with and explore. Based
//           in India, with plans for growth, we embrace a 'test-and-learn'
//           mindset. Our aim is to decode and disrupt conventional norms and
//           beliefs in experimental communication and experience design.
//         </h1>
//       </div>
//     </div>
//   );
// };

// import slider1 from "../assets/slider1.png";
// import slider2 from "../assets/slider2.png";
// import slider3 from "../assets/slider3.png";
// import slider4 from "../assets/slider4.png";
// import slider5 from "../assets/slider5.png";

// const Partner = () => {
//   const LOGOS = [
//     <img src={slider1} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider2} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider3} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider4} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider5} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider1} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider2} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider3} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider4} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider5} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider1} alt="aurobindo" className="  w-72  h-auto" />,
//     <img src={slider2} alt="aurobindo" className="  w-72  h-auto" />,
//   ];
//   return (
//     <div className="w-screen py-10   z-[300] overflow-hidden  lg:flex items-center relative justify-center  gap-20 flex-col">
//       <div
//         className="relative items-center justify-center w-[100%] z-[300] overflow-hidden bg-white
//   before:absolute before:z-[300] before:left-0 before:top-0 before:h-full before:w-[200px]
//   before:bg-[linear-gradient(to_right,rgba(227,222,212,0)_100%)] before:content-['']
//   after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[200px]
//   after:-scale-x-100 after:bg-[linear-gradient(to_right,rgba(255,0,0,0))] after:content-['']"
//       >
//         <div className="animate-infinite-slider overflow-hidden gap-10 flex w-[calc(350px*10)]">
//           {LOGOS.map((logo, index) => (
//             <div
//               className="slide flex w-[30%] mx-4 items-center justify-center"
//               key={index}
//             >
//               {logo}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import one from "../assets/1.webm";
import iosVideo from "../assets/2.mp4"; // Your video for iOS/Safari
import ShowReel from "../components/ShowReel";
import AutoTextSlider from "../components/AutoTextSlider";
import LogosLoop from "../components/LogosLoop";
import useMobileVideoFix from "../hooks/useMobileVideo";

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const ThirdSection = () => {
  const videoSource = isIOS || isSafari ? iosVideo : one;

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("playsinline", "");

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay blocked");
      }
    };

    // Play immediately
    playVideo();

    // iOS / Safari fallback
    const handleTouch = () => {
      playVideo();
    };

    window.addEventListener("touchstart", handleTouch, { once: true });

    return () => {
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  return (
    <div className="relative mt-0 lg:-mt-40 lg:flex lg:min-h-[80vh]">
      {/* LEFT — VIDEO */}
      <div className="w-full lg:absolute lg:left-5 lg:top-20 lg:w-[50%]">
        <video
          ref={videoRef}
          id="loader-video"
          autoPlay
          muted
          loop
          preload="auto"
          controls={false}
          playsInline
          className="block w-full h-auto object-contain transform-gpu"
        >
          <source
            src={videoSource}
            type={isIOS || isSafari ? "video/mp4" : "video/webm"}
          />
        </video>
      </div>

      {/* CONTENT */}
      <div
        className="
      jost text-center flex flex-col items-center justify-center w-full
      lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[70%] lg:translate-x-36 pt-20 lg:pt-0
    "
      >
        <AutoTextSlider />
      </div>
    </div>
  );
};

// import befooter from "../assets/FounderBanner.jpg";
