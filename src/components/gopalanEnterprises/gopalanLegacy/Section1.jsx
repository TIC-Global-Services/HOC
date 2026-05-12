import { useEffect, useRef } from "react";
import gsap from "gsap";

import minimalImg from "../../../assets/client/gopalan/heroImg1.png";
import strokeSystemImg from "../../../assets/client/gopalan/heroImg4.png";
import visualVideo1 from '../../../assets/client/gopalan/GE_Visual Identity 1_Animation.mp4'

const ORANGE = "#E96428";

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
      className="w-full h-screen overflow-hidden flex"
      style={{ backgroundColor: ORANGE }}
    >
      {/* ───────── LEFT MAIN BOX ───────── */}
      <div className="w-[60%] h-full border-r border-white flex flex-col">
        {/* ───────── TOP BAR ───────── */}
        <div className="relative border-b border-white px-6 py-5">
          <h1
            className="salo text-start text-white uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(36px, 9vw, 190px)" }}
          >
            LEGACY <span className="jost">&</span> FUTURE
          </h1>

          {/* TOP ICON */}
          <div className="absolute top-0 right-[8%] h-full flex items-center z-10">
            <div
              ref={addIconRef}
              data-speed="0.4"
              data-rotate="0"
              style={{ willChange: "transform" }}
            >
              <img
                src={minimalImg}
                alt="retro computer"
                className="object-contain h-[70%] w-auto"
                style={{ width: "clamp(110px, 12vw, 200px)" }}
              />
            </div>
          </div>
        </div>

        {/* ───────── BOTTOM CONTENT ───────── */}
        <div className="flex flex-1 min-h-0">
          {/* LEFT COLUMN */}
          <div className="w-[50%] border-r border-white flex flex-col">
            {["Legacy.", "Evolution.", "Cohesion."].map((text, i) => (
              <div
                key={i}
                className="flex items-center px-6 border-b border-white flex-1"
              >
                <span
                  className="salo text-white uppercase leading-none"
                  style={{ fontSize: "clamp(18px, 6vw, 120px)" }}
                >
                  {text}
                </span>
              </div>
            ))}

            {/* LOGO */}
            <div className="flex items-center justify-start px-4 py-4">
              <div
                ref={addIconRef}
                data-speed="0.6"
                data-rotate="16"
                style={{ willChange: "transform" }}
              >
                <img
                  src={strokeSystemImg}
                  alt="logo"
                  className="rotate-[16deg] object-contain"
                  style={{ width: "clamp(80px, 10vh, 300px)" }}
                />
              </div>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div className="w-[50%] flex flex-col justify-center text-start">
            <div className="flex flex-col">
              {/* ABOUT TITLE */}
              <p
                className="salo text-white uppercase px-5"
                style={{ fontSize: "clamp(18px, 4vw, 60px)" }}
              >
                ABOUT
              </p>

              {/* ABOUT TEXT */}
              <p
                className="jost text-white leading-[140%] border-t border-b border-white px-5 py-10"
                style={{ fontSize: "clamp(11px, 1.6vw, 24px)" }}
              >
                For over four decades, Gopalan Group has shaped spaces and
                experiences through a legacy built on trust, quality, and
                innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── RIGHT VIDEO ───────── */}
      <div className="w-[70%] h-screen overflow-hidden relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={visualVideo1} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
