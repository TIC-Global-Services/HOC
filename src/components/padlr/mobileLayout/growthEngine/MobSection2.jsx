import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../../../assets/client/mobBg.png";
import springImg from "../../../../assets/client/padlr/img/heroImg3.png";
import canImg from "../../../../assets/client/padlr/img/heroImg4.png";
import batImg from "../../../../assets/client/padlr/img/heroImg2.png";

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
        <div className="absolute inset-0 flex items-center left-[8%] px-5">
          <div className="w-full text-left space-y-6">
            {/* HEADING */}
            <h2 className="salo text-[#0606BC] uppercase leading-[0.95] text-[clamp(32px,14vw,50px)]">
              Performance <br /> Driven
            </h2>

            {/* TEXT */}
            <p className="jost font-[500] text-black text-[clamp(13px,4.5vw,16px)] max-w-[300px] leading-[1] tracking-[-0.02em]">
              Move Better Every Day. Designed for Daily Motion, engineered for
              Performance built for Strength & Balance.
            </p>

            {/* BOTTOM TEXT */}
            <p className="jost uppercase text-black tracking-tight text-[clamp(18px,5vw,25px)] font-[500] leading-[1.2] pt-2">
              Energy & Experience
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobSection2;
