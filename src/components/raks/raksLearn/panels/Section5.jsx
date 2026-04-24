import React from "react";
import leftImg from "../../../../assets/client/raks/img/panel4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section5 = () => {
  return (
    <section
      className="w-full h-screen flex relative"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#FFCEC8",
      }}
    >

      {/* LEFT IMAGE */}
      <div className="w-[70%] h-full relative overflow-hidden">
        <img
          src={leftImg}
          alt="visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ABSOLUTE RIGHT CENTER TEXT */}
      <div className="
        absolute 
        top-1/2 right-[clamp(20px,5vw,100px)] 
        -translate-y-1/2
        text-start
      ">
        <h2
          className="salo uppercase text-black leading-none"
          style={{ fontSize: "clamp(40px,10vw,200px)" }}
        >
          Play <br /> Bold <br /> Win.
        </h2>
      </div>

    </section>
  );
};

export default Section5;