import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assets
import worldsmall from "../assets/worldsmall.png";
import logo2 from "../assets/logo2.png";
import grid from "../assets/lines.png";
import svgser from "../assets/svgser.png";
import wiresm from "../assets/wiresm.png";
import plugservicesleft from "../assets/left.png";
import plugservicesright from "../assets/right.png";
import Footer from "./Footer";
import MobileNav2 from "./MobileNav";

gsap.registerPlugin(ScrollTrigger);

const categories = {
  experience: [
    {
      label: "Experiential Space Design",
      dis: "We design brand experiences that live in space — conceptually led, environmentally built, and memorable long after they end. Spatial storytelling through objects, structure, and environment",
      points: [
        "Hybrid Activations via Experiential Marketing",
        "Exhibition & Installation Design",
        "Audience Journey & Staging Design",
        "Pop-Up Space Design",
      ],
    },
    {
      label: "Motion & CGI",
      dis: "The brand in motion | Moving image and digital craft that extends the brand into screen and space",
      points: [
        "Motion Identity & Animated Brand Systems",
        "CGI & 3D World-Building",
        "Screen-Based Installations & Digital Environments",
      ],
    },
  ],
  design: [
    {
      label: "Brand Evolution Strategy",
      dis: "Navigating brand growth, repositioning, and long-term relevance + Defining who you are, what you stand for, and how you show up",
      points: [
        "Positioning & Brand Architecture",
        "Brand Evolution & Repositioning",
        "Audience & Market Mapping",
        "Brand Voice & Personality Development",
      ],
    },
    {
      label: "Brand Narrative & Content",
      dis: "Crafting compelling stories and content that bring your brand to life.",
      points: [
        "Brand Story & Origin Narrative",
        "Tone of Voice Development",
        "Copywriting & Editorial Direction",
        "Content Frameworks & Messaging Pillars",
      ],
    },
    {
      label: "Logo & Visual Identity Design",
      dis: "Designing  a narrative world for your brand via distinctive visuals that make your brand instantly recognizable.",
      points: [
        "Logo & Mark Design",
        "Colour, Typography & Grid Systems",
        "Illustration & Iconography",
        "Brand Guidelines & Usage Systems",
      ],
    },
    {
      label: "Social Media & Digital Branding",
      dis: "Platform-ready identity systems and content frameworks",
      points: [
        "Platform Identity Systems",
        "Social Media Frameworks & Templates",
      ],
    },
    {
      label: "Environmental & Spatial Branding",
      dis: "Bridging the brand disconnect between digital and physical presence",
      points: ["Wayfinding & Environmental Signage", "Environmental Branding"],
    },
    {
      label: "Analogue Branding Tools",
      dis: "Designing tactile brand materials that bring your identity into the real world, via multisensory mediums.",
      points: [
        "Print & Publication Design",
        "Packaging & Product Communication",
        "Branded Collateral & Stationery",
      ],
    },
  ],
};

