import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import topRightImg from "../../../assets/client/raks/img/panel6Left.png";
import centerImg from "../../../assets/client/raks/img/pallikoodam.png";
import pinImg from "../../../assets/client/raks/img/heroImg1.png";
import pinImg2 from "../../../assets/client/raks/img/heroImg2.png";
import grid from "../../../assets/client/padlr/img/checkBg.png";

const MobRaksSec7 = () => {
  const iconRefs = useRef([]);

  const addIconRef = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  useEffect(() => {
    const qs = iconRefs.current.map((el) => ({
      setY: gsap.quickTo(el, "y", { duration: 0.8 }),
      setR: gsap.quickTo(el, "rotation", { duration: 1 }),
    }));

    let lastScrollY = window.scrollY;
    let velocity = 0;
    let raf;

    const tick = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      velocity += (delta - velocity) * 0.15;

      qs.forEach(({ setY, setR }) => {
        setY(velocity * 0.4);
        setR(velocity * 0.2);
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
     className="w-full min-h-[100dvh] flex flex-col items-center text-center px-5 py-6 gap-10"
  style={{
    backgroundImage: `url(${grid})`,
    backgroundSize: "cover",
  }}
    >

      {/* ─── TOP TEXT ─── */}
      <div className="max-w-[320px] text-start pt-[20%]">
        <h2 className="salo text-black text-[30px] uppercase tracking-tight leading-[30px] mb-3">
          Learn Beyond Limits
        </h2>

        <p className="jost text-black/50 text-[16px] leading-[16px] tracking-tight">
          From academics to arts and sports, every talent finds its place. A balanced approach to learning, creativity, and growth.Nurturing skills beyond the classroom for a brighter future.
        </p>
      </div>

      {/* ─── CENTER IMAGE ─── */}
      <div className="relative flex justify-center pt-[10%]">

        {/* PIN */}
        <img
          ref={addIconRef}
          src={pinImg}
          className="absolute top-8 left-2 w-[60px] z-[30]"
        />

        {/* IMAGE */}
        <img
          src={centerImg}
          className="w-[80%] rotate-[-10deg]"
        />

      </div>

      {/* ─── BOTTOM HEADING ─── */}
      <div className="flex justify-start self-start pt-[5%]">
      <h3 className="salo text-start text-[#000085] text-[50px] uppercase leading-none">
        Curious <br /> Mind
      </h3>
      </div>

      {/* ─── RIGHT IMAGE ─── */}
      <div className="relative justify-end self-end">

        {/* PIN */}
        <img
          ref={addIconRef}
          src={pinImg2}
          className="absolute -top-4 -left-6 w-[60px] z-[30] rotate-[-10deg]"
        />

        {/* IMAGE */}
        <img
          src={topRightImg}
          className="w-[150px]  rotate-[-10deg]"
        />

      </div>

    </section>
  );
};

export default MobRaksSec7;