import React, { useEffect, useState } from "react";
import MobileNav from "../pages/MobileNav";
import MobileNav3 from "../pages/MobileNav3";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import CursorHover from "../utils/Hover";

const worldsmall = "https://ik.imagekit.io/hoc01/assets/worldsmall.png";
const logo = "https://ik.imagekit.io/hoc01/assets/logo.png";
const logo2 = "https://ik.imagekit.io/hoc01/assets/logo2.png";


const Navbar = ({
  variant = "default",
  logoLight: customLogoLight,
  logoDark: customLogoDark,
  showCursorHover = false,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const resolvedLogoLight = customLogoLight || logo;
  const resolvedLogoDark = customLogoDark || logo2;

  const [isSection2, setIsSection2] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const firstSectionHeight = window.innerHeight;

      setIsSection2(scrollY > firstSectionHeight * 0.2);

      // NAVBAR HIDE / SHOW
      if (scrollY > lastScrollY && scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = scrollY;
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

  const handleNav = (path) => {
    ScrollTrigger.getAll().forEach((t) => t.kill(true));
    gsap.killTweensOf("*");

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      return;
    }

    navigate(path);
  };

  const isLanding = variant === "landing";
  const isDark = variant === "dark";

  // Determine bg/text classes based on variant and section
  const sectionClasses = isLanding
    ? isSection2
      ? "bg-white text-black"
      : "bg-[#060ebb] text-white"
    : isDark
      ? "bg-black text-white"
      : isSection2
        ? "bg-white text-black"
        : "bg-white text-[#000000]";

  // Logo for current section
  const currentLogo = isLanding
    ? isSection2
      ? resolvedLogoDark
      : resolvedLogoLight
    : isDark
      ? resolvedLogoLight
      : resolvedLogoDark;

  return (
    <>
      {/* MOBILE NAV */}
      <div className="lg:hidden">
        {isLanding ? <MobileNav3 /> : <MobileNav />}
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden lg:block">
        <div
          className={`
            fixed
            top-0
            left-0
            w-full
            z-[800]
            py-2
            transition-all
            duration-500
            transform
            ${showNavbar ? "translate-y-0" : "-translate-y-full"}
            ${sectionClasses}
          `}
        >
          {isLanding && !isSection2 && showCursorHover && <CursorHover />}

          <div className="flex py-2 jost px-4 lg:px-10 justify-between items-center">
            {/* LOGO */}
            <img
              src={currentLogo}
              onClick={() => handleNav("/")}
              className="w-[80px] transition-all duration-700 cursor-pointer"
              alt="Logo"
            />

            {/* NAVIGATION LINKS */}
            <div className="text-[clamp(14px,1.3vw,19px)] font-semibold flex gap-4 lg:gap-14 items-center">
              <h1
                onClick={() => handleNav("/client")}
                className={`cursor-pointer ${isDark ? "hover:text-[#060ebb]" : "hover:text-black/50"} ${
                  isActiveRoute("/client")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                CLIENTS
              </h1>

              <h1
                onClick={() => handleNav("/services")}
                className={`cursor-pointer ${isDark ? "hover:text-[#060ebb]" : "hover:text-black/50"} ${
                  isActiveRoute("/services")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                SERVICES
              </h1>

              <Link
                to={"/Experience"}
                className={`${isDark ? "hover:text-[#060ebb]" : "hover:text-black/50"} ${
                  isActiveRoute("/Experience")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>EXPERIENCE LAB</h1>
              </Link>

              <h1
                onClick={() => handleNav("/ethos")}
                className={`cursor-pointer ${isDark ? "hover:text-[#060ebb]" : "hover:text-black/50"} ${
                  isActiveRoute("/ethos")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                ETHOS
              </h1>

              <h1
                onClick={() => handleNav("/careers")}
                className={`cursor-pointer ${isDark ? "hover:text-[#060ebb]" : "hover:text-black/50"} ${
                  isActiveRoute("/careers")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                CAREERS
              </h1>
            </div>

            {/* CONTACT BUTTON */}
            <div onClick={() => handleNav("/contact")}>
              <motion.div
                className={` py-2 px-4 rounded-full relative text-[clamp(12px,0.9vw,13px)] font-semibold flex items-center cursor-pointer ${ isToggled ? "bg-black text-white" : "bg-[#F0F0F0] text-[#060ebb]" } `}
                onClick={handleToggle}
              >
                <motion.h1
                  className="mr-6 lg:mr-9 text-center"
                  animate={{
                    x: isToggled ? "35px" : "0px",
                    color: isToggled ? "#FFFFFF" : "#060ebb",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  CONTACT
                </motion.h1>

                <motion.img
                  className="w-[36px] lg:w-[46px] h-[36px] lg:h-[46px] absolute"
                  src={worldsmall}
                  alt="World"
                  animate={{
                    x: isToggled ? "-50%" : "150%",
                    rotate: isToggled ? 360 : 0,
                  }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
