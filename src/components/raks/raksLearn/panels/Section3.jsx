import React from "react";
import emPowerImg from "../../../../assets/client/raks/img/panel2.png";
import viVidImg from "../../../../assets/client/raks/img/heroImg1.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section3 = () => {
  return (
    <section className="h-screen flex flex-shrink-0 relative overflow-visible">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${grid})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* LEFT IMAGE */}
  <div className="w-1/2 h-full md:ml-[10%] relative overflow-hidden">
    <img
      src={emPowerImg}
      alt="visual"
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="w-[50%] h-full flex flex-col items-center justify-center px-[clamp(20px,4vw,80px)] text-center relative z-10">

    <p className="jost text-black leading-[120%] text-start font-[500] tracking-tight
      text-[clamp(16px,4vw,60px)]">
      "Empowering Voices. <br /> Inspiring Minds. <br /> Shaping Future."
    </p>

    <img
      src={viVidImg}
      alt="icon"
      className="object-contain md:mt-[10%] -rotate-12"
      style={{ width: "clamp(60px,20vw,650px)" }}
    />

  </div>

</section>
  );
};

export default Section3;
