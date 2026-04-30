import React from "react";
import paddleLogoImg from "../../../../assets/client/padlr/img/heroImg2.png";
import aboutVideo from "../../../../assets/client/padlr/vdo/Padlr_Animation 2.mp4";

const MobSection = () => {
  return (
    <>
      <section className="w-full bg-[#0606BC] text-white relative">

        {/* TITLE */}
        <div className="px-4 py-14">
          <h1 className="text-start salo text-[60px] leading-none uppercase">
            Growth Engine
          </h1>
        </div>

        {/* ROWS */}
        <div className="flex flex-col border-t border-white">
          {["Tracked.", "Analyzed.", "Optimized."].map((text, i) => (
            <div key={i} className="border-b border-white px-4 py-10">
              <h2 className="salo text-start text-[60px] leading-none uppercase">
                {text}
              </h2>
            </div>
          ))}
        </div>

        {/* ABOUT SECTION */}
        <div className="text-start px-4 py-16 relative">
          {/* LOGO RIGHT */}
          <img
            src={paddleLogoImg}
            alt=""
            className="absolute right-4 top-6 w-[60px]"
          />

          {/* ABOUT TITLE */}
          <h2 className="salo text-[42px] leading-none uppercase mb-6">
            About
          </h2>

          {/* TEXT */}
          <p className="jost capitalize font-[300] text-[16px] leading-[120%] max-w-[340px] pt-3">
            Padlr is built to power modern digital ecosystems. From fragmented
            data to unified intelligence, every interaction is transformed into
            actionable insight.
          </p>
        </div>

        {/* VIDEO */}
        <div className="w-full bg-[#EAEAEA]">
          <video
            src={aboutVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default MobSection;