const Contact = () => {
  const location = useLocation();
  const [isSection2, setIsSection2] = useState(false);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsSection2(scrollPosition > windowHeight * 0.2); // Toggle theme at 20% height
      setIsFixed(scrollPosition < windowHeight); // Navbar stays fixed only in the first section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="bg-white jost relative" style={{ minHeight: "100vh" }}>
        {/* Navbar */}
        <div className="md:hidden">
          <MobileNav2 />
        </div>
        <div
          className={`${
            // isFixed  w-full z-[500] top-0 left-0 ${
            isSection2 ? "bg-white text-black" : "  text-[#000000]"
          } transition-all  py-2 duration-700 md:block hidden`}
        >
          <div className="flex py-4 jost px-4 md:px-10 justify-between items-start">
            <Link to={"/"}>
              <img
                src={isSection2 ? logo2 : logo2}
                className="w-[80px] md:w-[110px] transition-all duration-700"
                alt="Logo"
              />
            </Link>
            <div className="text-[14px] md:text-[19px] font-semibold flex gap-4 md:gap-14 items-center">
              <Link
                to={"/client"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/client")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>CLIENT</h1>
              </Link>
              <Link
                to={"/services"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/Services")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>SERVICES</h1>
              </Link>
              <Link
                to={"/experience"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/Experience")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>EXPERIENCE LAB</h1>
              </Link>
              <Link
                to={"/ethos"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/Ethos")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>ETHOS</h1>
              </Link>
              <Link
                to={"/careers"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/Careers")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>CAREERS</h1>
              </Link>
            </div>
            <Link to={"/contact"}>
              <motion.div
                className={`py-2 px-4 rounded-full relative text-[12px] md:text-[13px] font-semibold flex items-center cursor-pointer ${
                  isToggled
                    ? "bg-black text-white"
                    : "bg-[#F0F0F0] text-[#060ebb]"
                }`}
                onClick={handleToggle}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <motion.h1
                  className={`mr-6 md:mr-9 text-center`}
                  animate={{
                    x: isToggled ? "35px" : "0px",
                    color: isToggled ? "#FFFFFF" : "#060ebb",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  CONTACT
                </motion.h1>
                <motion.img
                  className="w-[36px] md:w-[46px] h-[36px] md:h-[46px] absolute"
                  src={worldsmall}
                  alt="World"
                  animate={{
                    x: isToggled ? "-50%" : "150%",
                    rotate: isToggled ? 360 : 0,
                  }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </Link>
          </div>
        </div>
      
      <div className="bg-black z-[1] mx-auto mt-40 md:mt-20 rounded-t-3xl relative">
        <div className=" mt-[15%]"/>
        <MainServices />
      </div>
      <Footer />
    </div>
    </>
  );
};

const MainServices = () => {
  const [active, setActive] = useState("Experience");
  const plugRightRef = useRef(null);
  const lineRef = useRef(null);
  const stopsRef = useRef([]);

  const currentItems = categories[active.toLowerCase()] || [];
  const ITEM_SPACING = active === "Experience" ? 450 : 380;
  const totalContentHeight = currentItems.length * ITEM_SPACING;
  const svgHeight = totalContentHeight + 100;

  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate dynamic horizontal points
  // Adjust these multipliers to fine-tune the alignment with your plug
  const dynamicStartX = -(vw * 0.2); // Starts 20% of screen width to the left
  const curveX = 120;

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [active, svgHeight]);

  useEffect(() => {
    gsap.fromTo(plugRightRef.current, { x: 100 }, {
      x: 0,
      scrollTrigger: {
        trigger: ".alinsa",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    const GreenLine = lineRef.current;
    const length = GreenLine.getTotalLength();
    gsap.set(GreenLine, { strokeDasharray: length, strokeDashoffset: length });

    gsap.to(GreenLine, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: GreenLine,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    stopsRef.current.forEach((stop, index) => {
      if (!stop) return;
      gsap.fromTo(stop, { scale: 0 }, {
        scale: 1,
        scrollTrigger: {
          trigger: stop,
          start: "top 80%",
          scrub: true,
          onEnter: () => {
            gsap.to(`.label-text-${index} h1, .label-text-${index} .num-icon`, { color: "#F2F2F2", fill: "#060ebb", duration: 0.5 });
            gsap.to(`.label-text-${index} p, .label-text-${index} span`, { color: "#BFBFBF", duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to(`.label-text-${index} h1, .label-text-${index} p, .label-text-${index} .num-icon, .label-text-${index} span`, { color: "#676767", fill: "#676767", duration: 0.5 });
          },
        },
      });
    });
  }, [active, currentItems]);

  return (
    <div className="flex flex-col items-center md:items-start w-full py-32 md:px-20 relative overflow-visible transition-all duration-500">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }} />
      
      <div className="flex items-center md:items-stretch relative flex-col -space-y-16 uppercase z-[100] text-[108px] font-[1000] text-[#F4ECE0] alinsa mb-10">
        <div className="xl:flex hidden relative">
          <h1 className="z-[110]">Our</h1>
          <img src={wiresm} className="-ml-2 mt-8 w-[80px] h-[80px] object-cover" alt="" />
          <img src={plugservicesleft} className="absolute w-full left-52 -top-28 scale-[1.2] z-[100]" alt="Left Plug" />
          <img ref={plugRightRef} src={plugservicesright} className="absolute w-full scale-[1.2] -right-[20%] -top-28 z-[90]" alt="Right Plug" />
        </div>
        <h1 className="xl:block hidden z-[110]">Services</h1>
        
        <div className="bg-[#242424] px-3 py-3 rounded-[76px] flex gap-2 absolute -bottom-16 text-base jost text-white font-medium z-[120]">
          {["Experience", "Design"].map((item) => (
            <button key={item} className={`px-6 py-2 uppercase rounded-[59px] transition-all duration-300 ${active === item ? "bg-[#060ebb]" : "bg-black text-[#C9C9C9]"}`} onClick={() => setActive(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* FIXED SVG LINE LOGIC */}
      <div className="hidden xl:block relative w-full -mt-[140px] overflow-visible" style={{ height: svgHeight }}>
       <svg
          className="overflow-visible absolute left-1/2 " 
          width={vw * 0.5} 
          height={svgHeight}
          viewBox={`0 0 ${vw * 0.5} ${svgHeight}`}
          fill="none"
        >
          {/* Static Background Path */}
          <path 
            d={`M ${dynamicStartX} -120 H ${curveX - 20} c 15 0 20 5 20 20 V ${totalContentHeight + 230}`} 
            stroke="#242424" 
            strokeWidth="4" 
          />
          
          {/* Animated Active Path */}
          <path 
            ref={lineRef} 
            d={`M ${dynamicStartX} -120 H ${curveX - 20} c 15 0 20 5 20 20 V ${totalContentHeight + 230}`} 
            stroke="#060ebb" 
            strokeWidth="4" 
          />

          {currentItems.map((item, i) => {
            const finalCY = (i + 1) * ITEM_SPACING - 50;
            return (
              <g key={active + i} className="overflow-visible">
                <circle 
                  ref={(el) => (stopsRef.current[i] = el)} 
                  cx={curveX} 
                  cy={finalCY} 
                  r="6" 
                  fill="#060ebb" 
                />
                <foreignObject 
                  x={curveX + 15} 
                  y={finalCY - 20} 
                  width="600" 
                  height="400" 
                  className={`label-text-${i} overflow-visible`}
                >
                   <Label title={item.label} description={item.dis} points={item.points} />
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="xl:hidden w-full flex flex-col gap-20 mt-32 px-4">
        {currentItems.map((item, i) => (
          <div key={i} className="flex gap-4">
            <img src={svgser} alt="" className="w-6 h-6 mt-1" />
            <div className="text-start">
              <h2 className="text-white text-2xl jost font-medium mb-2 uppercase">{item.label}</h2>
              <p className="jost text-[#BFBFBF] mb-3">{item.dis}</p>
              <div className="space-y-1">
                {item.points.map((p, idx) => <p key={idx} className="jost text-[#BFBFBF] text-sm">{idx + 1}. {p}</p>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Label = ({ title, description, points }) => (
  <div className="flex gap-6 items-start text-left jost max-w-[550px]">
    <div className="mt-2 shrink-0">
      <svg width="28" height="28" viewBox="0 0 33 32" className="num-icon" fill="#676767">
         <path d="M19.5509 28.6184L21.5812 26.5881V20.9292H27.2401L29.2704 18.8989H19.5509V28.6184Z" />
         <path d="M15.4759 1.01491C15.4759 3.95236 15.4759 12.016 15.4759 14.8238C12.7113 14.8238 4.54689 14.8238 1.66703 14.8238L0.651886 15.8389L1.66703 16.8541H15.4759C15.4759 17.9196 15.4759 29.2807 15.4759 30.663L16.4911 31.6781L17.5063 30.663V16.8541H31.3151L32.3303 15.8389L31.3151 14.8238C29.8752 14.8238 18.615 14.8238 17.5063 14.8238V1.01491L16.4911 -0.000244141L15.4759 1.01491Z" />
         <path d="M3.71173 18.8989L5.74203 20.9292H11.401V26.5881L13.4312 28.6184V18.8989H3.71173Z" />
         <path d="M13.4312 12.7793V3.05981L11.401 5.09011V10.7491H5.74203L3.71173 12.7793H13.4312Z" />
         <path d="M19.5509 12.7793H29.2704L27.2401 10.7491H21.5812V5.09011L19.5509 3.05981V12.7793Z" />
      </svg>
    </div>
    <div>
      <h1 className=" text-[24px] uppercase font-bold text-[#676767] mb-2 tracking-wide">{title}</h1>
      <p className=" text-[16px] text-[#676767] leading-relaxed mb-4 w-full">{description}</p>
      <div className="space-y-1">
        {points.map((p, i) => (
          <p key={i} className="text-[14px] text-[#676767] font-medium">
            <span className="mr-2">{i + 1}.</span>{p}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default Contact;