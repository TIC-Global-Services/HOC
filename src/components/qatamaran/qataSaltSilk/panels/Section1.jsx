import { useEffect, useRef } from "react";
import gsap from "gsap";

import craftImg from "../../../../assets/client/qatamaran/heroFloat3.png";
import treeLogoImg from "../../../../assets/client/qatamaran/heroFloat2.png";
import silkCraft from "../../../../assets/client/qatamaran/silkImg.png";

const GREEN = "#1E382D";

export default function Section1() {
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
      className="w-full h-screen flex flex-col"
      style={{ backgroundColor: GREEN }}
    >
      {/* ── TOP BAR ── */}
      <div
        className="flex items-center justify-between 
        px-[clamp(20px,3vw,60px)] border-b border-white"
      >
        <h1
          className="salo uppercase leading-none py-[1%] text-white
          text-[clamp(48px,10vw,200px)]"
        >
          Salt <span className="jost"> & </span> Silk craft
        </h1>

        {/* craftImg momentum */}
        <div
          ref={addIconRef}
          data-speed="0.4"
          data-rotate="0"
          style={{ willChange: "transform" }}
        >
          <img
            src={craftImg}
            alt="retro computer"
            className="object-contain md:-translate-x-[200%] pt-2"
            style={{ width: "clamp(110px, 12vw, 200px)" }}
          />
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="flex flex-1">

        {/* LEFT */}
        <div
          className="flex flex-col 
          w-[32vw] min-w-[320px] max-w-[700px]
          border-r border-white"
        >
          {["Heritage.", "Craft.", "Voyage."].map((text, i) => (
            <div
              key={i}
              className="flex items-center 
                px-[clamp(20px,2vw,60px)] 
                flex-1 border-b border-white"
            >
              <span
                className="salo uppercase text-white leading-none
                text-[clamp(42px,6vw,120px)]"
              >
                {text}
              </span>
            </div>
          ))}

          {/* tree logo momentum */}
          <div className="flex items-end px-[clamp(20px,3vw,60px)] py-6">
            <div
              ref={addIconRef}
              data-speed="0.6"
              data-rotate="16"
              style={{ willChange: "transform" }}
            >
              <img
                src={treeLogoImg}
                alt="logo"
                className="rotate-[16deg]"
                style={{ width: "clamp(80px,7vw,120px)" }}
              />
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div
          className="flex flex-col justify-center md:mt-[9.5%]
          w-[26vw] min-w-[480px] max-w-[800px] text-start"
        >
          <p
            className="salo uppercase text-white mb-4 md:pl-[5%]
            text-[clamp(32px,3.5vw,60px)]"
          >
            ABOUT
          </p>

          <p
            className="jost text-white leading-[140%] 
            border-y border-white py-4 md:pl-[5%]
            text-[clamp(15px,12vw,26px)]"
          >
            Rooted in seaside heritage, shaped by skilled hands. A balance of
            fluid elegance and structured precision.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative border-l border-white overflow-hidden">
          <img
            src={silkCraft}
            alt="silk"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}