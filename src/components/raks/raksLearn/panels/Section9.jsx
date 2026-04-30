import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import rightImg from "../../../../assets/client/raks/img/panel10.png";
import topRightIcon from "../../../../assets/client/raks/img/heroImg1.png";
import bottomLeftIcon from "../../../../assets/client/raks/img/heroImg3.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section9 = () => {
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
      className="relative h-screen overflow-hidden flex"
      style={{
        width: "100vw",
        backgroundImage: `url(${grid})`,
        backgroundPosition: "center",
        backgroundColor: "white",
      }}
    >

      {/* LEFT SIDE */}
      <div
        className="relative h-full flex items-center"
        style={{
          width: "50vw",
          padding: "0 6vw",
        }}
      >

        {/* TEXT */}
        <div className="text-start" style={{ maxWidth: "40vw" }}>
          <h2
            className="salo uppercase text-[#000085] tracking-tight leading-none"
            style={{ fontSize: "clamp(40px,10vw,120px)" }}
          >
            The RAKS Framework
          </h2>

          <p
            className="jost text-black tracking-tight mt-4"
            style={{
              fontSize: "clamp(14px,1.8vw,26px)",
              lineHeight: "120%",
            }}
          >
            A thoughtful approach to shaping young minds through purpose,
            rhythm, and meaningful learning.
          </p>
        </div>

        {/* TOP RIGHT ICON */}
        <img
          ref={addIconRef}
          data-speed="0.6"
          data-rotate="0"
          src={topRightIcon}
          alt="icon"
          className="absolute"
          style={{
            top: "6vh",
            right: "4vw",
            width: "clamp(50px,10vw,150px)",
          }}
        />

        {/* BOTTOM LEFT ICON */}
        <img
          ref={addIconRef}
          data-speed="0.8"
          data-rotate="0"
          src={bottomLeftIcon}
          alt="icon"
          className="absolute"
          style={{
            bottom: "6vh",
            left: "4vw",
            width: "clamp(50px,10vw,150px)",
          }}
        />

      </div>

      {/* RIGHT SIDE */}
      <div className="w-[40vw] -right-[10%]  relative h-full  overflow-hidden">
        <img
          src={rightImg}
          alt=""
          className="w-full h-full aspect-9/16 object-cover"
        />
      </div>

    </section>
  );
};

export default Section9;