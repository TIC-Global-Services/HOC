import React, { useEffect, useRef } from "react";
import gsap from "gsap";


import GridOverlay from "../../GridOverlay";
import evolutionImg from "../../../assets/client/gopalan/heroImg2.png";

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
    <div className="h-screen w-full relative overflow-visible">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"/>

        {/* Grid */}
      <GridOverlay
            color="0,0,0"
            opacity={0.15}
            size={100}
            position="99px 0px"
          />

      {/* CONTENT */}
      <div className="relative w-full h-full">

        {/* TOP LEFT */}
        <div
          ref={addIconRef}
          data-speed="0.3"
          data-rotate="0"
          className="absolute"
          style={{
            top: "10%",
            left: "0%",
          }}
        >
          <img
            src={evolutionImg}
            alt=""
            className="w-[clamp(60px,10vw,190px)]"
          />
        </div>

        {/* RIGHT BOTTOM TEXT */}
        <div
          className="absolute text-right"
          style={{
            bottom: "10%",
            right: "10%",
          }}
        >
          <p className="jost uppercase font-[500] text-black tracking-tight leading-[130%] text-[clamp(14px,3vw,60px)]">
            MODERN LEGACY & REFINED STYLE
          </p>
        </div>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center px-[5%]">
          <div className="max-w-[70%] text-start space-y-[2%]">

            <h2 className="salo text-[#E96428] uppercase leading-none text-[clamp(28px,8vw,150px)]">
                Vision Driven <br /> Legacy Built
            </h2>

            <p className="jost font-[500] text-black tracking-tight leading-[140%] text-[clamp(14px,2vw,26px)] ">
             Timeless craftsmanship meets contemporary vision. <br /> Designed for those who value legacy, precision, and progress.
            </p>

          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="absolute top-0 left-0 w-full h-[5%] bg-[#E96428]" />
    </div>
  );
};

export default Section2;