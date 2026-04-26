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
    <section
      className=" h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LEFT IMAGE */}
      <div
        className="absolute"
        style={{
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <img
          src={brandImg}
          alt=""
          style={{
            width: "clamp(260px,40vw,640px)",
          }}
        />
      </div>

      {/* RIGHT BLUE PANEL */}
      <div
        className="absolute"
        style={{
          right: 0,
          top: 0,
          height: "100%",
          width: "clamp(28%,30%,32%)",
          backgroundColor: "#8FC4E9",
        }}
      />

      {/* BRAND TEXT */}
      <div
        className="absolute z-20 text-start"
        style={{
          top: "50%",
          right: "11%",
          transform: "translateY(-50%)",
        }}
      >
        <div style={{ lineHeight: "0.9" }}>
          <div>
            <span
              className="salo text-[#8FC4E9]"
              style={{ fontSize: "clamp(80px,12vw,150px)" }}
            >
              B
            </span>
            <span
              className="salo text-white"
              style={{ fontSize: "clamp(80px,12vw,150px)" }}
            >
              RAND
            </span>
          </div>

          <div>
            <span
              className="salo text-[#8FC4E9]"
              style={{ fontSize: "clamp(80px,12vw,150px)" }}
            >
              V
            </span>
            <span
              className="salo text-white"
              style={{ fontSize: "clamp(80px,12vw,150px)" }}
            >
              OICE
            </span>
          </div>
        </div>
      </div>

      {/* BADGE */}
      <div
        ref={badgeRef}
        className="absolute z-20"
        style={{
          left: "50%",
          bottom: "8%",
          transform: "translateX(-50%)",
          willChange: "transform",
        }}
      >
        <img
          src={circleBadge}
          alt=""
          style={{
            width: "clamp(120px,12vw,240px)",
          }}
        />
      </div>
    </section>
  );
}
