import { useEffect, useRef } from "react";
import gsap from "gsap";

import centerVideo from "../../../../assets/client/qatamaran/Qatamaran_HOC_Website.mov";
import topIcon from "../../../../assets/client/qatamaran/heroFloat1.png";
import bottomIcon from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

export default function Section3() {
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const addIconRef = (el) => {
    if (el) iconRefs.current.push(el);
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

        setX(velocity * speed * 4);
        setY(velocity * speed * 0.8);
        setR(baseRotate + velocity * speed * 0.6);
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      className="w-full h-screen flex text-white"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundColor: "#ffffff",
      }}
    >

      {/* ───── LEFT SIDE ───── */}
      <div className="flex flex-col justify-between
        w-[32vw] min-w-[280px] max-w-[520px]
        py-[clamp(20px,6vh,60px)]
        px-[clamp(16px,3vw,40px)]"
      >

        {/* TOP ICON (momentum) */}
        <div
          ref={addIconRef}
          data-speed="0.4"
          data-rotate="-20"
          style={{
            width: "clamp(80px,10vw,200px)",
            transform: "translateX(clamp(-40px,-6vw,-120px))",
            willChange: "transform",
          }}
        >
          <img
            src={topIcon}
            alt="top"
            className="object-contain w-full"
          />
        </div>

        {/* TEXT */}
        <div className="text-black text-start max-w-[480px]">
          <h2 className="salo uppercase mb-4 leading-[110%]
            text-[clamp(26px,6vh,40px)]">
            Where Heritage Meets Modern Elegance
          </h2>

          <p className="jost leading-[140%] capitalize font-[500]
            text-[clamp(14px,2vh,20px)]">
            At Qatamaran, every piece is thoughtfully crafted to embody timeless tailoring,
            coastal inspiration, and effortless sophistication—designed for the modern
            gentleman to wear with confidence and ease.
          </p>
        </div>

        {/* BOTTOM ICON (momentum) */}
        <div
          ref={addIconRef}
          data-speed="0.6"
          data-rotate="-10"
          style={{
            width: "clamp(80px,10vw,200px)",
            transform: "translateX(clamp(-40px,-6vw,-120px))",
            willChange: "transform",

          }}
        >
          <img
            src={bottomIcon}
            alt="bottom"
            className="object-contain w-full"
          />
        </div>

      </div>

      {/* ───── CENTER VIDEO ───── */}
      <div className="flex-1 relative overflow-hidden">
        <video
          src={centerVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ───── RIGHT SIDE ───── */}
      <div className="flex items-center justify-center
        w-[26vw] min-w-[220px] max-w-[420px]
        px-[clamp(16px,3vw,40px)]"
      >
        <h1 className="salo uppercase text-[#1E382D] text-left leading-[90%]
          text-[clamp(48px,6vw,120px)]">
          Tidal <br /> Salt <br /> Stitch
        </h1>
      </div>

    </section>
  );
}