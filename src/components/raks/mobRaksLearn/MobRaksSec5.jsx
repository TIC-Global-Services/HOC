import React from "react";

import leftImg from "../../../assets/client/raks/img/panel4.png";
import grid from "../../../assets/client/padlr/img/checkBg.png";

const MobRaksSec5 = () => {
  return (
    <section
      className="w-full h-screen flex flex-col"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundPosition: "center",
        backgroundColor: "#FFCEC8",
      }}
    >
      {/* ─── TOP IMAGE ─── */}
      <div className="w-full flex-1 relative">
        <img src={leftImg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* ─── BOTTOM CONTENT ─── */}
      <div className="w-full h-[30vh] flex items-center justify-center px-5">
        <h2 className="salo uppercase text-white text-center leading-none text-[50px]">
          Play Bold Win
        </h2>
      </div>
    </section>
  );
};

export default MobRaksSec5;
