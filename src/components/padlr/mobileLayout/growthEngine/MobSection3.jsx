import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import visualImg from "../../../../assets/client/padlr/img/visualImg.png";
import spinIcon from "../../../../assets/client/padlr/img/heroImg1.png";
import palatteImg from "../../../../assets/client/padlr/img/courtImg2.png";
import attachIcon from "../../../../assets/client/padlr/img/attachIcon.png";

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
    <section className="w-full h-auto bg-white flex flex-col justify-between py-[6%]">

      {/* TOP ROW */}
      <div className="flex items-center justify-between"
      >

        {/* LEFT IMAGE */}
        <div className="w-[55%]">
          <img
            src={visualImg}
            alt="visual"
            className="w-[80%] max-w-none object-contain"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="w-[45%]">
          <p className="jost text-start text-black leading-[130%] text-[13px]">
            Maintains visual balance with neutral tones inspired by real court
            elements. Communicates precision and modernity through a
            distinctive, high-impact typeface
          </p>
        </div>
      </div>

      {/* CIRCLE ICON BELOW TEXT */}
      <div
        ref={addIconRef}
        data-speed="0.8"
        data-rotate="0"
        className="flex justify-center mt-[6%]"
      >
        <img
          src={spinIcon}
          alt="icon"
          className="w-[18%] object-contain"
        />
      </div>

      {/* BOTTOM CARD */}
      <div className="flex justify-center mt-[8%]">
        <div className="relative w-[60%]">

          {/* PIN */}
          <img
            src={attachIcon}
            alt="pin"
            className="absolute"
            style={{
              top: "-12%",
              left: "-10%",
              width: "20%",
            }}
          />

          {/* CARD IMAGE */}
          <img
            src={palatteImg}
            alt="palette"
            className="w-full object-contain"
            style={{ transform: "rotate(-10deg)" }}
          />
        </div>
      </div>

      {/* BOTTOM STRIP */}
  <div className="w-full h-[20px] bg-[#0606BC] mt-[6%]" />

    </section>
  );
};

export default MobSection3;