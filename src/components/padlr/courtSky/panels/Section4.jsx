import { useEffect, useRef } from "react";
import gsap from "gsap";

import circleBadge from "../../../../assets/client/padlr/img/heroImg1.png";
import GridOverlay from "../../../GridOverlay";

export default function Section4() {
  const badgeRef = useRef(null);

  useEffect(() => {
    const el = badgeRef.current;

    const setX = gsap.quickTo(el, "x", {
      duration: 1,
      ease: "power3.out",
    });

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
    let rafId;

    const tick = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;

      lastScrollY = scrollY;

      velocity += (delta - velocity) * 0.15;

      const speed = 0.5;

      setX(velocity * speed * 4);
      setY(velocity * speed * 0.8);
      setR(velocity * speed * 0.6);

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">

      {/* Grid */}
      <GridOverlay
        color="0,0,0"
        opacity={0.15}
        size={100}
        position="99px 0px"
      />

      {/* RIGHT BLUE PANEL */}
      <div
        className="absolute"
        style={{
          right: 0,
          top: 0,
          height: "100%",
          width: "55%",
          backgroundColor: "#8FC4E9",
        }}
      />

      {/* BRAND TEXT */}
      <div className="absolute inset-0 flex items-center justify-end z-20 pr-[19%]">
        <div style={{ lineHeight: "1", textAlign: "left" }}>
          <div>
            <span
              className="salo text-start text-[#8FC4E9] tracking-wider"
              style={{ fontSize: "clamp(80px,8vw,140px)" }}
            >
              B<span className="text-white">RAND</span>
            </span>
          </div>

          <div>
            <span
              className="salo text-start text-[#8FC4E9] tracking-wider"
              style={{ fontSize: "clamp(80px,8vw,140px)" }}
            >
              V<span className="text-white">OICE</span>
            </span>
          </div>
        </div>
      </div>

      {/* BADGE */}
    <div
      ref={badgeRef}
      className="
        absolute
        left-[60px]
        bottom-[30px]
        w-[180px]
        aspect-square
      "
      style={{
        willChange: "transform",
      }}
    >
      <img
        src={circleBadge}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>

    </section>
  );
}