import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Navbar from "../components/Navbar";

import { motion } from "framer-motion";
// import { div } from "framer-motion/client";
// import Scene from "./Model";
const Contact = () => {
  const bottomPageRef = useRef(null);
  const scrollToBottom = () => {
    bottomPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <div className="bg-white jost relative" style={{ minHeight: "100vh" }}>
        {/* Absolutely Centered Text */}
        <JobListings scrollToBottom={scrollToBottom} />
        <JobListings2 scrollToBottom={scrollToBottom} />

        {/* <Footer /> */}
      </div>
    </>
  );
};

// import svg4 from "../assets/hover/element3-min.png";
const svg5 = "https://ik.imagekit.io/hoc01/assets/hover/element5-min.png?updatedAt=1780581082484";
const svg6 = "https://ik.imagekit.io/hoc01/assets/hover/element6-min.png?updatedAt=1780581077263";
const flowerImg = "https://ik.imagekit.io/hoc01/assets/hover/flowerImg.png?updatedAt=1780581075105";
const linkedInImg = 'https://ik.imagekit.io/hoc01/assets/hover/linkedInImg.png?updatedAt=1780581069934'
const instagramImg = 'https://ik.imagekit.io/hoc01/assets/hover/instagramImg.png?updatedAt=1780581082108'
const emailImg = 'https://ik.imagekit.io/hoc01/assets/hover/emailImg.png?updatedAt=1780581076239'
// https://ik.imagekit.io/7da6fpjdo/hover/element5-min.png?updatedAt=1741945058062

// import lin from "../assets/lin.png";
// import ins from "../assets/ins.png";
// // import fab from "../assets/fab.png";
// import bhe from "../assets/mail.png";
// import dri from "../assets/phone.png";


const images = [
  {
    src: flowerImg,
    className: "top-[35%] left-[2%] w-[32vh] max-w-[280px]",
    link: "/Contact",
    rotate: 0,
  },
  {
    src: linkedInImg,
    className: "bottom-[5%] left-[0%] w-[32vh] max-w-[500px]",
    link: "https://www.linkedin.com/company/hausofchaos/",
    rotate: -20,
  },
  {
    src: instagramImg,
    className: "top-[25%] left-[28%] w-[32vh] max-w-[500px]",
    link: "https://www.instagram.com/hausofchaos.co/",
    rotate: -20,
  },
  {
    src: svg5,
    className: "bottom-[8%] left-[35%] w-[32vh] max-w-[400px]",
    link: "/Contact",
    rotate: 8,
  },
  {
    src: emailImg,
    className: "bottom-[10%] right-[3%] w-[32vh] max-w-[500px]",
    link: "mailto:explore@hausofchaos.co",
    rotate: 20,
  },
  {
    src: svg6,
    className: "top-[25%] right-[10%] w-[32vh] max-w-[280px]",
    link: "/Contact",
    rotate: 10,
  },
];
const images2 = [
  {
    src: flowerImg,
    className: "bottom-20 left-0",
    link: "/Contact",
    rotate: 0,
  },
  {
    src: linkedInImg,
    className: "w-[60%] top-[50%] right-0",
    link: "https://www.linkedin.com/company/hausofchaos/",
    rotate: -20,
  },
  {
    src: instagramImg,
    className: "w-[60%] top-[40%] left-0",
    link: "https://www.instagram.com/hausofchaos.co/",
    rotate: -20,
  },
  {
    src: svg5,
    className: "bottom-20 right-0",
    link: "/Contact",
    rotate: 8,
  },
  {
    src: emailImg,
    className: "w-[50%] top-[20%] left-[5%]",
    link: "mailto:explore@hausofchaos.co",
    rotate: -20,
  },
  {
    src: svg6,
    className: "top-40 left-48",
    link: "/Contact",
    rotate: 10,
  },
];

const JobListings = ({ scrollToBottom }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = (link) => {
    if (!isDragging) {
      // Handle mailto links differently
      if (link.startsWith("mailto:")) {
        window.location.href = link;
      } else {
        window.open(link, "_blank");
      }
    }
  };

  return (
    <div
      ref={ref}
      className="w-full h-[100vh] hidden lg:flex justify-center items-center relative overflow-hidden"
    >
      {isInView &&
        images.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt={`img-${index}`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            draggable={false}
            className={`absolute w-1/2 lg:w-auto ${img.className}`}
            initial={{
              y: -200,
              opacity: 0,
              rotate: img.rotate,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: img.rotate,
              transition: {
                type: "spring",
                duration: 1,
                delay: index * 0.12,
                bounce: 0.15,
                damping: 15,
                stiffness: 120,
              },
            }}
            drag
            dragTransition={{
              bounceStiffness: 200,
              bounceDamping: 10,
            }}
            dragConstraints={{
              top: -400,
              left: -1000,
              right: 1000,
              bottom: 200,
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
            onClick={() => handleClick(img.link)}
            style={{
              touchAction: "none",
              cursor: "default",
              willChange: "transform, opacity",
            }}
            whileHover={{
              scale: 1.08,
              rotate: img.rotate + 5,
              cursor: "grab",
            }}
            whileDrag={{
              cursor: "grabbing",
            }}
          />
        ))}

      {/* <h1 className="absolute cursor-pointer !bottom-2 lg:bottom-10 tracking-wide text-[#0000FF] text-center text-[clamp(24px,1.4vw,20px)] "  onClick={scrollToBottom}>
        <img src="/down-arrow.png" alt="Arrow" className="w-10" />
      </h1> */}
      {/* <div className=" absolute">Scroll Down</div> */}
    </div>
  );
};
const JobListings2 = ({ scrollToBottom }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = (link) => {
    if (!isDragging) {
      // Handle mailto links differently
      if (link.startsWith("mailto:")) {
        window.location.href = link;
      } else {
        window.location.href = link;
      }
    }
  };

  return (
    <div
      ref={ref}
      className="w-full h-[100vh] lg:hidden flex justify-center items-center relative overflow-hidden"
    >
      {isInView &&
        images2.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt={`img-${index}`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            draggable={false}
            className={`absolute w-1/2 lg:w-auto ${img.className}`}
            initial={{
              y: -200,
              opacity: 0,
              rotate: img.rotate,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: img.rotate,
              transition: {
                type: "spring",
                duration: 1,
                delay: index * 0.12,
                bounce: 0.15,
                damping: 15,
                stiffness: 120,
              },
            }}
            drag
            dragTransition={{
              bounceStiffness: 200,
              bounceDamping: 10,
            }}
            dragConstraints={{
              top: -400,
              left: -1000,
              right: 1000,
              bottom: 200,
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
            onClick={() => handleClick(img.link)}
            style={{
              touchAction: "none",
              cursor: "default",
              willChange: "transform, opacity",
            }}
            whileHover={{
              scale: 1.08,
              rotate: img.rotate + 5,
              cursor: "grab",
            }}
            whileDrag={{
              cursor: "grabbing",
            }}
          />
        ))}

      <h1
        className="absolute lg:block hidden cursor-pointer !bottom-2 lg:bottom-10 tracking-wide text-[#060ebb] text-center text-[clamp(24px,1.4vw,20px)] "
        onClick={scrollToBottom}
      >
        Scroll Down
      </h1>
      {/* <div className=" absolute">Scroll Down</div> */}
    </div>
  );
};

export default Contact;

import { useInView } from "framer-motion";
