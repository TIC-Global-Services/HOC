import React from "react";

import centerImg from "../../../../assets/client/raks/img/panel8.png";
import raksVideo from "../../../../assets/client/raks/vdo/raks.mp4";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section8 = () => {
  return (
    <section className="w-[200vw] h-screen flex overflow-hidden"
    style={{
                backgroundImage: `url(${grid})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "white",
              }}>

      {/* ───── LEFT TEXT ───── */}
      <div className="w-[50vw] h-full flex items-center px-[clamp(20px,4vw,80px)]">
        <div className=" space-y-[clamp(10px,2vw,30px)] text-start">
          
          <h2 className="salo capitalize text-[#000085] leading-none
            text-[clamp(30px,10vw,150px)]">
            The Art of Growing Minds
          </h2>

          <p className="jost capitalize text-black leading-[160%] tracking-tight
            text-[clamp(14px,2vw,25px)]">
            Haus of Chaos app branding exercise—an exploration of childhood and the Reggio Emilia philosophy. 
            Through playful geometries, modular systems, and <span className="md:text-[40px] salo text-[#000085]">expressive visuals</span>, 
            the identity balances clarity with imagination while remaining cohesive across institutions.
          </p>

        </div>
      </div>

      {/* ───── CENTER IMAGE ───── */}
      <div className="w-[50vw] h-full relative overflow-hidden flex items-center justify-center">
        <img
          src={centerImg}
          alt="center"
          className="w-full object-cover"
          
        />
      </div>

      {/* ───── RIGHT TEXT ───── */}
      <div className="w-[30vw] h-full flex items-center px-[clamp(20px,4vw,80px)]">
        <div className="max-w-[400px] space-y-[clamp(10px,2vw,30px)] text-start">
          
          <h2 className="salo uppercase text-black leading-none
            text-[clamp(30px,5vw,80px)]">
            Future Vision
          </h2>

          <p className="jost text-black leading-[140%] tracking-tight
            text-[clamp(14px,1.5vw,20px)]">
            Designed to adapt, built to inspire. A forward-thinking approach
            that blends innovation with timeless design.
          </p>

        </div>
      </div>

      {/* ───── END VIDEO ───── */}
      <div className="w-[70vw] h-full relative overflow-hidden">
        <video
          src={raksVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default Section8;