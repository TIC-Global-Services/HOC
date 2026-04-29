import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import leftImg from "../../../assets/client/raks/img/panel3.png";
import innocenceCallouts from "../../../assets/client/raks/img/heroImg3.png";
import learnCallouts from "../../../assets/client/raks/img/raksLearn.png";
import viVidCallouts from "../../../assets/client/raks/img/heroImg1.png";
import pragmaCallouts from "../../../assets/client/raks/img/heroImg4.png";
import grid from "../../../assets/client/padlr/img/checkBg.png";

const MobRaksSec4 = () => {
  const iconRefs = useRef([]);

  const addIconRef = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
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
    <section
      className="w-full flex flex-col"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full h-[50vh] relative">
        <img
          src={leftImg}
          alt="visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ─── BOTTOM CONTENT (SAME LAYOUT) ─── */}
      <div className="relative w-full h-[40vh] flex items-center justify-center px-5">

        {/* CENTER TEXT */}
        <div className="text-start max-w-[300px] space-y-4">
          <h2 className="salo text-black uppercase leading-none text-[30px]">
            Where Curiosity Meets a <br /> New Way of  Learning
          </h2>

          <p className="jost text-black/40 leading-[120%] tracking-tight text-[16px]">
            “At RAKS Pallikkoodam, every student is nurtured to grow with
            confidence, curiosity, and creativity—empowered to learn,
            explore, and shine every single day.”
          </p>
        </div>

        {/* TOP LEFT */}
        <img
          ref={addIconRef}
          data-speed="0.4"
          src={innocenceCallouts}
          className="absolute top-4 left-4 w-[70px]"
        />

        {/* TOP RIGHT */}
        <img
          ref={addIconRef}
          data-speed="0.6"
          data-rotate="-6"
          src={viVidCallouts}
          className="absolute top-4 right-4 w-[80px]"
        />

        {/* BOTTOM LEFT */}
        <img
          ref={addIconRef}
          data-speed="0.8"
          data-rotate="-12"
          src={pragmaCallouts}
          className="absolute bottom-2 left-[-10px] w-[110px]"
        />

        {/* BOTTOM RIGHT */}
        <img
          ref={addIconRef}
          data-speed="0.7"
          src={learnCallouts}
          className="absolute bottom-4 right-4 w-[100px]"
        />

      </div>

        {/* BOTTOM STRIP */}
        <div className="w-full h-[20px] bg-[#FFCEC8]" />


    </section>
  );
};

export default MobRaksSec4;