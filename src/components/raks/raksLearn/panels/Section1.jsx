import { useEffect, useRef } from "react";
import gsap from "gsap";

import rakathonImg from "../../../../assets/client/raks/img/rightImg.png";
import raksLearnImg from "../../../../assets/client/raks/img/raksLearn.png";
import raksImg from "../../../../assets/client/raks/img/heroImg2.png";

const NAVY_BLUE = "#000085FF";

export default function RaksLearning() {
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

    return () => {
      cancelAnimationFrame(rafId);

      qs.forEach(({ el }) => {
        gsap.set(el, { x: 0, y: 0, rotation: 0 });
      });

      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section className="w-full h-screen flex flex-col"
    style={{ backgroundColor: NAVY_BLUE }}>
      {/* ── TOP BAR ── */}
      <div
        className="relative flex items-center px-6 border-b border-white flex-shrink-0"
        style={{ height: "28%" }}
      >
        <h1
          className="salo text-[#FFCEC8] uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(36px, 12vw, 190px)" }}
        >
          Learning Reimagined
        </h1>

        <div className="absolute top-0 right-[20%] h-full flex items-center z-10">
          <img
            src={raksLearnImg}
            alt="retro computer"
            className="object-contain h-[50%] w-auto"
          />
        </div>
      </div>

      {/* ── BOTTOM GRID ── */}
      <div className="flex flex-1 min-h-0 w-full">
        {/* LEFT COLUMN */}
        <div
          className="flex flex-col border-r border-white"
          style={{ width: "30%" }}
        >
          {["Class.", "Kids.", "Perfected."].map((text, i) => (
            <div
              key={i}
              className="flex items-center px-4 border-b border-white flex-1 min-h-0"
            >
              <span
                className="salo text-[#FFCEC8] uppercase leading-none"
                style={{ fontSize: "clamp(18px, 6vw, 120px)" }}
              >
                {text}
              </span>
            </div>
          ))}

          {/* LOGO ROW */}
          <div className="flex items-center justify-end px-4 py-3 flex-shrink-0">
            <img
              src={raksImg}
              alt="padlr logo"
              className="object-contain"
              style={{ width: "clamp(50px, 14vw, 160px)" }}
            />
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="flex flex-1 min-w-0 min-h-0">
          {/* TEXT */}
          <div className="flex flex-col justify-center text-start pt-[10%] w-[40%] min-w-0 flex-shrink-0">
            <p
              className="salo text-[#FFCEC8] uppercase mb-3 px-5"
              style={{ fontSize: "clamp(18px, 3.8vw, 60px)" }}
            >
              ABOUT
            </p>
            <p
              className="jost text-[#FFCEC8] leading-[140%] border-t-2 border-b-2 border-white py-3 px-5"
              style={{ fontSize: "clamp(11px, 1.4vw, 26px)" }}
            >
             RaK’s Institutions is a forward-thinking school rooted in the
            Reggio-Emilia philosophy, where children lead their own learning
            journeys. Through experiential, sports-integrated, and problem-based
            approaches.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 relative border-l border-white overflow-hidden">
            <img
              src={rakathonImg}
              alt="silk"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
