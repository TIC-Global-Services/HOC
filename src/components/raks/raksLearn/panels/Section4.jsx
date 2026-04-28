import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import leftImg from "../../../../assets/client/raks/img/panel3.png";
import innocenceCallouts from "../../../../assets/client/raks/img/heroImg3.png";
import learnCallouts from "../../../../assets/client/raks/img/raksLearn.png";
import viVidCallouts from "../../../../assets/client/raks/img/heroImg1.png";
import pragmaCallouts from "../../../../assets/client/raks/img/heroImg4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section4 = () => {
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
    <section
      className="w-full h-screen flex relative overflow-visible"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LEFT IMAGE */}
      <div className="w-1/2 h-full relative">
        <img
          src={leftImg}
          alt="visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-1/2 h-full relative flex items-center justify-center px-[clamp(20px,5vw,80px)]">

        {/* CENTER TEXT */}
        <div className="text-center max-w-[500px] space-y-[clamp(16px,2vw,30px)]">
          <h2 className="salo text-start text-black uppercase leading-none text-[clamp(18px,2.5vw,40px)]">
            Where Curiosity Meets a New Way of <br /> Learning
          </h2>

          <p className="jost text-start text-black leading-[120%] max-w-[400px] tracking-tight text-[clamp(14px,1.5vw,26px)]">
            “At RAKS Pallikkoodam, every student is nurtured to grow with confidence, curiosity, and 
            creativity—empowered to learn, explore, and shine every single day.”
          </p>
        </div>

        {/* ICONS */}

        {/* TOP LEFT */}
        <img
          ref={addIconRef}
          data-speed="0.4"
          data-rotate="0"
          src={innocenceCallouts}
          alt="icon"
          className="absolute object-contain"
          style={{
            top: "clamp(20px,4vw,60px)",
            left: "clamp(20px,4vw,60px)",
            width: "clamp(50px,12vw,200px)",
          }}
        />

        {/* TOP RIGHT */}
        <img
          ref={addIconRef}
          data-speed="0.6"
          data-rotate="-6"
          src={learnCallouts}
          alt="icon"
          className="absolute object-contain"
          style={{
            top: "clamp(20px,4vw,60px)",
            right: "clamp(20px,4vw,60px)",
            width: "clamp(50px,14vw,200px)",
          }}
        />

        {/* BOTTOM LEFT */}
        <img
          ref={addIconRef}
          data-speed="0.8"
          data-rotate="-12"
          src={viVidCallouts}
          alt="icon"
          className="absolute object-contain"
          style={{
            bottom: "5vh",
            left: "-5vh",
            width: "clamp(50px,18vw,300px)",
          }}
        />

        {/* BOTTOM RIGHT */}
        <img
          ref={addIconRef}
          data-speed="0.7"
          data-rotate="0"
          src={pragmaCallouts}
          alt="icon"
          className="absolute object-contain"
          style={{
            bottom: "clamp(20px,4vw,60px)",
            right: "clamp(20px,4vw,60px)",
            width: "clamp(50px,18vw,300px)",
          }}
        />

      </div>
    </section>
  );
};

export default Section4;