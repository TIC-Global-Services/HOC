import React from "react";
import clientImg from "../../assets/client/gopalan/clientImg.png"; 

const GopalanFuture = () => {
  return (
    <section className="w-full min-h-screen bg-white text-white flex flex-col items-center justify-center  py-16">

      {/* TOP HEADING */}
      <h2 className="salo text-[40px] md:text-[120px] text-[#E96428]  text-center tracking-tight mb-2">
        Building Legacy, Shaping the Future
      </h2>

      {/* CENTER IMAGE */}
      <div className="w-full flex justify-end mb-10">
        <img
          src={clientImg}
          alt="Future"
          className="w-[90%] h-screen object-cover"
        />
      </div>

      {/* BOTTOM PARAGRAPH */}
      <div className="flex flex-col justify-start">
      <p className="jost capitalize text-start text-[16px] font-[500] md:text-[26px] max-w-[850px] leading-[140%] tracking-tight text-black">
        A brand transformation shaped by legacy and growth—translating four decades of trust into a <span className="salo md:text-[44px] text-[#E96428]">cohesive identity</span> for a multi-vertical future. 
        An identity evolution rooted in heritage, designed to unify diverse verticals under a clear, future-ready visual system.
      </p>
      </div>

    </section>
  );
};

export default GopalanFuture;