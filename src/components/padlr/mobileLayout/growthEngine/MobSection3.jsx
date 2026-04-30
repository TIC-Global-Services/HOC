import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import visualImg from "../../../../assets/client/padlr/img/visualImg.png";
import spinIcon from "../../../../assets/client/padlr/img/heroImg1.png";
import palatteImg from "../../../../assets/client/padlr/img/courtImg2.png";
import attachIcon from "../../../../assets/client/padlr/img/attachIcon.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobSection3 = () => {
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

        setX(velocity * speed * 3);
        setY(velocity * speed * 0.6);
        setR(baseRotate + velocity * speed * 0.5);
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative w-full h-screen bg-white overflow-visible">

      {/* ─── TOP  ─── */}
      <div
        className="absolute top-0 left-0 w-full h-[50vh]"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundPosition: "center",
        }}
      >

        {/* LEFT IMAGE */}
        <img
          src={visualImg}
          alt="visual"
          className="absolute left-0 top-[30%] -translate-y-1/2 w-[60%] object-contain"
        />

        {/* RIGHT TEXT */}
        <div className="absolute right-[2%] top-[10%] max-w-[140px]">
          <p className="jost text-start capitalize text-black leading-[120%] text-[13px]">
            Maintains visual balance with neutral tones inspired by real court
            elements. Communicates precision and modernity through a
            distinctive, high-impact typeface
          </p>
        </div>

        {/* SPIN ICON */}
        <img
          src={spinIcon}
          alt="icon"
          className="absolute right-[10%] top-[40%] w-[60px]"
        />

      </div>

      {/* ─── BOTTOM  ─── */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-white">

        {/* CARD */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%]">
          <img
            src={attachIcon}
            alt="pin"
            className="absolute top-[0%] left-[-15%] w-[20%] z-[30]"
          />

          <img
            src={palatteImg}
            alt="palette"
            className="max-w-full rotate-[-10deg]"
          />
        </div>

        {/* STRIP */}
        <div className="absolute bottom-0 left-0 w-full h-[20px] bg-[#0606BC]" />
      </div>
    </section>
  );
};

export default MobSection3;
