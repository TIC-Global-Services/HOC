import React from "react";

import topImg from "../../../assets/client/raks/img/panel6.png";
import iconImg from "../../../assets/client/raks/img/heroImg2.png";
import grid from "../../../assets/client/padlr/img/checkBg.png";

const MobRaksSec8 = () => {
  return (
    <section className="w-full min-h-screen flex flex-col"
    style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}>

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full">
        <img
          src={topImg}
          alt="Top Visual"
          className="w-full object-cover"
        />
      </div>

      {/* ─── BOTTOM CONTENT ─── */}
      <div className="flex flex-col items-center px-5 py-20 gap-8">

        {/* ICON (CENTER) */}
        <img
          src={iconImg}
          alt="Icon"
          className="w-[150px]"
        />

        {/* HEADING (CENTER) */}
        <h2 className="salo text-[30px] text-center uppercase leading-none">
         Creative Play
        </h2>

        {/* PARAGRAPH (LEFT ALIGN) */}
        <p className="jost text-[16px] text-black leading-[140%] text-start max-w-[320px]">
          Where Little Ideas Turn Into Big Creations A Space to Imagine, Build, and Grow Where Little Ideas Turn Into Big Creations Innovation.
        </p>

      </div>

    </section>
  );
};

export default MobRaksSec8;