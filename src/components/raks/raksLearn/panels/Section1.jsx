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
      className="w-full h-screen flex flex-col"
      style={{ backgroundColor: NAVY_BLUE }}
    >
      {/* ── TOP BAR ── */}
      <div
        className="flex items-center justify-between
        px-[clamp(20px,3vw,60px)] border-b-2 border-white"
      >
        <h1
          className="salo font-[400] uppercase leading-none text-[#FFCEC8]
          text-[clamp(36px,12vw,150px)]"
        >
          LEARNING REIMAGINED
        </h1>

        {/* raksLearnImg */}
        <div
          ref={addIconRef}
          data-speed="0.4"
          data-rotate="0"
          style={{ willChange: "transform" }}
        >
          <img
            src={raksLearnImg}
            alt="Raks Learn Badge"
            className="object-contain md:-translate-x-[20%] pt-2"
            style={{ width: "clamp(110px, 12vw, 210px)" }}
          />
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="flex flex-1">
        {/* LEFT */}
        <div
          className="flex flex-col
          w-[32vw] min-w-[320px] max-w-[700px]
          border-r-2 border-white"
        >
          {["Class.", "Kids.", "Perfected."].map((text, i) => (
            <div
              key={i}
              className="flex items-center
                px-[clamp(20px,2vw,40px)]
                flex-1 border-b-2 border-white"
            >
              <span
                className="salo font-[400] uppercase text-[#FFCEC8] leading-none
                text-[clamp(36px,6vw,120px)]"
              >
                {text}
              </span>
            </div>
          ))}

          {/* raksImg */}
          <div className="flex items-center px-[clamp(20px,3vw,60px)] py-6">
            <div
              ref={addIconRef}
              data-speed="0.6"
              data-rotate="0"
              style={{ willChange: "transform" }}
            >
              <img
                src={raksImg}
                alt="Raks logo"
                className="object-contain bg-transparent"
                style={{ width: "clamp(80px, 14vw, 200px)" }}
              />
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div
          className="flex flex-col justify-center md:mt-[20%]
          w-[26vw] min-w-[480px] max-w-[800px] text-start"
        >
          <p
            className="salo font-[400] uppercase text-[#FFCEC8] mb-4 md:pl-[5%]
            text-[clamp(32px,3.5vw,60px)]"
          >
            ABOUT
          </p>

          <p
            className="jost text-[#FFCEC8] leading-[140%]
            border-y-2 border-white py-4 md:pl-[5%]
            text-[clamp(15px,1.4vw,26px)]"
          >
            RaK's Institutions is a forward-thinking school rooted in the
            Reggio-Emilia philosophy, where children lead their own learning
            journeys. Through experiential, sports-integrated, and problem-based
            approaches.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative border-l-2 border-white overflow-hidden">
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
