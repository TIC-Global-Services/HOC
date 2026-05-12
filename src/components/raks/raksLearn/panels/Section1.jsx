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
    <section
      className="w-full h-screen overflow-hidden flex"
      style={{ backgroundColor: NAVY_BLUE }}
    >
      {/* ───────── LEFT MAIN BOX ───────── */}
      <div className="w-[60%] h-full border-r border-white flex flex-col">
        {/* ───────── TOP BAR ───────── */}
        <div className="relative border-b border-white px-6 py-5">
          <h1
            className="salo text-start text-[#FFCEC8] uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(36px, 9vw, 190px)" }}
          >
            Learning Reimagined
          </h1>

          {/* TOP ICON */}
          <div className="absolute top-0 right-[8%] h-full flex items-center z-10">
            <img
              ref={addIconRef}
              data-speed="0.35"
              data-rotate="-8"
              src={raksLearnImg}
              alt="retro computer"
              className="object-contain h-[50%] w-auto"
            />
          </div>
        </div>

        {/* ───────── BOTTOM CONTENT ───────── */}
        <div className="flex flex-1 min-h-0">
          {/* LEFT COLUMN */}
          <div className="w-[50%] border-r border-white flex flex-col">
            {["Class.", "Kids.", "Perfected."].map((text, i) => (
              <div
                key={i}
                className="flex items-center px-6 border-b border-white flex-1"
              >
                <span
                  className="salo text-[#FFCEC8] uppercase leading-none"
                  style={{ fontSize: "clamp(18px, 6vw, 120px)" }}
                >
                  {text}
                </span>
              </div>
            ))}

            {/* LOGO */}
            <div className="flex items-center justify-end px-4 py-4">
              <img
                ref={addIconRef}
                data-speed="0.35"
                data-rotate="-8"
                src={raksImg}
                alt="raks logo"
                className="object-contain"
                style={{ width: "clamp(80px, 12vw, 300px)" }}
              />
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div className="w-[50%] flex flex-col justify-center text-start">
            <div className="flex flex-col">
              {/* ABOUT TITLE */}
              <p
                className="salo text-[#FFCEC8] uppercase px-5"
                style={{ fontSize: "clamp(18px, 4vw, 60px)" }}
              >
                ABOUT
              </p>

              {/* ABOUT TEXT */}
              <p
                className="jost text-[#FFCEC8] leading-[140%] border-t border-b border-white px-5 py-10"
                style={{ fontSize: "clamp(11px, 1.6vw, 24px)" }}
              >
                RaK’s Institutions is a forward-thinking school rooted in the
                Reggio-Emilia philosophy, where children lead their own learning
                journeys. Through experiential, sports-integrated, and
                problem-based approaches.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── RIGHT IMAGE ───────── */}
      <div className="w-[40%] h-screen overflow-hidden relative">
        <img
          src={rakathonImg}
          alt="rakathon"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
