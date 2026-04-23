import React from "react";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import springImg from "../../../../assets/client/padlr/img/heroImg3.png";
import canImg from "../../../../assets/client/padlr/img/heroImg4.png";
import batImg from "../../../../assets/client/padlr/img/heroImg2.png";

const Section2 = () => {
  return (
    <div className="w-[140vw] h-screen flex-shrink-0 relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative w-full h-full max-w-[1600px] mx-auto">

        {/* TOP LEFT */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 xl:top-14 xl:left-14">
          <img
            src={springImg}
            alt=""
            className="w-[60px] md:w-[90px] xl:w-[180px] 2xl:w-[160px] -rotate-12"
          />
        </div>

        {/* RIGHT CENTER */}
        <div className="absolute right-6 md:right-10 xl:right-14 top-1/2 -translate-y-1/2">
          <img
            src={canImg}
            alt=""
            className="w-[60px] md:w-[90px] xl:w-[200px] 2xl:w-[180px] -rotate-12"
          />
        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 xl:bottom-14 xl:left-14">
          <img
            src={batImg}
            alt=""
            className="w-[60px] md:w-[90px] xl:w-[200px] 2xl:w-[180px]"
          />
        </div>

        {/* RIGHT BOTTOM TEXT */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 xl:bottom-20 xl:right-14 text-right">
          <p className="jost uppercase font-[500] text-black text-[14px] md:text-[28px] xl:text-[50px] tracking-tight 2xl:text-[52px] leading-[130%]">
            Energy & Experience
          </p>
        </div>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-[900px] text-start space-y-6">

            <h2
              className="salo text-[#0606BC] uppercase leading-none"
              style={{ fontSize: "clamp(48px, 10vw, 200px)" }}
            >
              Performance <br /> Driven
            </h2>

            <p className="jost text-black text-[14px] md:text-[18px] xl:text-[40px] 2xl:text-[26px] tracking-tight leading-[140%]">
              Move Better Every Day. Designed for Daily Motion, engineered for
              Performance built for Strength & Balance.
            </p>

          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full py-5 bg-[#0606BC]" />
    </div>
  );
};

export default Section2;