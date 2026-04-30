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
      className="w-full h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      {/* TITLE */}
      <h1
        className="salo tracking-wider text-[#8FC4E9] absolute"
        style={{
          top: "10%",
          left: "5%",
          fontSize: "clamp(60px,12vw,200px)",
          lineHeight: "1",
        }}
      >
        TYPEFACE
      </h1>

      {/* TOP IMAGE */}
      <div
        ref={addIconRef}
        data-speed="0.35"
        data-rotate="0"
        className="absolute"
        style={{
          top: "0%",
          right: "10%",
          width: "clamp(180px,20vw,360px)",
          willChange: "transform",
        }}
      >
        <img src={topImg} alt="" className="w-full" />
      </div>

      {/* LEFT IMAGE */}
      <div
        ref={addIconRef}
        data-speed="0.4"
        data-rotate="0"
        className="absolute"
        style={{
          bottom: "0%",
          left: "0%",
          width: "clamp(180px,20vw,360px)",
          willChange: "transform",
        }}
      >
        <img src={delightImg} alt="" className="w-full" />
      </div>

      {/* TEXT */}
      <div
        className="jost text-start capitalize text-black absolute"
        style={{
          bottom: "5%",
          left: "35%",
          width: "35%",
          fontSize: "clamp(14px,2vw,26px)",
          lineHeight: "150%",
        }}
      >
        The typography system balances bold expression with refined clarity—
        where the primary typeface delivers a strong, modern identity, and the
        secondary typeface ensures{" "}
        <span
          className="salo text-[#8FC4E9]"
          style={{ fontSize: "clamp(18px,3vw,40px)" }}
        >
          versatility and seamless
        </span>{" "}
        readability across all brand touchpoints.
      </div>

      {/* RIGHT ICON */}
      <div
        ref={addIconRef}
        data-speed="0.6"
        data-rotate="-8"
        className="absolute"
        style={{
          bottom: "2%",
          right: "5%",
          width: "clamp(160px,14vw,300px)",
          willChange: "transform",
        }}
      >
        <img src={paddle} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Section3;
