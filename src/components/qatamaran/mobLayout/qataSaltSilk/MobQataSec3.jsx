import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import qataLeftImg from "../../../../assets/client/qatamaran/qataLeftImg.png";
import treeIcon from "../../../../assets/client/qatamaran/heroFloat2.png";

const MobQataSec3 = () => {
  const iconRef = useRef(null);

  useEffect(() => {
    const el = iconRef.current;

    const setY = gsap.quickTo(el, "y", {
      duration: 0.8,
      ease: "power3.out",
    });

    const setR = gsap.quickTo(el, "rotation", {
      duration: 1,
      ease: "power3.out",
    });

    let lastScrollY = window.scrollY;
    let velocity = 0;
    let raf;

    const tick = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      velocity += (delta - velocity) * 0.15;

      setY(velocity * 0.6);     
      setR(velocity * 0.3);      

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="w-full h-[90vh] flex flex-col overflow-hidden">

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full h-[50vh]">
        <img
          src={qataLeftImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ─── CENTER CONTENT ─── */}
      <div className="w-full h-[40vh] flex flex-col items-center justify-center px-5 py-10 gap-6">

        {/* TEXT */}
        <p className="jost text-black text-start font-[500] text-[20px] leading-[140%] tracking-tight capitalize max-w-[320px]">
          "Honoring Heritage refining craft. <br /> defining modern elegance."
        </p>

        {/* ICON (ANIMATED) */}
        <div ref={iconRef} className="w-[120px]">
          <img src={treeIcon} alt="icon" className="w-full object-contain" />
        </div>

      </div>

    </section>
  );
};

export default MobQataSec3;