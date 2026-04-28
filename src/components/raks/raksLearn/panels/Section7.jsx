import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import leftImg from "../../../../assets/client/raks/img/panel6.png";
import rightImg from "../../../../assets/client/raks/img/panel7.png";
import centerIcon from "../../../../assets/client/raks/img/heroImg2.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section7 = () => {
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

        setX(velocity * speed * 2);   // reduced for subtle effect
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
      className="h-screen flex"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundPosition: "center",
        backgroundColor: "white",
      }}
    >

      {/* LEFT IMAGE */}
      <div className="w-[50vw] h-full relative overflow-hidden">
        <img
          src={leftImg}
          alt="left"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="w-[30vw] h-full flex items-center justify-center px-[clamp(20px,5vw,120px)]">
        <div className="text-center max-w-[500px] space-y-[clamp(16px,2vw,44px)]">

          {/* ICON (animated) */}
          <img
            ref={addIconRef}
            data-speed="0.6"
            data-rotate="0"
            src={centerIcon}
            alt="icon"
            className="mx-auto object-contain"
            style={{ width: "clamp(60px,14vw,200px)" }}
          />

          {/* HEADING */}
          <h2 className="salo text-start uppercase text-black leading-none tracking-tight text-[clamp(40px,10vw,60px)]">
            Creative Play
          </h2>

          {/* PARAGRAPH */}
          <p className="jost text-start text-black leading-[120%] tracking-tight text-[clamp(14px,1.8vw,30px)]">
            Where Little Ideas Turn Into Big Creations A Space to Imagine, Build, and Grow Where Little Ideas Turn Into Big Creations Innovation.
          </p>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-[80vw] h-full relative overflow-hidden">
        <img
          src={rightImg}
          alt="right"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default Section7;