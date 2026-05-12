import React from "react";

import centerImg from "../../../../assets/client/raks/img/panel8.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import GridOverlay from "../../../GridOverlay";

const Section8 = () => {
  return (
    <section className="relative h-screen flex overflow-hidden"
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

      {/* CONTENT */}
      <div className="relative z-10 flex w-full h-full">

      {/* ───── LEFT TEXT ───── */}
      <div className="w-[45vw] h-full flex items-center px-[clamp(20px,4vw,80px)] ml-5">
        <div className=" space-y-[clamp(10px,2vw,30px)] text-start">
          
          <h2 className="salo capitalize text-[#000085] tracking-tight leading-none
            text-[clamp(30px,20vh,120px)]">
            The Art of <br /> Growing Minds
          </h2>

          <p className="jost capitalize  text-black leading-[42px] tracking-tight
            text-[clamp(14px,4vh,24px)] w-[32ch]">
            Haus of Chaos app branding exercise—an exploration of childhood and the Reggio Emilia philosophy. 
            Through playful geometries, modular systems, and <span className="text-[clamp(18px,5vh,36px)] salo text-[#000085]">expressive visuals</span>, 
            the identity balances clarity with imagination while remaining cohesive across institutions.
          </p>

        </div>
      </div>

      {/* ───── CENTER IMAGE ───── */}
      <div className="w-[40vw] h-full relative overflow-hidden">
        <img
          src={centerImg}
          alt="center"
          className="w-full h-full object-cover"
          
        />
      </div>
      </div>
    </section>
  );
};

export default Section8;