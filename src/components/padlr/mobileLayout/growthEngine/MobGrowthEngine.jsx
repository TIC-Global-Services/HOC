import React from "react";
import computerImg from "../../../../assets/client/padlr/img/Group.png";
import paddleLogoImg from "../../../../assets/client/padlr/img/heroImg2.png";
import aboutVideo from "../../../../assets/client/padlr/vdo/Padlr_Animation 2.mp4";
import MobSection2 from "./MobSection2";
import MobSection3 from "./MobSection3";

const MobGrowthEngine = () => {
  return (
    <>
    <section className="w-full min-h-screen bg-[#0606BC] overflow-hidden flex flex-col">
      {/* ── TOP BAR ── */}
      <div
        className="relative flex items-center px-5 border-b border-white"
        style={{ height: "15%" }}
      >
        <h1 className="salo text-[60px] text-white uppercase leading-none">
          GROWTH ENGINE
        </h1>
      </div>

      {/* ── TEXT GRID BOX ── */}
      <div
        className="border-b border-white"
        style={{
          height: "36vh", // 3 rows × 12vh
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
        }}
      >
        {["TRACKED.", "ANALYZED.", "OPTIMIZED."].map((text, i) => (
          <div key={i} className="flex items-center px-5 border-b border-white">
            <span className="salo text-[60px] text-white uppercase">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* ── ABOUT TEXT ── */}
      <div className="relative px-5 py-10">
        {/* LOGO (TOP RIGHT) */}
        <div
          className="absolute"
          style={{
            top: "1rem",
            right: "1rem",
            width: "clamp(60px,10vw,120px)",
          }}
        >
          <img src={paddleLogoImg} alt="" className="w-full object-contain" />
        </div>

        {/* CONTENT */}
        <div
        >
          {/* TITLE */}
          <p
            className="salo text-start text-[60px] text-white uppercase mb-2"
          >
            ABOUT
          </p>

          {/* PARAGRAPH */}
          <p
            className="jost capitalize text-[16px] text-start text-white leading-[15px] border-t border-white"
          >
            Padlr is built to power modern digital ecosystems. From fragmented
            data to unified intelligence, every interaction is transformed into
            actionable insight.
          </p>
        </div>
      </div>

      {/* ── VIDEO ── */}
      <div className="flex-1 w-full overflow-visible">
        <video
          src={aboutVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* Sections*/}
    <MobSection2 />
    <MobSection3 />

    </>
  );
};

export default MobGrowthEngine;
