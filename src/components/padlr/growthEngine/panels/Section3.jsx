import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import visualImg from "../../../../assets/client/padlr/img/visualImg.png";
import spinIcon from "../../../../assets/client/padlr/img/heroImg1.png";
import palatteImg from "../../../../assets/client/padlr/img/courtImg2.png";
import attachIcon from "../../../../assets/client/padlr/img/attachIcon.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section3 = () => {
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const addIconRef = (el) => {
    if (el) iconRefs.current.push(el);
  };

  useEffect(() => {
    const qs = iconRefs.current.map((el) => ({
      el,
      setX: gsap.quickTo(el, "x", { duration: 1, ease: "power3.out" }),
      setY: gsap.quickTo(el, "y", { duration: 1, ease: "power3.out" }),
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
    <section className="relative h-screen flex bg-white overflow-hidden">
      {/* LEFT */}
      <div className="relative w-[40%] h-full">
        <img
          src={visualImg}
          alt="visual"
          className="absolute inset-0 left-0 w-full h-full object-contain object-[top]"
        />
      </div>

      {/* RIGHT */}
      <div className="w-[60%] h-full flex flex-col justify-end items-center px-[4%] py-[4%]">
          {/* TOP ICON */}
          <div
            ref={addIconRef}
            data-speed="0.8"
            data-rotate="0"
            className="flex justify-end"
            style={{ willChange: "transform" }}
          >
            <img
              src={spinIcon}
              alt="icon"
              className="w-[clamp(60px,6vw,110px)] object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-[80%]">
            <p className="jost text-start capitalize font-[500] text-black tracking-tight leading-[130%] text-[clamp(14px,2vw,26px)]">
              Maintains visual balance with neutral tones inspired by real court
              elements. Communicates precision and modernity through a
              distinctive, high-impact typeface
            </p>
          </div>

          {/* BOTTOM IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              {/* PIN */}
              <img
                src={attachIcon}
                alt="pin"
                className="absolute z-10"
                style={{
                  top: "-10%",
                  left: "-20%",
                  width: "clamp(28px,2.5vw,55px)",
                }}
              />

              {/* MAIN IMAGE */}
              <img
                src={palatteImg}
                alt="palette"
                className="object-contain"
                style={{
                  width: "clamp(180px,10vw,300px)",
                  transform: "rotate(-12deg)",
                }}
              />
            </div>
          </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#0606BC]" />
    </section>
  );
};

export default Section3;
