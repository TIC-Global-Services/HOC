import React from "react";
import clientImg from "../../../assets/client/gopalan/clientImg.png";

const MobFuture = () => {
  return (
    <section className="w-full h-[100%] bg-white flex flex-col px-5 py-10">

      {/* ─── TOP HEADING ─── */}
      <h2 className="salo text-[#E96428] text-[30px] leading-[110%] tracking-tight text-start">
        Building Legacy, Shaping the Future
      </h2>

      {/* ─── CENTER IMAGE ─── */}
      <div className="w-full flex justify-end my-8">
        <img
          src={clientImg}
          alt="Future"
          className="w-[90%] max-h-[195px] object-cover"
        />
      </div>

      {/* ─── BOTTOM TEXT ─── */}
      <p className="jost font-medium text-[13px] leading-[24px] tracking-[-0.03em] capitalize text-black text-start">
        A brand transformation shaped by legacy and growth—translating four
        decades of trust into a{" "}
        
        <span className="salo text-[#E96428] text-[20px] leading-[24px] capitalize">
          cohesive identity
        </span>{" "}
        
        for a multi-vertical future. An identity evolution rooted in heritage,
        designed to unify diverse verticals under a clear, future-ready visual system.
      </p>

    </section>
  );
};

export default MobFuture;