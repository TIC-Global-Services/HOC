import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../../assets/client/padlr/img/checkBg.png";
import viVidImg from "../../../assets/client/raks/img/heroImg1.png";
import innocenceImg from "../../../assets/client/raks/img/heroImg3.png";
import playfulImg from "../../../assets/client/raks/img/heroImg2.png";

const MobRaksSec2 = () => {
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

        {/* TOP Image*/}
        <img
          ref={addIconRef}
          data-speed="0.3"
          data-rotate="-12"
          src={viVidImg}
          className="absolute top-[20%] left-[5%] w-[150px] -rotate-12"
        />

        {/* MIDDLE Image */}
        <img
          ref={addIconRef}
          data-speed="0.5"
          src={innocenceImg}
          className="absolute top-[10%] right-[5%] w-[150px]"
        />

        {/* BOTTOM Image */}
        <img
          ref={addIconRef}
          data-speed="0.7"
          data-rotate="-25"
          src={playfulImg}
          className="absolute bottom-[15%] right-[5%] w-[150px] rotate-[20deg]"
        />

        {/* CENTER CONTENT */}
        <div
          className="absolute px-5"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
          }}
        >
          <div className="flex flex-col gap-8 text-start">
            {/* HEADING */}
            <h2 className="salo text-[#000085] uppercase leading-none text-[50px]">
              PURPOSEFUL <br /> LEARNING
            </h2>

            {/* DESCRIPTION */}
            <p className="jost font-[500] text-black/40 text-[16px] leading-[100%]">
              Shaped through curiosity and guided exploration, 
            every experience nurtures growth and understanding.<br />
            A thoughtful blend of creativity.
            </p>

            {/* TAGLINE */}
            <p className="jost uppercase text-black text-[22px] leading-[100%] tracking-tight font-[500]">
              CURIOUS MINDS & LEARNING <br /> REDEFINED
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobRaksSec2;
