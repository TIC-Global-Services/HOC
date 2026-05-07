import React, { useEffect, useState } from "react";
import MobileNav from "../pages/MobileNav";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import worldsmall from "../assets/worldsmall.png";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSection2, setIsSection2] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  // SHOW / HIDE NAVBAR
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const firstSectionHeight = window.innerHeight;

      // SECTION COLOR CHANGE
      setIsSection2(scrollY > firstSectionHeight * 0.2);

      // NAVBAR HIDE / SHOW
      if (scrollY > lastScrollY && scrollY > 100) {
        // SCROLL DOWN
        setShowNavbar(false);
      } else {
        // SCROLL UP
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

  return (
    <>
      {/* MOBILE NAV */}
      <div className="md:hidden">
        <MobileNav />
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:block pt-[10%]">

        <div
          className={`
            fixed
            top-0
            left-0
            w-full
            z-[500]
            py-2
            transition-all
            duration-500
            transform
            ${
              showNavbar
                ? "translate-y-0"
                : "-translate-y-full"
            }
            ${
              isSection2
                ? "bg-white text-black"
                : "text-[#000000]"
            }
          `}
        >
          <div className="flex py-2 jost px-4 md:px-10 justify-between items-center">

            {/* LOGO */}
            <img
              src={logo2}
              onClick={() => handleNav("/")}
              className="w-[80px] transition-all duration-700 cursor-pointer"
              alt="Logo"
            />

            {/* NAVIGATION LINKS */}
            <div className="text-[14px] md:text-[19px] font-semibold flex gap-4 md:gap-14 items-center">

              <h1
                onClick={() => handleNav("/client")}
                className={`cursor-pointer hover:text-black/50 ${
                  isActiveRoute("/client")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                CLIENTS
              </h1>

              <h1
                onClick={() => handleNav("/services")}
                className={`cursor-pointer hover:text-black/50 ${
                  isActiveRoute("/services")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                SERVICES
              </h1>

              <Link
                to={"/Experience"}
                className={`hover:text-black/50 ${
                  isActiveRoute("/Experience")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                <h1>EXPERIENCE LAB</h1>
              </Link>

              <h1
                onClick={() => handleNav("/ethos")}
                className={`cursor-pointer hover:text-black/50 ${
                  isActiveRoute("/ethos")
                    ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                    : ""
                }`}
              >
                ETHOS
              </h1>

              <h1
                onClick={() => handleNav("/careers")}
                className={`cursor-pointer hover:text-black/50 ${
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
                className={`
                  py-2
                  px-4
                  rounded-full
                  relative
                  text-[12px]
                  md:text-[13px]
                  font-semibold
                  flex
                  items-center
                  cursor-pointer
                  ${
                    isToggled
                      ? "bg-black text-white"
                      : "bg-[#F0F0F0] text-[#060ebb]"
                  }
                `}
                onClick={handleToggle}
              >
                <motion.h1
                  className="mr-6 md:mr-9 text-center"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;