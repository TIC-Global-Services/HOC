import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import craftImg from "../../assets/client/syedBawkher/img/signatureRightImg.png";
import elegantLogoImg from "../../assets/client/syedBawkher/img/signatureImg.png";
import circleLogoImg from "../../assets/client/syedBawkher/img/heroImg1.png";
import elegantPairImg from "../../assets/client/syedBawkher/img/elegantPairImg.png";
import syedCircleImg from "../../assets/client/syedBawkher/img/heroImg4.png";
import texturalImg from "../../assets/client/syedBawkher/img/heroImg3.png";
import syedLeftImg from "../../assets/client/syedBawkher/img/signatureRightImg.png";
import tagImg from "../../assets/client/syedBawkher/img/signatureImg.png";
import syedCardImg from "../../assets/client/syedBawkher/img/syedBawkher4.png";
import GridOverlay from "../../components/GridOverlay";

gsap.registerPlugin(ScrollTrigger);

const BEIGE = "#EBE2CE";

export default function SyedSignatureCraft() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const iconRefs = useRef([]);

  const addIconRef = (el) => {
  if (el && !iconRefs.current.includes(el)) {
    iconRefs.current.push(el);
  }
};

  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  let ctx;
  let cleanupRAF;

  // ── Total horizontal scroll distance ──
  const getTotal = () =>
    Math.max(
      sectionsRef.current
        .filter(Boolean)
        .reduce((acc, s) => acc + s.offsetWidth, 0) -
        window.innerWidth,
      0
    );

  const init = () => {
    // ── ICON MOMENTUM via scroll delta ──
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
    ctx = gsap.context(() => {
      gsap.to(container, {
        x: () => -getTotal(),
        ease: "none",
        scrollTrigger: {
          trigger: container.parentElement,
          start: "top top",
          end: () => `+=${getTotal()}`,
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, container.parentElement);

    // Refresh AFTER ScrollTrigger is registered
    ScrollTrigger.refresh();

    // RAF cleanup
    return () => cancelAnimationFrame(rafId);
  };

  // ── Wait for all images before measuring ──
  const images = Array.from(container.querySelectorAll("img"));
  const pending = images.filter((img) => !img.complete);

  const cleanupListeners = [];

  if (pending.length === 0) {
    cleanupRAF = init();
  } else {
    let loaded = 0;

    const onLoad = () => {
      loaded++;

      if (loaded >= pending.length) {
        cleanupRAF = init();
      }
    };

    pending.forEach((img) => {
      img.addEventListener("load", onLoad);
      img.addEventListener("error", onLoad);

      cleanupListeners.push(() => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onLoad);
      });
    });
  }

  return () => {
    cleanupRAF?.();

    cleanupListeners.forEach((fn) => fn());

    ctx?.revert();
  };
}, []);

  return (
    <div className="h-screen">
      <div ref={containerRef} className="flex h-full w-max">

        {/* ───────── SECTION 1 ───────── */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="h-screen shrink-0 flex overflow-hidden"
          style={{ backgroundColor: BEIGE }}
        >
          {/* LEFT CONTENT PANEL */}
          <div className="w-[70vw] h-full flex flex-col border-r-2 border-white relative">

            {/* TOP AREA */}
            <div className="relative border-b-2 border-white px-[3vw] py-[3vh]">
              <h1
                className="salo uppercase text-start leading-none text-[#262666]"
                style={{ fontSize: "clamp(50px,10vw,220px)", lineHeight: "0.9" }}
              >
                Signature Craft
              </h1>

              {/* FLOATING ICON */}
              <div
                ref={addIconRef}
                data-speed="0.3"
                data-rotate="0"
                className="absolute top-[10%] right-[6%]"
                style={{ willChange: "transform" }}
              >
                <img
                  src={circleLogoImg}
                  alt=""
                  className="w-auto object-contain"
                  style={{ height: "clamp(80px,10vw,220px)" }}
                />
              </div>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="flex flex-1 min-h-0">

              {/* LEFT WORD STACK */}
              <div className="w-[45%] border-r-2 border-white flex flex-col">
                {["Measured.", "Crafted.", "Perfected."].map((text, i) => (
                  <div
                    key={i}
                    className="flex-1 border-b-2 border-white flex items-center px-[3vw]"
                  >
                    <span
                      className="salo uppercase text-[#262666]"
                      style={{ fontSize: "clamp(26px,6vw,110px)", lineHeight: "0.9" }}
                    >
                      {text}
                    </span>
                  </div>
                ))}

                {/* BOTTOM LOGO */}
                <div className="flex items-center justify-end px-[2vw] py-[3vh]">
                  <img
                    ref={addIconRef}
                    data-speed="0.2"
                    data-rotate="5"
                    src={elegantLogoImg}
                    alt=""
                    className="object-contain"
                    style={{
                      width: "clamp(100px,12vw,260px)",
                      willChange: "transform",
                    }}
                  />
                </div>
              </div>

              {/* RIGHT ABOUT */}
              <div className="w-[55%] flex flex-col justify-center">
                <p
                  className="salo text-start px-[5%] uppercase text-[#262666]"
                  style={{ fontSize: "clamp(20px,4vw,60px)" }}
                >
                  About
                </p>

                <p
                  className="jost text-[#262666] px-[5%] text-start capitalize border-t-2 border-b-2 border-white py-[4vh] mt-[2vh]"
                  style={{ fontSize: "clamp(14px,1.8vw,28px)", lineHeight: "150%" }}
                >
                  Syed Bawkher is built on a legacy of precision tailoring and
                  enduring craftsmanship. From the first measurement to the
                  final stitch, every garment is shaped with intent —
                  transforming fine materials into timeless elegance.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="h-screen shrink-0 flex items-end overflow-hidden">
            <img
              src={craftImg}
              alt=""
              className="h-screen w-auto object-cover"
            />
          </div>
        </section>

        {/* ───────── SECTION 2 ───────── */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="w-[80vw] h-screen relative overflow-hidden"
        >
          {/* GRID */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <GridOverlay color="0,0,0" opacity={0.15} size={100} position="99px 0px" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 h-full">

            {/* FLOATING IMAGES */}
            {[
              { img: syedCircleImg, top: "10%", left: "5%",   speed: "0.6", rotate: "8"  },
              { img: texturalImg,   top: "10%", right: "15%", speed: "0.4", rotate: "-5" },
              { img: elegantPairImg,bottom: "10%", left: "5%",speed: "0.5", rotate: "3"  },
            ].map((item, i) => (
              <div
                key={i}
                ref={addIconRef}
                data-speed={item.speed}
                data-rotate={item.rotate}
                className="absolute"
                style={{
                  top: item.top,
                  right: item.right,
                  bottom: item.bottom,
                  left: item.left,
                  width: "clamp(80px,14vw,320px)",
                  willChange: "transform",
                }}
              >
                <img src={item.img} className="w-full" alt="" />
              </div>
            ))}

            {/* HEADING TEXT */}
            <div className="absolute top-[20%] flex items-center justify-center px-[10%]">
              <div style={{ maxWidth: "60%" }}>
                <h2
                  className="salo uppercase text-start text-[#262666] tracking-tight leading-none"
                  style={{ fontSize: "clamp(48px,22vh,200px)" }}
                >
                  Precision <br /> Tailored
                </h2>
                <p
                  style={{ fontSize: "clamp(12px,3.5vh,26px)" }}
                  className="jost text-start text-black/50 leading-[120%] tracking-tight mt-2 pl-3"
                >
                  Crafted through generations of expertise, each piece reflects
                  precision and purpose. A seamless blend of heritage and
                  refinement, tailored for the modern gentleman.
                </p>
              </div>
            </div>

            {/* BOTTOM TEXT */}
            <div className="absolute bottom-[10%] right-[10%]">
              <p className="jost font-[500] tracking-tight uppercase text-base md:text-[40px]">
                DETAIL & DISCIPLINE
              </p>
            </div>
          </div>
        </div>

        {/* ───────── SECTION 3 — AUTO-WIDTH IMAGE BLOCK ───────── */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="h-screen shrink-0 flex items-end overflow-hidden"
        >
          <img
            src={syedLeftImg}
            alt=""
            className="h-screen w-auto object-contain"
          />
        </div>

        {/* ───────── SECTION 4 ───────── */}
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="w-[45vw] h-full relative bg-white overflow-visible"
        >
          <div
            className="absolute flex flex-col justify-between"
            style={{
              right: "10%",
              top: "5%",
              bottom: "5%",
              width: "clamp(320px,35vw,550px)",
            }}
          >
            {/* TEXT */}
            <p
              className="jost text-start text-black capitalize"
              style={{ fontSize: "clamp(14px,3.5vh,26px)", lineHeight: "150%" }}
            >
              Full-canvas tailoring rooted in generations of expertise. A
              seamless blend of time-honoured{" "}
              <span
                className="salo font-[500] tracking-tight text-[#262666]"
                style={{ fontSize: "clamp(18px,5vh,40px)" }}
              >
                craftsmanship and modern refinement.
              </span>{" "}
              Hand-cut, individually measured, and meticulously finished. Every
              garment is tailored to achieve a flawless fit and enduring
              sophistication.
            </p>

            {/* IMAGE WRAPPER */}
            <div className="relative flex justify-center">
              {/* TAG */}
              <div
                ref={addIconRef}
                data-speed="0.35"
                data-rotate="30"
                className="absolute z-[20]"
                style={{
                  left: "0%",
                  top: "0%",
                  width: "clamp(120px,10vw,180px)",
                  willChange: "transform",
                }}
              >
                <img src={tagImg} className="w-full -rotate-[20deg]" alt="" />
              </div>

              {/* CARD */}
              <div
                className="relative"
                style={{
                  width: "clamp(160px,45vh,400px)",
                  transform: "rotate(-10deg)",
                }}
              >
                <img src={syedCardImg} className="w-full object-contain" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}