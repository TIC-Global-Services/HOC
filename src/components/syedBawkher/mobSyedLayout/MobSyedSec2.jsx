import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../../assets/client/padlr/img/checkBg.png";
import elegantPairImg from "../../../assets/client/syedBawkher/img/elegantPairImg.png";
import syedCircleImg from "../../../assets/client/syedBawkher/img/heroImg4.png";
import texturalImg from "../../../assets/client/syedBawkher/img/heroImg3.png";
import MobSyedSec3 from "./MobSyedSec3";

const MobSyedSec2 = () => {
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
          src={syedCircleImg}
          className="absolute top-[15%] left-[5%] w-[150px] -rotate-12"
        />

        {/* MIDDLE Image */}
        <img
          ref={addIconRef}
          data-speed="0.5"
          src={texturalImg}
          className="absolute top-[10%] right-[5%] w-[150px]"
        />

        {/* BOTTOM Image */}
        <img
          ref={addIconRef}
          data-speed="0.7"
          src={elegantPairImg}
          className="absolute bottom-[15%] right-[5%] w-[200px]"
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
            <h2 className="salo text-[#262666] uppercase leading-none text-[50px]">
              PRECISION <br /> TAILORED
            </h2>

            {/* DESCRIPTION */}
            <p className="jost font-[500] text-black/40 text-[16px] leading-[100%]">
              Crafted through generations of expertise, each piece reflects precision and purpose. A seamless blend of heritage and refinement, tailored for the modern gentleman.
            </p>

            {/* TAGLINE */}
            <p className="jost uppercase text-black text-[22px] leading-[100%] tracking-tight font-[500]">
              DETAIL & DISCIPLINE
            </p>
          </div>
        </div>
      </section>

      {/* Section */}
      <MobSyedSec3 />
    </>
  );
};

export default MobSyedSec2;
