import React from "react";

import leftImg from "../../../../assets/client/raks/img/panel6.png";
import rightImg from "../../../../assets/client/raks/img/panel7.png";
import centerIcon from "../../../../assets/client/raks/img/heroImg2.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section7 = () => {
  return (
    <section className="h-screen flex"
    style={{
            backgroundImage: `url(${grid})`,
            backgroundPosition: "center",
            backgroundColor: "white",
          }}>

      {/* ───── LEFT IMAGE  ───── */}
      <div className="w-[50vw] h-full relative overflow-hidden">
        <img
          src={leftImg}
          alt="left"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ───── CENTER CONTENT ───── */}
      <div className="w-[30vw] h-full flex items-center justify-center px-[clamp(20px,5vw,120px)]">

        {/* INNER WRAPPER */}
        <div className="text-center max-w-[500px] space-y-[clamp(16px,2vw,44px)]">

          {/* ICON */}
          <img
            src={centerIcon}
            alt="icon"
            className="mx-auto object-contain"
            style={{ width: "clamp(60px,14vw,200px)" }}
          />

          {/* HEADING */}
          <h2 className="salo text-start uppercase text-black leading-none
            text-[clamp(40px,12vw,60px)]">
            Creative Play
          </h2>

          {/* PARAGRAPH */}
          <p className="jost text-start text-black leading-[140%] tracking-tight
            text-[clamp(14px,1.8vw,30px)]">
           Where Little Ideas Turn Into Big Creations A Space to Imagine, Build, and Grow Where Little Ideas Turn Into Big Creations Innovation.
          </p>

        </div>

      </div>

      {/* ───── RIGHT IMAGE ───── */}
      <div className="w-[80vw] h-full relative overflow-hidden">
        <img
          src={rightImg}
          alt="right"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default Section7;