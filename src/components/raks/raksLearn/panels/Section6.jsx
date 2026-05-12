import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import leftImg from "../../../../assets/client/raks/img/panel5.png";
import topRightImg from "../../../../assets/client/raks/img/panel6Left.png";
import centerImg from "../../../../assets/client/raks/img/panel11.png";
import pinImg from "../../../../assets/client/raks/img/heroImg1.png";
import pinImg2 from "../../../../assets/client/raks/img/heroImg2.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import GridOverlay from "../../../GridOverlay";

const Section6 = () => {
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

        setX(velocity * speed * 3);
        setY(velocity * speed * 0.6);
        setR(baseRotate + velocity * speed * 0.5);
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      className="relative h-screen flex overflow-hidden"
    >

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full h-full">

      {/* LEFT */}
      <div className="aspect-[9/16] h-full overflow-hidden" style={{ width: "40vw" }}>
        <img
          src={leftImg}
          alt=""
          className="w-full h-full aspect-[9/16] object-cover"
        />
      </div>

      {/* RIGHT */}
      <div className="relative h-full" style={{ width: "100vw" }}>

        {/* HEADING */}
        <div className="absolute" style={{ top: "5vh", left: "8vw" }}>
          <h2 className="salo uppercase text-black leading-none tracking-tight"
            style={{ fontSize: "clamp(40px,20vh,120px)" }}>
            Learn Beyond Limits
          </h2>
        </div>

        {/* PARAGRAPH */}
        <div className="absolute text-start"
          style={{ top: "24vh", left: "8vw", maxWidth: "650px" }}>
          <p className="jost text-black"
            style={{ fontSize: "clamp(14px,4vh,24px)", lineHeight: "120%" }}>
            From academics to arts and sports, every talent finds its place. A balanced approach to learning, creativity, and growth. Nurturing skills beyond the classroom for a brighter future.
          </p>
        </div>

        {/* TOP RIGHT IMAGE */}
        <div
          className="absolute"
          style={{
            top: "30%",
            left: "80%",
            transform: "translate(-50%, -50%) rotate(-10deg)",
          }}
        >
          {/* PIN */}
          <img
            ref={addIconRef}
            data-speed="0.6"
            data-rotate="-30"
            src={pinImg2}
            alt="icon"
            className="absolute z-10"
            style={{
              top: "0%",
              left: "-34%",
              width: "clamp(40px,20vh,250px)",
            }}
          />

          {/* IMAGE */}
          <img
            ref={addIconRef}
            data-speed="0.4"
            data-rotate="-8"
            src={topRightImg}
            alt="icon"
            className="object-contain"
            style={{
              width: "clamp(80px,40vh,350px)",
            }}
          />
        </div>

        {/* CENTER IMAGE */}
        <div
          className="absolute"
          style={{
            top: "70%",
            left: "40%",
            transform: "translate(-50%, -50%) rotate(-10deg)",
          }}
        >
          {/* PIN */}
          <img
            ref={addIconRef}
            data-speed="0.7"
            data-rotate="-30"
            src={pinImg}
            alt="icon"
            className="absolute z-10"
            style={{
              top: "-8%",
              left: "-15%",
              width: "clamp(40px,20vh,200px)",
            }}
          />

          {/* MAIN */}
          <img
            ref={addIconRef}
            data-speed="0.5"
            data-rotate="-10"
            src={centerImg}
            alt="icon"
            className="object-contain"
            style={{
              width: "clamp(200px,50vh,500px)",
            }}
          />
        </div>

        {/* BOTTOM TEXT */}
        <h3
          className="salo uppercase tracking-tight text-start leading-none text-[#000085] absolute"
          style={{
            bottom: "0vh",
            right: "14vw",
            fontSize: "clamp(30px,20vh,150px)",
          }}
        >
          Curious <br /> Mind
        </h3>

      </div>
      </div>
    </section>
  );
};

export default Section6;