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
        className="absolute top-0 right-0 h-full flex items-center"
        style={{
          width: "clamp(320px,30vw,440px)",
          backgroundColor: "#8FC4E9",
        }}
      >
        {/* TEXT WRAPPER */}
        <div className="relative w-full ">
          {/* BRAND */}
          <div className="relative tracking-normal leading-none">
            {/* B LINE */}
            <div className="relative">
              {/* B outside */}
              <span
                className="absolute left-0 -translate-x-[100%] salo text-[#8FC4E9]"
                style={{ fontSize: "clamp(80px,10vw,140px)" }}
              >
                B
              </span>

              {/* RAND inside */}
              <span
                className="absolute left-0 salo text-white"
                style={{ fontSize: "clamp(80px,10vw,140px)" }}
              >
                RAND
              </span>
            </div>

            {/* V LINE */}
            <div className="relative tracking-normal">
              {/* V outside */}
              <span
                className="absolute left-0 -translate-x-[100%] salo text-[#8FC4E9]"
                style={{ fontSize: "clamp(80px,10vw,140px)" }}
              >
                V
              </span>

              {/* OICE inside */}
              <span
                className="absolute left-0 salo text-white"
                style={{ fontSize: "clamp(80px,10vw,140px)" }}
              >
                OICE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
