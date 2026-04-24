import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import viVidImg from "../../../../assets/client/raks/img/heroImg1.png";
import innocenceImg from "../../../../assets/client/raks/img/heroImg3.png";
import playfulImg from "../../../../assets/client/raks/img/heroImg2.png";
import raksCenterImg from "../../../../assets/client/raks/img/raksInstituion.png";

const Section2 = () => {
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const addIconRef = (el) => {
    if (el) iconRefs.current.push(el);
  };

  useEffect(() => {
    const qs = iconRefs.current.map((el) => ({
      el,
      setX: gsap.quickTo(el, "x", { duration: 1, ease: "power3.out" }),
      setY: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
      setR: gsap.quickTo(el, "rotation", { duration: 1, ease: "power3.out" }),
    }));

    let lastScrollY = window.scrollY;
    let velocity = 0;
    let rafId;

    const tick = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      velocity += (delta - velocity) * 0.15;

      qs.forEach(({ el, setX, setY, setR }) => {
        const speed = parseFloat(el.dataset.speed || 0.5);
        const baseRotate = parseFloat(el.dataset.rotate || 0);

        setX(velocity * speed * 4);
        setY(velocity * speed * 0.8);
        setR(baseRotate + velocity * speed * 0.6);
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="h-screen flex-shrink-0 relative overflow-visible">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative w-full h-full max-w-[1600px] mx-auto">
        {/* TOP LEFT (momentum) */}
        <div
          ref={addIconRef}
          data-speed="0.3"
          data-rotate="-12"
          className="absolute top-6 left-6 md:top-10 md:left-10 xl:top-14 xl:left-14"
          style={{ willChange: "transform" }}
        >
          <img
            src={viVidImg}
            alt="icon"
            className="w-[60px] md:w-[90px] xl:w-[180px] 2xl:w-[160px] -rotate-12"
          />
        </div>

        {/* TOP RIGHT */}
        <div
          ref={addIconRef}
          data-speed="0.5"
          data-rotate="-12"
          className="absolute top-6 right-6 md:top-10 md:right-10 xl:top-14 xl:right-14"
          style={{ willChange: "transform" }}
        >
          <img
            src={innocenceImg}
            alt="innocence"
            className="w-[60px] md:w-[90px] xl:w-[180px] 2xl:w-[180px] -rotate-12"
          />
        </div>

        {/* CENTER RIGHT */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-6 md:right-10 xl:-right-[20%]"
        >
          <img
            src={raksCenterImg}
            alt="raks institution"
            className="w-[60px] md:w-[90px] xl:w-[500px] 2xl:w-[500px]"
          />
        </div>

        {/* BOTTOM LEFT (momentum) */}
        <div
          ref={addIconRef}
          data-speed="0.7"
          data-rotate="0"
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 xl:bottom-14 xl:left-14"
          style={{ willChange: "transform" }}
        >
          <img
            src={playfulImg}
            alt="icon"
            className="w-[60px] md:w-[90px] xl:w-[200px] 2xl:w-[180px]"
          />
        </div>

        {/* RIGHT BOTTOM TEXT */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 xl:bottom-20 xl:right-14 text-right">
          <p className="jost uppercase font-[500] text-black text-[14px] md:text-[28px] xl:text-[50px] tracking-tight 2xl:text-[52px] leading-[130%]">
            CURIOUS MINDS & LEARNING REDEFINED
          </p>
        </div>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-[900px] text-start space-y-6">
            <h2
              className="salo text-[#000085] uppercase leading-none"
              style={{ fontSize: "clamp(48px, 10vw, 200px)" }}
            >
              PURPOSEFUL <br /> LEARNING
            </h2>

            <p className="jost text-black font-[500] capitalize text-[14px] md:text-[18px] xl:text-[40px] 2xl:text-[26px] tracking-tight leading-[140%]">
              Shaped through curiosity and guided exploration, every experience
              nurtures growth and understanding. A thoughtful blend of
              creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
