import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import springImg from "../../../../assets/client/padlr/img/heroImg3.png";
import canImg from "../../../../assets/client/padlr/img/heroImg4.png";
import batImg from "../../../../assets/client/padlr/img/heroImg2.png";

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
    <div className="h-screen w-full relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CONTENT */}
      <div className="relative w-full h-full">

        {/* TOP LEFT */}
        <div
          ref={addIconRef}
          data-speed="0.3"
          data-rotate="-12"
          className="absolute"
          style={{
            top: "10%",
            left: "5%",
          }}
        >
          <img
            src={springImg}
            alt=""
            className="w-[clamp(60px,10vw,190px)] -rotate-12"
          />
        </div>

        {/* RIGHT CENTER */}
        <div
          ref={addIconRef}
          data-speed="0.5"
          data-rotate="-12"
          className="absolute"
          style={{
            top: "25%",
            right: "15%",
          }}
        >
          <img
            src={canImg}
            alt=""
            className="w-[clamp(80px,12vw,280px)] -rotate-12"
          />
        </div>

        {/* BOTTOM LEFT */}
        <div
          ref={addIconRef}
          data-speed="0.7"
          data-rotate="0"
          className="absolute"
          style={{
            bottom: "10%",
            left: "5%",
          }}
        >
          <img
            src={batImg}
            alt=""
            className="w-[clamp(70px,12vw,270px)]"
          />
        </div>

        {/* RIGHT BOTTOM TEXT */}
        <div
          className="absolute text-right"
          style={{
            bottom: "15%",
            right: "10%",
          }}
        >
          <p className="jost uppercase font-[500] text-black tracking-tight leading-[130%] text-[clamp(14px,3vw,60px)]">
            Energy & Experience
          </p>
        </div>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center px-[5%]">
          <div className="max-w-[60%] text-start space-y-[2%]">

            <h2 className="salo text-[#0606BC] uppercase leading-none text-[clamp(28px,8vw,150px)]">
              Performance <br /> Driven
            </h2>

            <p className="jost font-[400] text-black capitalize tracking-tight leading-[140%] text-[clamp(14px,2vw,26px)] max-w-[70%]">
              Move Better Every Day. Designed for Daily Motion, engineered for Performance built for Strength & Balance.
            </p>

          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#0606BC]" />
    </div>
  );
};

export default Section2;