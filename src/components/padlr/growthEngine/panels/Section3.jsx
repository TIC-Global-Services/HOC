import React from "react";

import visualImg from "../../../../assets/client/padlr/img/visualImg.png";
import palatteImg from "../../../../assets/client/padlr/img/courtImg2.png";
import attachIcon from "../../../../assets/client/padlr/img/attachIcon.png";

const Section3 = () => {
  return (
    <section className="relative h-screen flex bg-white overflow-hidden">

      {/* LEFT */}
      <div className="relative w-[45%] h-full">
        <img
          src={visualImg}
          alt="visual"
          className="absolute inset-0 left-0 w-full h-full object-contain object-top"
        />
      </div>

      {/* RIGHT */}
      <div className="w-[55%] h-full flex flex-col gap-10 px-[4%] py-[2%]">

        {/* TOP TEXT */}
        <div className="w-full flex justify-start">
          <div className="max-w-[80%]">
            <p className="jost text-start capitalize font-[500] text-black tracking-tight leading-[130%] text-[clamp(14px,1.8vw,26px)]">
              Maintains visual balance with neutral tones inspired by real court
              elements. Communicates precision and modernity through a
              distinctive, high-impact typeface
            </p>
          </div>
        </div>

        {/* BOTTOM IMAGE */}
        <div className="w-full flex justify-center">
          <div className="relative">

            {/* PIN */}
            <img
              src={attachIcon}
              alt="pin"
              className="absolute z-10"
              style={{
                top: "5%",
                left: "-15%",
                width: "clamp(28px,2.5vw,55px)",
              }}
            />

            {/* MAIN IMAGE */}
            <img
              src={palatteImg}
              alt="palette"
              className="object-contain"
              style={{
                width: "clamp(180px,22vw,500px)",
                transform: "rotate(-12deg)",
              }}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#0606BC]" />
    </section>
  );
};

export default Section3;