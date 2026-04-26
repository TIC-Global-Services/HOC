import { useEffect, useRef } from "react";
import gsap from "gsap";

import rakathonImg from "../../../../assets/client/raks/img/rightImg.png";
import raksLearnImg from "../../../../assets/client/raks/img/raksLearn.png";
import raksImg from "../../../../assets/client/raks/img/heroImg2.png";

const NAVY_BLUE = "#000085";

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
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      className="w-full h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: NAVY_BLUE }}
    >
      {/* ── TOP BAR ── */}
      <div className="flex items-center justify-between px-[clamp(16px,2.5vw,60px)] border-b-2 border-white shrink-0">
        <h1
          className="salo font-[400] uppercase leading-none tracking-tight text-[#FFCEC8]"
          style={{ fontSize: "clamp(24px, 11vw, 190px)" }}
        >
          LEARNING REIMAGINED
        </h1>

        <div
          ref={addIconRef}
          data-speed="0.4"
          data-rotate="0"
          className="shrink-0"
          style={{ willChange: "transform" }}
        >
          <img
            src={raksLearnImg}
            alt="Raks Learn Badge"
            className="object-contain pt-2"
            style={{ width: "clamp(70px, 9vw, 210px)" }}
          />
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="flex flex-1 min-h-0">

        {/* LEFT — 30% */}
        <div
          className="flex flex-col border-r-2 border-white shrink-0"
          style={{ width: "30%" }}
        >
          {["Class.", "Kids.", "Perfected."].map((text, i) => (
            <div
              key={i}
              className="flex items-center px-[clamp(12px,1.5vw,40px)] flex-1 border-b-2 border-white"
            >
              <span
                className="salo font-[400] uppercase text-[#FFCEC8] leading-none"
                style={{ fontSize: "clamp(28px, 5vw, 120px)" }}
              >
                {text}
              </span>
            </div>
          ))}

          {/* Logo row */}
          <div
            className="flex items-center px-[clamp(12px,2vw,40px)]"
            style={{ height: "clamp(60px, 10%, 120px)" }}
          >
            <div
              ref={addIconRef}
              data-speed="0.6"
              data-rotate="0"
              style={{ willChange: "transform" }}
            >
              <img
                src={raksImg}
                alt="Raks logo"
                className="object-contain"
                style={{ width: "clamp(60px, 10vw, 200px)" }}
              />
            </div>
          </div>
        </div>

        {/* CENTER — 28% */}
        <div
          className="flex flex-col justify-center  shrink-0"
          style={{ width: "25%" }}
        >
          <p
            className="salo font-[400] text-start uppercase text-[#FFCEC8] px-[5%] mb-[clamp(8px,1.5vh,20px)]"
            style={{ fontSize: "clamp(22px, 2.8vw, 60px)" }}
          >
            ABOUT
          </p>

          <p
            className="jost text-start text-[#FFCEC8] leading-[140%] px-[5%] border-y-2 border-white"
            style={{
              fontSize: "clamp(12px, 1.2vw, 26px)",
              paddingTop: "clamp(8px, 10vh, 20px)",
              paddingBottom: "clamp(8px, 10vh, 20px)",
            }}
          >
            RaK's Institutions is a forward-thinking school rooted in the
            Reggio-Emilia philosophy, where children lead their own learning
            journeys. Through experiential, sports-integrated, and problem-based
            approaches.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative border-l-2 border-white overflow-hidden min-w-0">
          <img
            src={rakathonImg}
            alt="Rakathon"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}