import React, { useEffect, useRef } from "react";
import emPowerImg from "../../../../assets/client/raks/img/panel2.png";
import viVidImg from "../../../../assets/client/raks/img/heroImg1.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import gsap from "gsap";

const Section3 = () => {
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
    <section className="h-screen flex flex-shrink-0 relative overflow-visible">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* LEFT IMAGE */}
      <div className="w-1/2 h-full md:ml-[10%] relative overflow-visible">
        <img
          src={emPowerImg}
          alt="visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-[50%] h-full flex flex-col items-center justify-center px-[clamp(20px,4vw,80px)] text-center relative z-10">
        <p
          className="jost text-black leading-[120%] text-start font-[500] tracking-tight
      text-[clamp(16px,4vw,60px)]"
        >
          "Empowering Voices. <br /> Inspiring Minds. <br /> Shaping The
          Future."
        </p>

        <div ref={addIconRef} data-speed="0.5" data-rotate="-12">
          <img
            src={viVidImg}
            alt="icon"
            className="object-contain md:mt-[10%] -rotate-12"
            style={{ width: "clamp(60px,20vw,650px)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
