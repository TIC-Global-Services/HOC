import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import topLeftImg from "../../../../assets/client/qatamaran/coromandelCoast.png";
import bottomLeftImg from "../../../../assets/client/qatamaran/heroFloat1.png";
import topRightImg from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobQataSec2 = () => {
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
          src={topLeftImg}
          className="absolute top-[15%] left-[5%] w-[110px] -rotate-12"
        />

        {/* MIDDLE Image */}
        <img
          ref={addIconRef}
          data-speed="0.5"
          data-rotate="-12"
          src={topRightImg}
          className="absolute top-[65%] right-[5%] w-[110px] -rotate-12"
        />

        {/* BOTTOM Image */}
        <img
          ref={addIconRef}
          data-speed="0.7"
          data-rotate="-12"
          src={bottomLeftImg}
          className="absolute bottom-[8%] left-[5%] w-[110px] -rotate-12"
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
            <h2 className="salo text-[#1E382D] uppercase leading-none text-[50px]">
              Tide bound <br /> Tailoring
            </h2>

            {/* DESCRIPTION */}
            <p className="jost font-[500] text-black/40 text-[16px] leading-[100%]">
              Classic techniques meet contemporary expression. Designed for the
              man who moves with quiet confidence.
            </p>

            {/* TAGLINE */}
            <p className="jost uppercase text-black text-[22px] leading-[100%] tracking-tight font-[500]">
              Modern Gentlemen & <br /> Timeless Style
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobQataSec2;
