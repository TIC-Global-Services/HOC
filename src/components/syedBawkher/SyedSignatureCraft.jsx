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
        {/* ───────── SECTION 1 ───────── */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="w-[120vw] h-full flex flex-col"
          style={{ backgroundColor: BEIGE }}
        >
          {/* HEADER */}
          <div
            className="flex justify-between items-center px-[5%]"
            style={{ borderBottom: "2px solid white" }}
          >
            <h1
              className="salo text-[#262666] uppercase"
              style={{ fontSize: "clamp(60px,10vw,150px)" }}
            >
              SIGNATURE CRAFT
            </h1>

            <div ref={addIconRef} data-speed="0.5" data-rotate="-10">
              <img
                src={circleLogoImg}
                style={{ width: "clamp(100px,10vw,170px)" }}
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-1">
            {/* LEFT */}
            <div style={{ width: "30%", borderRight: "2px solid white" }}>
              {["Measured.", "Crafted.", "Perfected."].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center h-[33%] px-[5%]"
                  style={{ borderBottom: "2px solid white" }}
                >
                  <span
                    className="salo text-[#262666]"
                    style={{ fontSize: "clamp(40px,6vw,120px)" }}
                  >
                    {t}
                  </span>
                </div>
              ))}

              <div className="flex justify-center py-[5%]">
                <div ref={addIconRef} data-speed="0.5" data-rotate="-20">
                  <img
                    src={elegantLogoImg}
                    style={{ width: "clamp(140px,12vw,200px)" }}
                  />
                </div>
              </div>
            </div>

            {/* MIDDLE */}
            <div
              style={{ width: "30%" }}
              className="flex flex-col justify-center px-[5%]"
            >
              <p
                className="salo text-[#262666]"
                style={{ fontSize: "clamp(30px,4vw,60px)" }}
              >
                ABOUT
              </p>

              <p
                className="jost text-[#262666]"
                style={{
                  fontSize: "clamp(14px,1.5vw,26px)",
                  lineHeight: "140%",
                  borderTop: "2px solid white",
                  borderBottom: "2px solid white",
                  padding: "2%",
                }}
              >
                Syed Bawlher is Built On A Legacy Of Precision Tailoring...
              </p>
            </div>

            {/* RIGHT */}
            <div
              className="relative flex-1"
              style={{ borderLeft: "2px solid white" }}
            >
              <img
                src={craftImg}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ───────── SECTION 2 ───────── */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="w-[100vw] h-screen relative"
          style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
        >
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
          <div className="absolute inset-0 flex items-center justify-center px-[5%]">
            <div style={{ maxWidth: "60%" }}>
              <h2
                className="salo uppercase text-start text-[#262666] leading-none"
                style={{ fontSize: "clamp(48px,10vw,200px)" }}
              >
                Precision <br /> Tailored
              </h2>

              <p
                className="jost text-start text-black/50 leading-none"
                style={{ fontSize: "clamp(14px,2vw,26px)" }}
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

        {/* ───────── SECTION 3 ───────── */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="w-[80vw] h-full relative bg-white overflow-visible"
        >
          {/* LEFT IMAGE */}
          <div
            className="relative"
            style={{
              left: "-10%",
              bottom: "5%",
              width: "clamp(260px,40vw,680px)",
            }}
          >
            <img src={syedLeftImg} className="w-full object-cover" />
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="absolute flex flex-col justify-between"
            style={{
              right: "5%",
              top: "5%",
              bottom: "5%",
              width: "clamp(320px,35vw,500px)",
            }}
          >
            {/* TEXT (TOP) */}
            <p
              className="jost text-start text-black capitalize"
              style={{
                fontSize: "clamp(14px,1.6vw,26px)",
                lineHeight: "140%",
              }}
            >
              Full-canvas tailoring rooted in generations of expertise. A
              seamless blend of time-honoured{" "}
              <span
                className="salo font-[500] tracking-tight text-[#262666]"
                style={{ fontSize: "clamp(18px,2.5vw,40px)" }}
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
                  left: "10%",
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
                  width: "clamp(160px,20vw,350px)",
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
