import React from "react";

import leftImg from "../../../../assets/client/raks/img/panel3.png";
import innocenceCallouts from "../../../../assets/client/raks/img/heroImg3.png";
import learnCallouts from "../../../../assets/client/raks/img/raksLearn.png";
import viVidCallouts from "../../../../assets/client/raks/img/heroImg1.png";
import pragmaCallouts from "../../../../assets/client/raks/img/heroImg4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section4 = () => {
  return (
    <section className="w-full h-screen flex relative overflow-hidden" 
    style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

      {/* ───── LEFT IMAGE ───── */}
      <div className="w-1/2 h-full relative">
        <img
          src={leftImg}
          alt="visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ───── RIGHT CONTENT ───── */}
      <div className="w-1/2 h-full relative flex items-center justify-center px-[clamp(20px,4vw,80px)]">

        {/* CENTER TEXT */}
        <div className="text-center max-w-[700px] space-y-[clamp(16px,2vw,30px)]">

          <h2 className="salo text-start text-black uppercase leading-none
            text-[clamp(32px,5vw,80px)]">
            Where Curiosity Meets a New Way of Learning
          </h2>

          <p className="jost text-start text-black leading-[140%] tracking-tight
            text-[clamp(14px,1.5vw,22px)]">
            “At RAKS Pallikkoodam, every student is nurtured to grow with confidence, curiosity, and 
            creativity—empowered to learn, explore, and shine every single day.”
          </p>

        </div>

        {/* ───── CORNER ICONS ───── */}

        {/* TOP LEFT */}
        <img
          src={innocenceCallouts}
          alt="icon"
          className="absolute object-contain"
          style={{
            top: "clamp(20px,4vw,60px)",
            left: "clamp(20px,4vw,60px)",
            width: "clamp(50px,12vw,200px)",
          }}
        />

        {/* TOP RIGHT */}
        <img
          src={learnCallouts}
          alt="icon"
          className="absolute object-contain"
          style={{
            top: "clamp(20px,4vw,60px)",
            right: "clamp(20px,4vw,60px)",
            width: "clamp(50px,12vw,200px)",
          }}
        />

        {/* BOTTOM LEFT */}
        <img
          src={viVidCallouts}
          alt="icon"
          className="absolute object-contain"
          style={{
            bottom: "clamp(20px,4vw,60px)",
            left: "clamp(20px,4vw,60px)",
            width: "clamp(50px,12vw,200px)",
          }}
        />

        {/* BOTTOM RIGHT */}
        <img
          src={pragmaCallouts}
          alt="icon"
          className="absolute object-contain"
          style={{
            bottom: "clamp(20px,4vw,60px)",
            right: "clamp(20px,4vw,60px)",
            width: "clamp(50px,12vw,200px)",
          }}
        />

      </div>

    </section>
  );
};

export default Section4;