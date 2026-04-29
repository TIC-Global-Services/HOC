import React from "react";

import leftImg from "../../../assets/client/raks/img/panel4.png";
import grid from "../../../assets/client/padlr/img/checkBg.png";

const MobRaksSec5 = () => {
  return (
    <section
      className="w-full h-[70vh] flex flex-col"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundPosition: "center",
        backgroundColor: "#FFCEC8",
      }}
    >

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full h-[50vh] relative">
        <img
          src={leftImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ─── BOTTOM CONTENT ─── */}
      <div className="w-full h-[20vh] flex justify-center px-5 py-[15%]">

        <h2 className="salo uppercase text-white text-center leading-none text-[50px]">
          Play Bold Win
        </h2>
      </div>
    </section>
  );
};

export default MobRaksSec5;