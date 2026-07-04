import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import GridOverlay from "../../../GridOverlay";

const visualImg = "https://ik.imagekit.io/hoc01/assets/client/padlr/visualImg.png";
const spinIcon = "https://ik.imagekit.io/hoc01/assets/client/padlr/heroImg1.png";
const palatteImg = "https://ik.imagekit.io/hoc01/assets/client/padlr/courtImg2.png";
const attachIcon = "https://ik.imagekit.io/hoc01/assets/client/padlr/attachIcon.png";



const MobSection3 = () => {
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const addIconRef = (el) => {
    if (el) iconRefs.current.push(el);
  };

  useEffect(() => {
    const qs = iconRefs.current.map((el) => ({
      el,
      setX: gsap.quickTo(el, "x", { duration: 1, ease: "power3.out" }),
      setY: gsap.quickTo(el, "y", { duration: 1, ease: "power3.out" }),
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
    <section className="relative w-full h-screen bg-white overflow-visible">
      {/* ─── TOP ─── */}
      <div className="absolute top-0 left-0 w-full h-[50vh] z-10 overflow-hidden">
        {/* GRID */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GridOverlay
            color="0,0,0"
            opacity={0.15}
            size={100}
            position="99px 0px"
          />
        </div>

        {/* LEFT IMAGE */}
        <img
          src={visualImg}
          alt="visual"
          className="absolute left-0 top-[30%] -translate-y-1/2 w-[60%] object-contain z-10"
        />

        {/* RIGHT TEXT */}
        <div className="absolute right-[2%] sm:right-[10%] top-[18%] max-w-[140px] sm:w-full z-10">
          <p className="jost text-start text-black leading-[120%] text-[16px]">
            Maintains visual balance with neutral tones inspired by real court
            elements. Communicates precision and modernity through a
            distinctive, high-impact typeface
          </p>
        </div>

        {/* SPIN ICON */}
        <img
          ref={addIconRef}
          data-speed="0.5"
          data-rotate="0"
          src={spinIcon}
          alt="icon"
          className="absolute right-[10%] top-[75%] w-[80px] z-10"
        />
      </div>

      {/* ─── BOTTOM  ─── */}
      <div className="absolute bottom-0 left-0 w-full h-[55vh] bg-white">
        {/* CARD */}
        <div className="absolute top-[10%] sm:top-[15%] left-1/2 -translate-x-1/2 w-[60%] sm:w-[45%] md:w-[35%] max-w-[350px]">
          <img
            src={attachIcon}
            alt="pin"
            className="absolute top-[0%] left-[-15%] w-[20%] z-[30]"
          />

          <img
            src={palatteImg}
            alt="palette"
            className="w-full h-auto object-contain rotate-[-10deg]"
          />
        </div>

        {/* STRIP */}
        <div className="absolute bottom-0 left-0 w-full h-[20px] bg-[#0606BC]" />
      </div>
    </section>
  );
};

export default MobSection3;
