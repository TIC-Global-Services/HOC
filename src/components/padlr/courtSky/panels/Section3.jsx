import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import delightImg from "../../../../assets/client/padlr/img/courtPanelImg4.png";
import topImg from "../../../../assets/client/padlr/img/courtPanelImg3.png";
import paddle from "../../../../assets/client/padlr/img/batIcon.png";

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
    <section
      className="w-full min-h-screen flex justify-center bg-white"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] h-screen flex flex-col justify-between">

        {/* ── TOP SECTION ── */}
        <div className="flex justify-between items-start px-6 md:px-10 xl:px-14 pt-12 xl:pt-16">

          {/* TITLE */}
          <h1
            className="salo text-[#8FC4E9] leading-none tracking-wide"
            style={{ fontSize: "clamp(60px, 10vw, 180px)" }}
          >
            TYPEFACE
          </h1>

          {/* TOP IMAGE (momentum) */}
          <div
            ref={addIconRef}
            data-speed="0.35"
            data-rotate="-2"
            className="w-[180px] md:w-[260px] xl:w-[320px] 2xl:w-[380px]"
            style={{ willChange: "transform" }}
          >
            <img
              src={topImg}
              alt="court"
              className="w-full h-full object-cover "
            />
          </div>

        </div>

        {/* ── BOTTOM SECTION ── */}
        <div className="flex items-center justify-between px-6 md:px-10 xl:px-14 pb-10 xl:pb-14 gap-6 xl:gap-10">

          {/* LEFT IMAGE */}
          <div
            ref={addIconRef}
            data-speed="0.4"
            data-rotate="1"
            className="w-[180px] md:w-[260px] xl:w-[320px] 2xl:w-[360px]"
            style={{ willChange: "transform" }}
          >
            <img
              src={delightImg}
              alt="delight"
              className="w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-[450px] jost text-start capitalize text-black leading-[150%] tracking-tight
            text-[14px] md:text-[18px] xl:text-[22px] 2xl:text-[26px]"
          >
            The typography system balances bold expression with refined clarity—
            where the primary typeface delivers a strong, modern identity, and
            the secondary typeface ensures{" "}
            <span className="salo text-[#8FC4E9] text-[20px] md:text-[28px] xl:text-[34px] 2xl:text-[40px]">
              versatility and seamless
            </span>{" "}
            readability across all brand touchpoints.
          </div>

          {/* RIGHT ICON */}
          <div
            ref={addIconRef}
            data-speed="0.6"
            data-rotate="-5"
            className="w-[160px] md:w-[220px] xl:w-[280px] 2xl:w-[320px]"
            style={{ willChange: "transform" }}
          >
            <img
              src={paddle}
              alt="paddle"
              className="w-full object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Section3;