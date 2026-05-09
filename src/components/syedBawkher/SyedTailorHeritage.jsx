import { useEffect, useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import tailorHeritageImg from "../../assets/client/syedBawkher/img/secImg.png";
import grid from "../../assets/client/padlr/img/checkBg.png";
import buttonImg from "../../assets/client/page/button.png";
import syedLogo from "../../assets/client/syedBawkher/img/heroImg1.png";
import syedBawkherImg from "../../assets/client/syedBawkher/img/syedBawkher4.png";
import tagElegantImg from "../../assets/client/syedBawkher/img/signatureImg.png";
import video from "../../assets/client/syedBawkher/vdo/Brochure_animation.mp4";
import question from "../../assets/client/syedBawkher/img/question.png";
import GridOverlay from "../../components/GridOverlay";
import ImagesTrail from "../../components/ImagesTrail";

gsap.registerPlugin(ScrollTrigger);

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

  // scrollYProgress works here because GSAP pins the page vertically
  // while translating horizontally — vertical scroll progress is still valid
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"],
  });

  return (
    <section
      ref={ref}
      className="w-full h-full relative flex items-center justify-center overflow-hidden isolate"
    >
      <GridOverlay
        color="0,0,0"
        opacity={0.15}
        size={100}
        position="99px 0px"
      />

      {/* IMAGE TRAIL */}
      <ImagesTrail image={question} />

      {/* ANIMATED TEXT */}
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

export default function SyedTailorHeritage() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const iconRefs = useRef([]);

  const addIconRef = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const track = trackRef.current;
    const wrapper = wrapperRef.current;

    if (!track || !wrapper) return;

    let ctx;
    let rafId;

    // total horizontal distance
    const getTotal = () => Math.max(track.scrollWidth - window.innerWidth, 0);

    const qs = iconRefs.current.map((el) => ({
      el,
      setX: gsap.quickTo(el, "x", {
        duration: 1,
        ease: "power3.out",
      }),
      setY: gsap.quickTo(el, "y", {
        duration: 0.8,
        ease: "power3.out",
      }),
      setR: gsap.quickTo(el, "rotation", {
        duration: 1,
        ease: "power3.out",
      }),
    }));

    let lastScrollY = window.scrollY;
    let velocity = 0;

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

    // HORIZONTAL SCROLL
    ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getTotal(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${getTotal()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={wrapperRef} className="min-h-screen relative">
      <div className="min-h-screen ">
        <div ref={trackRef} className="flex h-screen">
          {/* ── BLOCK 1 — Hero image (70vw) ── */}
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

          {/* ── BLOCK 2 — Main text panel (100vw) ── */}
          <div
            className="relative h-screen flex-shrink-0 overflow-visible"
            style={{ width: "100vw", backgroundColor: "#EBE2CE" }}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <GridOverlay
                color="0,0,0"
                opacity={0.15}
                size={100}
                position="99px 0px"
              />
            </div>

            <div
              className="relative z-10 h-full flex flex-col justify-center"
              style={{ padding: "0 5%" }}
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
                <img src={buttonImg} alt="" className="w-full" />
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
                <img src={syedLogo} alt="" className="w-full" />
              </div>

              {/* BOTTOM TITLE */}
              <div className="absolute" style={{ bottom: "3%", right: "-22%" }}>
                <h2
                  className="salo tracking-normal text-white leading-none"
                  style={{ fontSize: "clamp(50px,8vw,150px)" }}
                >
                  TIMEL<span style={{ color: "#262666" }}>ESS CRAFT</span>
                </h2>
              </div>
            </div>
          </div>

          {/* ── BLOCK 3 — Portrait + tag (35vw) ── */}
          <div
            className="relative h-screen flex-shrink-0 overflow-visible"
            style={{ width: "34vw", backgroundColor: "#ffffff" }}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <GridOverlay
                color="0,0,0"
                opacity={0.15}
                size={100}
                position="99px 0px"
              />
            </div>

            <div
              className="relative z-10 h-full flex items-start justify-center"
              style={{ padding: "2%" }}
            >
              <div className="relative flex flex-col w-full translate-y-6">
                {/* MAIN IMAGE */}
                <img
                  src={syedBawkherImg}
                  alt=""
                  className="object-contain"
                  style={{
                    top: "60%",
                    right: "20%",
                    width: "clamp(120px,45vh,400px)",
                    transform: "rotate(-10deg)",
                  }}
                />

                {/* TAG */}
                <div
                  ref={addIconRef}
                  data-speed="0.25"
                  data-rotate="-20"
                  className="absolute"
                  style={{
                    top: "0%",
                    right: "80%",
                    width: "clamp(60px,30vh,200px)",
                    willChange: "transform",
                  }}
                >
                  <img
                    src={tagElegantImg}
                    alt=""
                    className="w-full -rotate-[20deg]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── BLOCK 4 — Video (100vw) ── */}
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

          {/* ── BLOCK 5 — Wanna Know More (60vw) ── */}
          <div className="w-[60vw] h-screen relative overflow-hidden flex-shrink-0">
            <SyedWannaKnowMore />
          </div>
        </div>
      </div>
    </section>
  );
}
