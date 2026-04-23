import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import refinedImg from "../../assets/client/qatamaran/refinedImg.png";
import treeImg from "../../assets/client/qatamaran/heroFloat2.png";
import grid from "../../assets/client/padlr/img/checkBg.png";
import callOut from "../../assets/client/qatamaran/heroFloat1.png";
import refinedImg3 from "../../assets/client/qatamaran/block3Img.png";
import designImg from "../../assets/client/qatamaran/block4Top.png";
import iconCoromandelImg from "../../assets/client/qatamaran/coromandelCoast.png";
import glassIcon from "../../assets/client/qatamaran/heroFloat1.png";
import craftWaterImg from "../../assets/client/qatamaran/block4Right.png";
import topCubImage from '../../assets/client/qatamaran/syedCub.png'
import bottomCubImage from '../../assets/client/qatamaran/syedCub.png'
import tagImg1 from '../../assets/client/qatamaran/heroFloat3.png'
import tagImg2 from '../../assets/client/qatamaran/heroFloat4.png'


gsap.registerPlugin(ScrollTrigger);

export default function QataRefinedTailoring() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
  if (window.innerWidth < 768) return;

  const init = () => {
    const totalScroll = trackRef.current.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  };

  // wait for DOM to fully paint before measuring
  const raf = requestAnimationFrame(init);
  return () => cancelAnimationFrame(raf);
}, []);

  return (
    <section ref={wrapperRef}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#1E382D]">
        <div ref={trackRef} className="flex h-full" style={{ width: "500vw" }}>
          {/* ── BLOCK 1 ── */}
          <div
            className="relative w-full h-full flex"
            style={{
              backgroundImage: `url(${grid})`,
              backgroundSize: "cover",
              backgroundColor: "#1E382D",
            }}
          >
            {/* CENTER CONTAINER */}
            <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex h-screen">
              {/* LEFT IMAGE */}
              <div className="relative w-1/2 h-full">
                <img
                  src={refinedImg}
                  alt="refined"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* RIGHT PANEL */}
              <div className="relative w-1/2 h-full flex flex-col justify-between px-6 md:px-10 xl:px-14 py-10">
                {/* FLOAT TREE */}
                <img
                  src={treeImg}
                  alt="tree"
                  className="
                  absolute 
                  bottom-0 left-0 
                  w-[120px] md:w-[200px] xl:w-[280px]
                  object-contain 
                  z-10
                "
                />

                {/* TITLE */}
                <div className="absolute md:-right-80 top-1/2 -translate-y-1/2 z-20">
                  <h2
                    className="salo font-[400] text-white leading-none tracking-wide text-start"
                    style={{
                      fontSize: "clamp(48px, 20vw, 200px)",
                    }}
                  >
                    REFINED <br /> TAILORING
                  </h2>

                  <p
                    className="mt-4
                     font-[400] text-white/80 
                    text-start salo
                    text-[14px] md:text-[18px] xl:text-[40px]
                    leading-none uppercase
                  "
                  >
                    Crafted <br /> In Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── BLOCK 2 ── */}
          <div
            className="relative h-full flex flex-col py-10"
            style={{
              width: "100vw",
              flexShrink: 0,
              backgroundSize: "cover",
              backgroundColor: "#1E382D",
            }}
          >
            {/* paragraph */}
            <div className="md:absolute top-10 right-8 max-w-[400px]">
              <p className="jost font-[400] text-start text-white/80 text-[14px] md:text-[18px] xl:text-[20px] leading-relaxed">
                Qatamaran is a modern prêt-à-porter menswear label rooted in the
                rich heritage of Chennai’s tailoring tradition—where
                craftsmanship, precision, and timeless elegance converge.
                Designed for the contemporary gentleman, it brings together
                coastal inspiration.
              </p>
            </div>

            {/* image */}
            <div className="md:absolute md:bottom-10 md:left-1/2 -translate-x-1/4">
              <img
                src={callOut}
                alt="callOut_sticker"
                className="w-[60px] md:w-[70px] xl:w-[150px] object-contain -rotate-12"
              />
            </div>

            {/* heading */}
            <div className="md:absolute md:-right-80 md:-bottom-10 -translate-y-1/2 z-20">
              <h2
                className="salo font-[400] text-white leading-none text-end"
                style={{ fontSize: "clamp(48px, 20vw, 150px)" }}
              >
                COAST<span className="text-[#1E382D]">AL CRAFT</span>
              </h2>
            </div>
          </div>

          {/* ── BLOCK 3 ── */}
          <div
            className="relative h-full flex"
            style={{
              width: "200vw",
              flexShrink: 0,
              backgroundImage: `url(${grid})`,
              backgroundSize: "cover",
              backgroundColor: "white",
            }}
          >
            {/* LEFT — 40vw content */}
            <div
              className="relative h-full px-10 xl:px-14 py-10"
              style={{ width: "40vw", flexShrink: 0 }}
            >
              {/* TOP-LEFT PIN */}
              <div className="md:absolute md:top-15 md:left-10">
                <div className="relative">
                  {/* pin image */}
                  <img
                    src={topCubImage}
                    alt="tag"
                    className="w-[60px] md:w-[80px] xl:w-[290px] xl:h-[500px] object-cover -rotate-6"
                  />

                  {/* optional pin dot */}
                  <img src={tagImg1} alt="tagImage" className="absolute top-0 left-0 -translate-x-1/2 w-15 h-15 -rotate-6" />
                </div>
              </div>

              {/* BOTTOM-RIGHT PIN */}
              <div className="md:absolute md:bottom-20 md:right-10">
                <div className="relative">
                  <img
                    src={bottomCubImage}
                    alt="tag"
                    className="w-[60px] md:w-[80px] xl:w-[290px] xl:h-[290px]  object-cover rotate-12"
                  />

                  {/* optional pin dot */}
                  <img src={tagImg2} alt="tagImage" className="absolute top-0 left-0 -translate-x-1/2 w-10 h-10 rotate-12" />
                </div>
              </div>
            </div>

            {/* CENTER — 100vw image */}
            <div
              className="relative h-full"
              style={{ width: "100vw", flexShrink: 0 }}
            >
              <img
                src={refinedImg3}
                alt="refinedImg3"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* RIGHT — 60vw content */}
            <div
              className="h-full flex flex-col justify-between py-10"
              style={{ width: "60vw", flexShrink: 0 }}
            >
              {/* ── TOP ROW ── */}
              <div className="relative">
                {/* TOP LEFT IMAGE */}
                <div className="md:absolute md:max-w-[500px] left-0 top-0">
                  <img
                    src={designImg}
                    alt="craftDesign"
                    className="
                    w-[80px] 
                    md:w-[120px] 
                    xl:w-[500px] 
                    object-contain
                  "
                  />
                </div>

                {/* TOP RIGHT HEADING */}
                <div className="md:absolute md:right-0 center text-right z-20">
                  <h2
                    className="salo text-[#1E382D] leading-none"
                    style={{ fontSize: "clamp(40px, 10vw, 150px)" }}
                  >
                    TIMELESS
                  </h2>
                </div>
              </div>

              {/* ── MIDDLE ── */}
              <div className="flex justify-end mt-6">
                <img
                  src={iconCoromandelImg}
                  alt="iconCoromandel"
                  className="w-[60px] md:w-[90px] xl:w-[120px] object-contain"
                />
              </div>

              {/* ── BOTTOM TEXT CENTER ── */}
              <div className="flex justify-center items-center">
                <p
                  className="capitalize
                  jost text-black text-start
                  max-w-[700px]
                  text-[14px] md:text-[18px] xl:text-[26px]
                  leading-[140%]
                "
                >
                  Qatamaran is a contemporary prêt-à-porter menswear label
                  inspired by Chennai’s deep-rooted tailoring legacy. Blending
                  skilled craftsmanship with refined precision, the brand
                  embodies a sense of enduring elegance. Created for the modern
                  gentleman, it seamlessly fuses tradition with a subtle touch
                  of coastal influence, offering styles that are both
                  sophisticated and effortlessly distinctive.
                </p>
              </div>
            </div>
          </div>

          {/* ── BLOCK 4 ── */}
          <div
            className="relative h-full flex"
            style={{
              width: "100vw",
              flexShrink: 0,
              backgroundColor: "#1E382D",
            }}
          >
            {/* LEFT */}
            <div className="relative w-1/2 h-full flex flex-col justify-between px-6 md:px-10 xl:px-16 py-10">
              {/* HEADING */}
              <div className="w-full flex justify-center md:justify-start">
                <h2
                  className="salo font-[400] text-white leading-none text-center md:text-left"
                  style={{ fontSize: "clamp(48px, 10vw, 140px)" }}
                >
                  TAILORING
                </h2>
              </div>

              {/* ICON */}
              <div className="w-full flex justify-center pb-10 md:pb-16">
                <img
                  src={glassIcon}
                  alt="icon"
                  className="w-[70px] md:w-[100px] xl:w-[140px] rotate-12 object-contain"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative w-1/2 h-full">
              <img
                src={craftWaterImg}
                alt="waterImg"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
