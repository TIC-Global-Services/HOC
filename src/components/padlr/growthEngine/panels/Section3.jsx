import React from "react";

import palatteImg from "../../../../assets/client/padlr/img/courtImg2.png";
import attachIcon from "../../../../assets/client/padlr/img/attachIcon.png";

const Section3 = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-white">

      {/* TOP TEXT */}
      <div
        className="
          absolute z-10
          w-[82%]
          lg:w-[78%]
          xl:w-[72%]
          2xl:w-[68%]
        "
        style={{
          top: "6%",
          left: "4%",
        }}
      >
        <p
          className="jost text-start capitalize font-[500] text-black tracking-tight leading-[130%]"
          style={{
            fontSize: "clamp(14px,4vh,26px)",
          }}
        >
          Maintains visual balance with neutral tones inspired by real court
          elements. Communicates precision and modernity through a distinctive,
          high-impact typeface
        </p>
      </div>

      {/* BOTTOM IMAGE */}
      <div
        className="absolute"
        style={{
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
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
              maxHeight: "70vh",
              transform: "rotate(-12deg)",
            }}
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#0606BC]" />

    </section>
  );
};

export default Section3;