import React from "react";
import clientImg from "../../assets/client/gopalan/clientImg.png"; 

const GopalanFuture = () => {
  return (
    <section className="relative w-full min-h-screen bg-white mt-[2%] overflow-hidden py-[6%]">

      {/* TOP HEADING */}
      <h2
        className="absolute salo text-[#E96428] tracking-tight leading-[100%]"
        style={{
          top: "5%",
          left: "5%",
          fontSize: "clamp(40px,8vw,120px)",
        }}
      >
        Building Legacy, Shaping the Future
      </h2>

      {/* CENTER IMAGE */}
      <div className="w-full flex justify-end py-[8%]">
        <img
          src={clientImg}
          alt="Future"
          className="w-[90%] h-screen object-cover"
        />
      </div>

      {/* BOTTOM PARAGRAPH */}
      <p
        className="absolute jost text-start capitalize text-black font-[500] leading-[140%] mb-[2%]  tracking-tight"
        style={{
          bottom: "0",
          left: "5%",
          fontSize: "clamp(16px,1.8vw,26px)",
          maxWidth: "60%"
        }}
      >
        A brand transformation shaped by legacy and growth—translating four
        decades of trust into a{" "}
        <span className="salo text-[40px] text-[#E96428]">
          cohesive identity
        </span>{" "}
        for a multi-vertical future. An identity evolution rooted in heritage,
        designed to unify diverse verticals under a clear, future-ready visual system.
      </p>

    </section>
  );
};

export default GopalanFuture;