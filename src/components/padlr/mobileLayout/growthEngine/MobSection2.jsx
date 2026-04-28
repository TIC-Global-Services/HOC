import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../../../assets/client/mobBg.png";
import springImg from "../../../../assets/client/padlr/img/heroImg3.png";
import canImg from "../../../../assets/client/padlr/img/heroImg4.png";
import batImg from "../../../../assets/client/padlr/img/heroImg2.png";
import MobSection3 from "./MobSection3";

const MobSection2 = () => {
  const iconRefs = useRef([]);

  const addIconRef = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  useEffect(() => {
    const qs = iconRefs.current.map((el) => ({
      el,
      setX: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" }),
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

        setX(velocity * speed * 2);
        setY(velocity * speed * 0.5);
        setR(baseRotate + velocity * speed * 0.4);
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* TOP SPRING */}
      <img
        ref={addIconRef}
        data-speed="0.3"
        data-rotate="-12"
        src={springImg}
        className="absolute top-[20%] left-[5%] w-[110px] -rotate-12"
      />

      {/* MIDDLE RIGHT CAN */}
      <img
        ref={addIconRef}
        data-speed="0.5"
        data-rotate="-12"
        src={canImg}
        className="absolute top-[65%] right-[5%] w-[100px] -rotate-12"
      />

      {/* BOTTOM BAT */}
      <img
        ref={addIconRef}
        data-speed="0.7"
        src={batImg}
        className="absolute bottom-[8%] left-[5%] w-[110px]"
      />

      {/* ─── CENTER CONTENT ─── */}
      <div
        className="absolute text-start px-5"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
        }}
      >
        {/* HEADING */}
        <h2 className="salo  text-[#0606BC] uppercase leading-none text-[50px]">
          Performance <br /> Driven
        </h2>

        {/* TEXT */}
        <p className="jost font-[500] text-black text-[16px] leading-[100%] mt-3">
          Move Better Every Day. Designed for Daily Motion, engineered for
          Performance built for Strength & Balance.
        </p>

        {/* BOTTOM TEXT */}
        <p className="jost uppercase text-black text-[25px] font-[500] mt-4">
          Energy & Experience
        </p>
      </div>
    </section>

    {/* Section 3 */}
    <MobSection3 />
    </>
  );
};

export default MobSection2;
