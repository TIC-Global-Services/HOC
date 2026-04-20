import React from "react";
import brandImg from "../../assets/client/gopalan/brandImg.png";

const GopalanEvolution = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden  text-white">

      {/* LEFT IMAGE */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
        <img
          src={brandImg}
          alt="Evolution"
          className="w-[100%] h-full object-cover"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex flex-col justify-center px-10">
        <h2 className="salo uppercase text-[#E96428] text-[40px] font-[400] text-start leading-none tracking-tight md:text-[170px] mb-6">
          Structured <br /> Evolution
        </h2>
      </div>

    </section>
  );
};

export default GopalanEvolution;