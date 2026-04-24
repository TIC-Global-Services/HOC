import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import craftImg from "../../assets/client/syedBawkher/img/signatureRightImg.png";
import elegantLogoImg from "../../assets/client/syedBawkher/img/signatureImg.png";
import circleLogoImg from "../../assets/client/syedBawkher/img/heroImg1.png";
import grid from "../../assets/client/padlr/img/checkBg.png";
import elegantPairImg from "../../assets/client/syedBawkher/img/elegantPairImg.png";
import syedCircleImg from "../../assets/client/syedBawkher/img/heroImg4.png";
import texturalImg from "../../assets/client/syedBawkher/img/heroImg3.png";
import syedLeftImg from '../../assets/client/syedBawkher/img/signatureRightImg.png';
import tagImg from '../../assets/client/syedBawkher/img/signatureImg.png';
import syedCardImg from '../../assets/client/syedBawkher/img/syedBawkher4.png';

gsap.registerPlugin(ScrollTrigger);

const BEIGE = "#EBE2CE";

export default function SyedSignatureCraft() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const addIconRef = (el) => { if (el) iconRefs.current.push(el); };

useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    const widths = sections.map((s) => s.offsetWidth);
    const totalWidthPx = widths.reduce((acc, w) => acc + w, 0);
    const totalScroll = totalWidthPx - window.innerWidth;

    gsap.set(container, { width: totalWidthPx });

    // quickTo setters — one per icon per property
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

      // smooth velocity with lerp
      velocity += (delta - velocity) * 0.15;

      qs.forEach(({ el, setX, setY, setR }) => {
        const speed = parseFloat(el.dataset.speed || 0.5);
        const baseRotate = parseFloat(el.dataset.rotate || 0);

        // scroll down → delta positive → icons push right
        // scroll up   → delta negative → icons pull left
        // stop scroll → velocity → 0 → springs back to original
        setX(velocity * speed * 10);
        setY(velocity * speed * 1);
        setR(baseRotate + velocity * speed * 0.6);
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    // horizontal scroll — separate from icon animation
    gsap.to(container, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: container.parentElement,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-visible h-screen w-screen">
      <div ref={containerRef} className="flex h-full">

        {/* ── SECTION 1 ── */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="w-[120vw] h-full flex-shrink-0 flex flex-col"
          style={{ backgroundColor: BEIGE }}
        >
          <div
            className="flex items-center justify-between px-6 xl:px-10 flex-shrink-0"
            style={{ borderBottom: "2px solid white" }}
          >
            <h1 className="salo font-[400] md:text-[150px] text-[#262666] uppercase leading-none">
              SIGNATURE CRAFT
            </h1>
            <div ref={addIconRef} data-speed="0.5" data-rotate="-10" data-rotate-range="-30" style={{ willChange: "transform" }}>
              <img src={circleLogoImg} alt="icon" className="object-contain pt-2" style={{ width: "clamp(110px, 10vw, 174px)" }} />
            </div>
          </div>

          <div className="flex flex-1 min-h-0">
            <div className="flex flex-col" style={{ width: "38%", borderRight: "2px solid white" }}>
              <div className="flex items-center px-6 xl:px-10 flex-1" style={{ borderBottom: "2px solid white" }}>
                <span className="salo md:text-[120px] text-[#262666] font-[400] uppercase leading-none">Measured.</span>
              </div>
              <div className="flex items-center px-6 xl:px-8 flex-1" style={{ borderBottom: "2px solid white" }}>
                <span className="salo md:text-[120px] text-[#262666] font-[400] uppercase leading-none">Crafted.</span>
              </div>
              <div className="flex items-center px-6 xl:px-8 flex-1" style={{ borderBottom: "2px solid white" }}>
                <span className="salo md:text-[120px] text-[#262666] font-[400] uppercase leading-none">Perfected.</span>
              </div>
              <div className="flex items-end justify-center py-6 xl:py-8">
                <div ref={addIconRef} data-speed="0.5" data-rotate="-20" data-rotate-range="-40" style={{ willChange: "transform" }}>
                  <img src={elegantLogoImg} alt="icon" className="md:w-[200px] object-contain" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center" style={{ width: "30%" }}>
              <p className="salo md:text-[60px] font-[400] text-[#262666] text-start uppercase tracking-tight mb-5 px-6">ABOUT</p>
              <p className="jost md:text-[26px] text-start font-[400] text-[#262666] leading-[140%] tracking-tight border-t-2 border-b-2 border-white py-4 px-6">
                Syed Bawlher is Built On A Legacy Of Precision Tailoring And
                Enduring Craftsmanship. From The First Measurement To The Final
                Stitch, Every Garment Is Shaped With Intention – Transforming Your Experience.
              </p>
            </div>

            <div className="relative overflow-hidden flex-1" style={{ borderLeft: "2px solid white" }}>
              <img src={craftImg} alt="craft" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* ── SECTION 2 ── */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="w-[130vw] h-full flex-shrink-0 flex flex-col"
          style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="relative w-full h-full max-w-[1600px] mx-auto">

            <div className="absolute top-6 left-6 md:top-10 md:left-10 xl:top-[10%] xl:left-0">
              <div ref={addIconRef} data-speed="0.8" data-rotate="0" data-rotate-range="20" style={{ willChange: "transform" }}>
                <img src={syedCircleImg} alt="icon" className="w-[60px] md:w-[90px] lg:w-[180px] xl:w-[180px]" />
              </div>
            </div>

            <div className="absolute right-6 md:right-10 xl:right-14 top-[10%]">
              <div ref={addIconRef} data-speed="0.8" data-rotate="0" data-rotate-range="20" style={{ willChange: "transform" }}>
                <img src={texturalImg} alt="icon" className="w-[60px] md:w-[90px] lg:w-[180px] xl:w-[350px]" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 xl:bottom-14 xl:left-14">
              <div ref={addIconRef} data-speed="0.8" data-rotate="0" data-rotate-range="20" style={{ willChange: "transform" }}>
                <img src={elegantPairImg} alt="icon" className="w-[60px] md:w-[90px] lg:w-[180px] xl:w-[340px]" />
              </div>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 xl:bottom-[20%] xl:right-14 text-right">
              <p className="jost uppercase font-[500] text-black text-[14px] md:text-[28px] xl:text-[60px] tracking-tight leading-[130%]">
                Details & Discipline
              </p>
            </div>

            <div className="absolute inset-0 flex md:translate-y-[10%] items-start justify-center px-6">
              <div className="max-w-[900px] text-start space-y-4">
                <h2 className="salo text-[#262666] uppercase tracking-tight leading-none" style={{ fontSize: "clamp(48px, 10vw, 200px)" }}>
                  Precision <br /> Tailored
                </h2>
                <p className="jost text-black/40 text-[14px] md:text-[18px] xl:text-[40px] tracking-tight leading-[140%]">
                  Crafted through generations of expertise, each piece reflects precision and purpose.
                  A seamless blend of heritage and refinement, tailored for the modern gentleman.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 3 ── */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="w-[100vw] h-full flex-shrink-0 flex items-center justify-center bg-white px-6 md:px-16"
        >
          <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center gap-10 md:gap-20">

            <div className="w-full md:w-1/2 flex justify-center">
              <img src={syedLeftImg} alt="syedImg" className="w-full object-contain" />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-start h-full gap-10">
              <div className="text-center md:text-start">
                <p className="jost font-[400] mt-4 text-[14px] capitalize md:text-[25px] text-black leading-[140%] tracking-tight">
                  Full-canvas tailoring rooted in generations of expertise.
                  A seamless blend of time-honoured{" "}
                  <span className="salo md:text-[40px] text-[#262666]">craftsmanship and modern refinement.</span>{" "}
                  Hand-cut, individually measured, and meticulously finished.
                  Every garment is tailored to achieve a flawless fit and enduring sophistication.
                </p>
              </div>

              <div ref={addIconRef} data-speed="0.5" data-rotate="0" data-rotate-range="0" style={{ willChange: "transform" }} className="flex justify-center md:justify-start">
                <img src={tagImg} alt="icon" className="w-[120px] md:w-[180px] object-contain -rotate-[20deg]" />
              </div>

              <div className="flex w-full md:justify-center">
                <img src={syedCardImg} alt="syed-card-image" className="w-[120px] md:w-[350px] object-contain -rotate-[10deg]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}