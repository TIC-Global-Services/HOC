import { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import brandImg from "../../../../assets/client/padlr/img/courtPanelImg2.png";
import circleBadge from "../../../../assets/client/padlr/img/heroImg1.png";

export default function Section4() {
  const badgeRef = useRef(null);

  useEffect(() => {
    const el = badgeRef.current;

    const setX = gsap.quickTo(el, "x", { duration: 1, ease: "power3.out" });
    const setY = gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" });
    const setR = gsap.quickTo(el, "rotation", { duration: 1, ease: "power3.out" });

    let lastScrollY = window.scrollY;
    let velocity = 0;
    let rafId;

    const tick = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      velocity += (delta - velocity) * 0.15;

      const speed = 0.5; // control strength
      const baseRotate = 0;

      setX(velocity * speed * 4);
      setY(velocity * speed * 0.8);
      setR(baseRotate + velocity * speed * 0.6);

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className="w-full h-screen relative overflow-hidden flex"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LEFT IMAGE */}
      <div className="absolute left-[6%] md:left-[8%] xl:left-[0%] top-1/2 -translate-y-1/2">
        <img
          src={brandImg}
          alt="brand"
          className="w-[260px] md:w-[380px] xl:w-[640px] 2xl:w-[640px] object-contain"
        />
      </div>

      {/* RIGHT BLUE PANEL */}
      <div className="absolute right-0 top-0 h-full w-[28%] md:w-[30%] xl:w-[32%] bg-[#8FC4E9] z-10" />

      {/* BRAND VOICE TEXT */}
      <div className="absolute right-0 top-1/2 -translate-x-[75%] -translate-y-1/2 z-20 flex flex-col leading-none">
        <div className="flex items-baseline">
          <span className="salo text-[#8FC4E9]" style={{ fontSize: "clamp(80px, 14vw, 150px)" }}>B</span>
          <span className="salo text-white" style={{ fontSize: "clamp(80px, 14vw, 150px)" }}>RAND</span>
        </div>

        <div className="flex items-baseline">
          <span className="salo text-[#8FC4E9]" style={{ fontSize: "clamp(80px, 14vw, 150px)" }}>V</span>
          <span className="salo text-white" style={{ fontSize: "clamp(80px, 14vw, 150px)" }}>OICE</span>
        </div>
      </div>

      {/* CIRCLE BADGE (momentum added) */}
      <div
        ref={badgeRef}
        className="absolute left-1/2 bottom-[6%] md:bottom-[8%] xl:bottom-[10%] -translate-x-[10%] z-20"
        style={{ willChange: "transform" }}
      >
        <img
          src={circleBadge}
          alt="circle badge"
          className="w-[120px] md:w-[160px] xl:w-[200px] 2xl:w-[240px] object-contain"
        />
      </div>
    </div>
  );
}