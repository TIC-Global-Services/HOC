import React, { useEffect, useState } from 'react'
import MobileNav from "../MobileNav";
import PadlrHero from '../../components/padlr/PadlrHeroSection'
import Footer from '../Footer'
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import worldsmall from "../../assets/worldsmall.png";
import logo2 from "../../assets/logo2.png";
import PadlrMotionVideoSec from '../../components/padlr/PadlrMotionVideoSec';
import WannaKnowMore from '../../components/padlr/WannaKnowMore';
import PadlrImageSec from '../../components/padlr/PadlrImageSec';
import OwnTheCourt from '../../components/padlr/OwnTheCourt';
import CourtSky from '../../components/padlr/courtSky/CourtSky';
import GrowthEngine from '../../components/padlr/GrowthEngine';

const Padlr = () => {
  const location = useLocation();
  const [isSection2, setIsSection2] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [isToggled, setIsToggled] = useState(false);

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

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };
  return (
    <>
    {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNav />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div
          className={`${
            isFixed ? "fixed" : "absolute"
          } w-full z-[500] top-0 left-0 ${
            isSection2 ? "bg-white text-black" : "text-[#000000]"
          } transition-all py-2 duration-700`}
        >
          <div className="flex py-4 jost px-4 md:px-10 justify-between items-start">
            {/* Logo */}
            <Link to={"/"}>
              <img
                src={logo2}
                className="w-[80px] md:w-[110px] transition-all duration-700"
                alt="Logo"
              />
            </Link>

            {/* Navigation Links */}
            <div className="text-[14px] md:text-[19px] font-semibold flex gap-4 md:gap-14 items-center">
              <Link
                to={"/client"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/Services")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>CLIENTS</h1>
              </Link>
              <Link
                to={"/Services"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/Services")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>SERVICES</h1>
              </Link>
              <Link
                to={"/Ethos"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/Ethos")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>ETHOS</h1>
              </Link>
              <Link
                to={"/Careers"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/Careers")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>CAREERS</h1>
              </Link>
            </div>

            {/* Contact Button with Toggle Animation */}
            <Link to={"/Contact"}>
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
      </div>

      {/* Sections */}
      <PadlrHero />
      <GrowthEngine />
      <PadlrMotionVideoSec />
      <CourtSky />
      <WannaKnowMore />
      <PadlrImageSec />
      <OwnTheCourt />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Padlr
