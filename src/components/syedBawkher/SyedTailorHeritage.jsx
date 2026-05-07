import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import tailorHeritageImg from "../../assets/client/syedBawkher/img/secImg.png";
import grid from "../../assets/client/padlr/img/checkBg.png";
import buttonImg from "../../assets/client/page/button.png";
import syedLogo from "../../assets/client/syedBawkher/img/heroImg1.png";
import syedBawkherImg from "../../assets/client/syedBawkher/img/syedBawkher4.png";
import tagElegantImg from "../../assets/client/syedBawkher/img/signatureImg.png";
import video from "../../assets/client/syedBawkher/vdo/Brochure_animation.mp4";
import GridOverlay from "../../components/GridOverlay";

gsap.registerPlugin(ScrollTrigger);

export default function SyedTailorHeritage() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const addIconRef = (el) => {
    if (el) iconRefs.current.push(el);
  };

  useEffect(() => {
    if (window.innerWidth < 768) return;

    // ── ICON MOMENTUM via real scroll delta ──
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

    // ── HORIZONTAL SCROLL ──
    const ctx = gsap.context(() => {
      const totalScroll = trackRef.current.scrollWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapperRef);

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={wrapperRef}>
      <div className="h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full">
          {/* ── BLOCK 1 (70vw) ── */}
          <div
            className="relative h-full flex-shrink-0"
            style={{
              width: "70vw",
              backgroundImage: `url(${grid})`,
              backgroundSize: "cover",
              backgroundColor: "#EBE2CE",
            }}
          >
            <img
              src={tailorHeritageImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ── BLOCK 2 (100vw) ── */}
          <div
            className="relative h-full flex-shrink-0 overflow-visible"
            style={{
              width: "100vw",
              backgroundColor: "#EBE2CE",
            }}
          >
            {/* GRID */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <GridOverlay
                color="0,0,0"
                opacity={0.15}
                size={100}
                position="99px 0px"
              />
            </div>

            {/* CONTENT */}
            <div
              className="relative z-10 h-full flex flex-col justify-center"
              style={{
                padding: "0 5%",
              }}
            >
              {/* BUTTON ICON */}
              <div
                ref={addIconRef}
                data-speed="0.4"
                data-rotate="0"
                className="absolute"
                style={{
                  top: "10%",
                  left: "35%",
                  width: "clamp(80px,8vw,140px)",
                  willChange: "transform",
                }}
              >
                <img src={buttonImg} className="w-full" />
              </div>

              {/* HEADING */}
              <div className="absolute top-[20%] left-[10%] text-start">
                <h2
                  className="salo tracking-wider text-[#262666] leading-none"
                  style={{
                    fontSize: "clamp(60px,25vh,200px)",
                    maxWidth: "70%",
                  }}
                >
                  TAILOR <br /> HERITAGE
                </h2>
              </div>

              {/* SUB TEXT */}
              <div className="absolute top-[80%] left-[10%] text-start">
                <p
                  className="salo uppercase text-[#262666] tracking-tight leading-none"
                  style={{
                    fontSize: "clamp(18px,2.5vw,40px)",
                    marginTop: "2%",
                  }}
                >
                  Crafted <br /> In Heritage
                </p>
              </div>

              {/* RIGHT PARA */}
              <div
                className="absolute"
                style={{
                  right: "5%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  maxWidth: "40%",
                }}
              >
                <p className="jost text-start text-[26px] leading-[130%] capitalize text-[#262666]">
                  Syed Bawkher is a heritage tailoring house built on
                  generations of craftsmanship—where tradition, precision, and
                  timeless style come together. Designed for the modern
                  gentleman, it offers bespoke garments, refined detailing, and
                  an experience that goes beyond just dressing.
                </p>
              </div>

              {/* LOGO */}
              <div
                ref={addIconRef}
                data-speed="0.3"
                data-rotate="-6"
                className="absolute bottom-[5%] left-[40%]"
                style={{
                  marginTop: "4%",
                  width: "clamp(120px,20vh,250px)",
                  willChange: "transform",
                }}
              >
                <img src={syedLogo} className="w-full" />
              </div>

              {/* BOTTOM TITLE */}
              <div
                className="absolute"
                style={{
                  bottom: "5%",
                  right: "-22%",
                }}
              >
                <h2
                  className="salo tracking-normal text-white leading-none"
                  style={{
                    fontSize: "clamp(50px,8vw,150px)",
                  }}
                >
                  TIMEL<span style={{ color: "#262666" }}>ESS CRAFT</span>
                </h2>
              </div>
            </div>
          </div>

          {/* ── BLOCK 3 (30vw) ── */}
          <div
            className="relative flex-shrink-0 overflow-visible"
            style={{
              width: "35vw",
              backgroundColor: "#ffffff",
            }}
          >
            {/* GRID */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <GridOverlay
                color="0,0,0"
                opacity={0.15}
                size={100}
                position="99px 0px"
              />
            </div>

            {/* CONTENT */}
            <div
              className="relative z-10 h-full flex items-start justify-center"
              style={{
                padding: "2%",
              }}
            >
              <div className="relative flex flex-col w-full">
                {/* MAIN IMAGE */}
                <img
                  src={syedBawkherImg}
                  className="object-contain"
                  style={{
                    top: "60%",
                    right: "20%",
                    width: "clamp(120px,40vh,400px)",
                    transform: "rotate(-10deg)",
                  }}
                />

                {/* TAG */}
                <div
                  ref={addIconRef}
                  data-speed="0.25"
                  className="absolute"
                  style={{
                    top: "5%",
                    right: "90%",
                    width: "clamp(60px,20vh,200px)",
                    willChange: "transform",
                  }}
                >
                  <img src={tagElegantImg} className="w-full -rotate-[20deg]" />
                </div>
              </div>
            </div>
          </div>

          {/* Block 4 */}
          {/* ─── DESKTOP ─── */}
          <div className="w-[100vw] h-screen relative overflow-hidden flex-shrink-0">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          {/* Block 5 */}
          <div className="w-[60vw] h-screen relative overflow-hidden flex-shrink-0">
            <SyedWannaKnowMore />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import question from "../../assets/client/syedBawkher/img/question.png";
import ImagesTrail from "../../components/ImagesTrail";

const lines = ["Wanna..", "Know", "More"];

const AnimatedChar = ({ char, scrollYProgress, start, end }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [-50, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="text-[#262666] font-[500] salo uppercase inline-block will-change-transform"
    >
      <span className="text-[50px] md:text-[150px]">
        {char === " " ? "\u00A0" : char}
      </span>
    </motion.span>
  );
};

const SyedWannaKnowMore = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"],
  });

  return (
    <section
      ref={ref}
      className="w-full md:h-screen relative flex items-center justify-center overflow-hidden isolate"
    >
      <GridOverlay
        color="0,0,0"
        opacity={0.15}
        size={100}
        position="99px 0px"
      />
      {/* IMAGE TRAIL */}
      <ImagesTrail image={question} />

      {/* SCROLL TEXT */}
      <div className="relative z-[3] w-full h-full flex items-center justify-center overflow-hidden">
        <div className="text-center leading-none px-4 max-w-full">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex justify-center flex-wrap">
              {line.split("").map((char, i) => {
                const index = lineIndex * 10 + i;
                const start = index / 35;
                const end = start + 0.12;

                return (
                  <AnimatedChar
                    key={i}
                    char={char}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
