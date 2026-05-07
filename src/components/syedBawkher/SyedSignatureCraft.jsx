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
  iconRefs.current = [];

  const addIconRef = (el) => {
    if (el) iconRefs.current.push(el);
  };

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    const widths = sections.map((s) => s.offsetWidth);
    const totalWidthPx = widths.reduce((acc, w) => acc + w, 0);
    const totalScroll = totalWidthPx - window.innerWidth;

    gsap.set(container, { width: totalWidthPx });

    const qs = iconRefs.current.map((el) => ({
      setX: gsap.quickTo(el, "x", { duration: 1, ease: "power3.out" }),
      setY: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
      setR: gsap.quickTo(el, "rotation", { duration: 1, ease: "power3.out" }),
      el,
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

        setX(velocity * speed * 10);
        setY(velocity * speed * 1);
        setR(baseRotate + velocity * speed * 0.6);
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

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
    <div className="h-screen w-[320vw] overflow-hidden">
      <div ref={containerRef} className="flex h-full">
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="h-screen shrink-0 flex overflow-hidden"
          style={{ backgroundColor: BEIGE }}
        >
          {/* ───────── LEFT CONTENT PANEL ───────── */}
          <div className="w-[70vw] h-full flex flex-col border-r-2 border-white relative">
            {/* TOP AREA */}
            <div className="relative border-b-2 border-white px-[3vw] py-[3vh]">
              {/* TITLE */}
              <h1
                className="salo uppercase text-start leading-none text-[#262666]"
                style={{
                  fontSize: "clamp(50px,10vw,220px)",
                  lineHeight: "0.9",
                }}
              >
                Signature Craft
              </h1>

              {/* FLOATING ICON */}
              <div className="absolute top-[10%] right-[6%]">
                <img
                  ref={addIconRef}
                  src={circleLogoImg}
                  alt=""
                  className="w-auto object-contain"
                  style={{
                    height: "clamp(80px,10vw,220px)",
                  }}
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
                      style={{
                        fontSize: "clamp(26px,6vw,110px)",
                        lineHeight: "0.9",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}

                {/* BOTTOM LOGO */}
                <div className="flex items-center justify-end px-[2vw] py-[3vh]">
                  <img
                    ref={addIconRef}
                    src={elegantLogoImg}
                    alt=""
                    className="object-contain"
                    style={{
                      width: "clamp(100px,12vw,260px)",
                    }}
                  />
                </div>
              </div>

              {/* RIGHT ABOUT */}
              <div className="w-[55%] flex flex-col justify-center">
                <p
                  className="salo text-start px-[5%] uppercase text-[#262666]"
                  style={{
                    fontSize: "clamp(20px,4vw,60px)",
                  }}
                >
                  About
                </p>

                <p
                  className="jost text-[#262666] px-[5%] text-start capitalize border-t-2 border-b-2 border-white py-[4vh] mt-[2vh]"
                  style={{
                    fontSize: "clamp(14px,1.8vw,28px)",
                    lineHeight: "150%",
                  }}
                >
                  Syed Bawkher is built on a legacy of precision tailoring and
                  enduring craftsmanship. From the first measurement to the
                  final stitch, every garment is shaped with intent —
                  transforming fine materials into timeless elegance.
                </p>
              </div>
            </div>
          </div>

          {/* ───────── RIGHT IMAGE BLOCK ───────── */}
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
          className="w-[100vw] h-screen relative overflow-hidden"
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
          {/* Content */}
          <div className="relative z-10 h-full">
            {/* FLOATING IMAGES */}
            {[
              { img: syedCircleImg, top: "10%", left: "5%" },
              { img: texturalImg, top: "10%", right: "15%" },
              { img: elegantPairImg, bottom: "10%", left: "5%" },
            ].map((item, i) => (
              <div
                key={i}
                ref={addIconRef}
                data-speed="0.8"
                className="absolute"
                style={{ ...item, width: "clamp(80px,14vw,320px)" }}
              >
                <img src={item.img} className="w-full" />
              </div>
            ))}

            {/* TEXT */}
            <div className="absolute top-[20%] flex items-center justify-center px-[8%]">
              <div style={{ maxWidth: "60%" }}>
                <h2
                  className="salo uppercase text-start text-[#262666] tracking-tight leading-none"
                  style={{ fontSize: "clamp(48px,22vh,200px)" }}
                >
                  Precision <br /> Tailored
                </h2>

                <p
                  style={{ fontSize: "clamp(12px,20vh,26px)" }}
                  className="jost text-start text-black/50 leading-[120%] tracking-tight mt-2 pl-3"
                >
                  Crafted through generations of expertise, each piece reflects
                  precision and purpose. A seamless blend of heritage and
                  refinement, tailored for the modern gentleman.
                </p>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-[10%] right-[10%]">
              <p className="jost font-[500] tracking-tight uppercase text-base md:text-[40px] ">
                DETAIL & DISCIPLINE
              </p>
            </div>
          </div>
        </div>

        {/* ───────── SECTION 4 (AUTO IMAGE BLOCK) ───────── */}
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

        {/* ───────── SECTION 3 ───────── */}
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="w-[45vw] h-full relative bg-white overflow-visible"
        >
          {/* RIGHT CONTENT */}
          <div
            className="absolute flex flex-col justify-between"
            style={{
              right: "10%",
              top: "5%",
              bottom: "5%",
              width: "clamp(320px,35vw,550px)",
            }}
          >
            {/* TEXT (TOP) */}
            <p
              className="jost text-start text-black capitalize"
              style={{
                fontSize: "clamp(14px,3.5vh,26px)",
                lineHeight: "150%",
              }}
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

            {/* IMAGE WRAPPER (BOTTOM) */}
            <div className="relative flex justify-center">
              {/* TAG */}
              <div
                ref={addIconRef}
                className="absolute z-[20]"
                style={{
                  left: "0%",
                  top: "0%",
                  width: "clamp(120px,10vw,180px)",
                  transform: "rotate(30deg)",
                }}
              >
                <img src={tagImg} className="w-full -rotate-[20deg]" />
              </div>

              {/* CARD */}
              <div
                className="relative"
                style={{
                  width: "clamp(160px,45vh,400px)",
                  transform: "rotate(-10deg)",
                }}
              >
                <img src={syedCardImg} className="w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
