import React from "react";

import leftImg from "../../../../assets/client/raks/img/panel5.png";
import topRightImg from "../../../../assets/client/raks/img/panel6Left.png";
import centerImg from "../../../../assets/client/raks/img/pallikoodam.png";
import pinImg from "../../../../assets/client/raks/img/heroImg1.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section6 = () => {
  return (
    <section
      className="w-[150vw] h-screen flex relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "white",
      }}
    >
      {/* ───── LEFT (50vw) ───── */}
      <div className="w-[50vw] h-full relative overflow-hidden">
        <img
          src={leftImg}
          alt="visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ───── RIGHT (100vw) ───── */}
      <div className="w-[100vw] h-full relative">
        {/* ─── TOP LEFT TEXT WRAPPER ─── */}
        <div className="absolute inset-0">
          {/* HEADING */}
          <div
            className="absolute text-start"
            style={{
              top: "clamp(20px,4vw,80px)",
              left: "clamp(40px,8vw,160px)",
            }}
          >
            <h2
              className="salo uppercase text-black leading-none
      text-[clamp(40px,8vw,120px)]"
            >
              Learn Beyond Limits
            </h2>
          </div>

          {/* PARAGRAPH */}
          <div
            className="absolute text-start max-w-[600px]"
            style={{
              top: "clamp(140px,18vw,200px)",
              left: "clamp(40px,8vw,160px)",
            }}
          >
            <p
              className="jost text-black font-[400] capitalize leading-[140%] tracking-tight
            text-[clamp(14px,2vw,26px)]"
            >
              From academics to arts and sports, every talent finds its place. A
              balanced approach to learning, creativity, and growth. Nurturing
              skills beyond the classroom for a brighter future.
            </p>
          </div>
        </div>

        {/* ─── TOP RIGHT IMAGE ─── */}
        <img
          src={topRightImg}
          alt="icon"
          className="absolute object-contain -rotate-[10deg]"
          style={{
            top: "clamp(40px,8vw,120px)",
            right: "clamp(40px,8vw,120px)",
            width: "clamp(60px,14vw,350px)",
          }}
        />

        {/* ─── CENTER IMAGE ─── */}
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "45%",
            transform: "translate(-50%, -15%) rotate(-10deg)",
          }}
        >
          {/* PIN */}
          <img
            src={pinImg}
            alt="pin"
            className="absolute z-10 -rotate-[30deg]"
            style={{
              top: "-5%",
              left: "-5%",
              width: "clamp(30px,8vw,120px)",
            }}
          />

          {/* MAIN IMAGE */}
          <img
            src={centerImg}
            alt="center"
            className="object-contain"
            style={{
              width: "clamp(200px,30vw,500px)",
            }}
          />
        </div>

        {/* ─── BOTTOM RIGHT TEXT ─── */}
        <h3
          className="salo uppercase text-[#000085] leading-none absolute text-start"
          style={{
            bottom: "clamp(40px,8vw,120px)",
            right: "clamp(40px,8vw,120px)",
            fontSize: "clamp(30px,8vw,150px)",
          }}
        >
          Curious <br /> Mind
        </h3>
      </div>
    </section>
  );
};

export default Section6;
