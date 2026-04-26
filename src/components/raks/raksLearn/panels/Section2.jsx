import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import viVidImg from "../../../../assets/client/raks/img/heroImg1.png";
import innocenceImg from "../../../../assets/client/raks/img/heroImg3.png";
import playfulImg from "../../../../assets/client/raks/img/heroImg2.png";
import raksCenterImg from "../../../../assets/client/raks/img/raksInstituion.png";

const Section2 = () => {
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
    <div className="relative h-screen w-full overflow-visible">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CONTENT */}
      <div className="relative w-full h-full">

        {/* TOP LEFT */}
        <div
          ref={addIconRef}
          data-speed="0.5"
          data-rotate="-12"
          className="absolute"
          style={{
            top: "5vh",
            left: "1vw",
            width: "clamp(60px,18vw,300px)",
            transform: "rotate(-12deg)",
          }}
        >
          <img src={viVidImg} className="w-full object-contain" />
        </div>

        {/* TOP RIGHT */}
        <div
          ref={addIconRef}
          data-speed="0.5"
          data-rotate="-6"
          className="absolute"
          style={{
            top: "5vh",
            right: "10vw",
            width: "clamp(60px,18vw,300px)",
            transform: "rotate(-6deg)",
          }}
        >
          <img src={innocenceImg} className="w-full object-contain" />
        </div>

        {/* CENTER RIGHT IMAGE */}
        <div
          className="absolute"
          style={{
            top: "50%",
            right: "-10vw",
            transform: "translateY(-50%)",
            width: "clamp(120px,20vw,500px)",
          }}
        >
          <img src={raksCenterImg} className="w-full object-contain overflow-visible" />
        </div>

        {/* BOTTOM LEFT */}
        <div
          ref={addIconRef}
          data-speed="0.7"
          className="absolute"
          style={{
            bottom: "5vh",
            left: "5vw",
            width: "clamp(60px,18vw,300px)",
          }}
        >
          <img src={playfulImg} className="w-full object-contain" />
        </div>

        {/* RIGHT BOTTOM TEXT */}
        <div
          className="absolute text-start"
          style={{
            bottom: "0vh",
            right: "-5vw",
           
          }}
        >
          <p
            className="jost uppercase font-[500] text-black"
            style={{
              fontSize: "clamp(14px,3.5vw,50px)",
              lineHeight: "130%",
            }}
          >
            CURIOUS MINDS & LEARNING <br /> REDEFINED
          </p>
        </div>

        {/* CENTER CONTENT */}
        <div
          className="absolute text-start"
          style={{
            top: "50%",
            left: "30vw",
            transform: "translateY(-50%)",
            maxWidth: "40vw",
          }}
        >
          <h2
            className="salo text-[#000085] uppercase leading-none"
            style={{ fontSize: "clamp(40px,10vw,150px)" }}
          >
            PURPOSEFUL <br /> LEARNING
          </h2>

          <p
            className="jost text-black tracking-tight mt-4"
            style={{
              fontSize: "clamp(14px,1.8vw,26px)",
              lineHeight: "140%",
            }}
          >
            Shaped through curiosity and guided exploration, 
            every experience nurtures growth and understanding. 
            A thoughtful blend of creativity.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Section2;