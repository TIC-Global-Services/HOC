import React from "react";
import visualImg from "../../../../assets/client/padlr/img/visualImg.png";
import spinIcon from "../../../../assets/client/padlr/img/heroImg1.png";
import palatteImg from "../../../../assets/client/padlr/img/courtImg2.png";
import attachIcon from "../../../../assets/client/padlr/img/attachIcon.png";

const Section3 = () => {
  return (
    <section className="relative w-full h-screen flex bg-white overflow-hidden">

      {/* LEFT */}
      <div className="relative w-1/2 h-full">
        <img
          src={visualImg}
          alt="visualImg"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>

      {/* RIGHT */}
      <div className="w-1/2 h-full flex flex-col justify-between px-6 md:px-10 xl:px-16 2xl:px-20 py-10">

        {/* TOP ICON */}
        <div>
          <img
            src={spinIcon}
            alt="icon"
            className="w-[60px] md:w-[80px] xl:w-[100px] 2xl:w-[120px] object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="max-w-[420px] md:max-w-[500px] xl:max-w-[600px]">
          <p className="jost font-[400] capitalize text-black text-[14px] md:text-[18px] xl:text-[22px] 2xl:text-[26px] leading-[130%] tracking-tight">
            Maintains visual balance with neutral tones inspired by real court
            elements. Communicates precision and modernity through a
            distinctive, high-impact typeface
          </p>
        </div>

        {/* BOTTOM IMAGE */}
        <div className="flex justify-center">
          <div className="relative inline-block">

            {/* PIN */}
            <img
              src={attachIcon}
              alt="pin"
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 xl:-top-8 xl:-left-8 w-[30px] md:w-[40px] xl:w-[50px] z-10"
            />

            {/* MAIN IMAGE */}
            <img
              src={palatteImg}
              alt="palatteImg"
              className="w-full max-w-[220px] md:max-w-[260px] xl:max-w-[300px] 2xl:max-w-[380px] object-contain -rotate-[30deg]"
            />
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 w-full py-5 bg-[#0606BC]" />

    </section>
  );
};

export default Section3;