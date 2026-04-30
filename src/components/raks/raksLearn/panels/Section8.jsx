import React from "react";

import centerImg from "../../../../assets/client/raks/img/panel8.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section8 = () => {
  return (
    <section className="h-screen flex overflow-hidden"
    style={{
                backgroundImage: `url(${grid})`,
                backgroundPosition: "center",
                backgroundColor: "white",
              }}>

      {/* ───── LEFT TEXT ───── */}
      <div className="w-[50vw] h-full flex items-center px-[clamp(20px,4vw,80px)]">
        <div className=" space-y-[clamp(10px,2vw,30px)] text-start">
          
          <h2 className="salo capitalize text-[#000085] tracking-tight leading-none
            text-[clamp(30px,8vw,120px)]">
            The Art of Growing Minds
          </h2>

          <p className="jost capitalize font-[500] text-black leading-[160%] tracking-tight
            text-[clamp(14px,2vw,26px)]">
            Haus of Chaos app branding exercise—an exploration of childhood and the Reggio Emilia philosophy. 
            Through playful geometries, modular systems, and <span className="md:text-[40px] salo text-[#000085]">expressive visuals</span>, 
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
    </section>
  );
};

export default Section8;