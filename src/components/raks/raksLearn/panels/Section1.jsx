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
      className="w-full h-screen flex flex-col"
      style={{ backgroundColor: NAVY_BLUE }}
    >
      {/* ── TOP BAR ── */}
      <div
        className="flex items-center justify-between 
            px-[clamp(20px,3vw,60px)] border-b py-[1%] border-white"
      >
        <h1
          className="salo uppercase leading-none text-[#FFCEC8]
              text-[clamp(48px,10vw,200px)]"
        >
          Learning Reimagined
        </h1>

        {/* craftImg momentum */}
        <div
          ref={addIconRef}
          data-speed="0.4"
          data-rotate="0"
          style={{ willChange: "transform" }}
        >
          <img
            src={raksLearnImg}
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
          {["Class.", "Kids.", "Perfected."].map((text, i) => (
            <div
              key={i}
              className="flex items-center 
                    px-[clamp(20px,2vw,60px)] 
                    flex-1 border-b border-white"
            >
              <span
                className="salo uppercase text-[#FFCEC8] leading-none
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
              data-rotate="-16"
              style={{ willChange: "transform" }}
            >
              <img
                src={raksImg}
                alt="logo"
                className="rotate-[-16deg]"
                style={{ width: "clamp(80px,10vw,120px)" }}
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
            className="salo uppercase text-[#FFCEC8] mb-4 md:pl-[5%]
                text-[clamp(32px,3.5vw,60px)]"
          >
            ABOUT
          </p>

          <p
            className="jost text-[#FFCEC8] leading-[140%] 
                border-y border-white py-4 md:pl-[5%]
                text-[clamp(15px,12vw,26px)]"
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
            alt="rakathon-image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
