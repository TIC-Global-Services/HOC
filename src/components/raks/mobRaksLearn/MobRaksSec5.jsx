import React from "react";

import leftImg from "../../../assets/client/raks/img/Panel4.jpg";

import GridOverlay from "../../GridOverlay";

const MobRaksSec5 = () => {
  return (
    <section
      className="w-full h-screen flex flex-col relative overflow-hidden bg-[#FFCEC8]"
    >

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full flex-1 relative z-10">
        <img
          src={leftImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ─── BOTTOM CONTENT ─── */}
      <div className="w-full h-[30vh] flex items-center justify-center px-5 relative z-10">

        <h2 className="salo uppercase text-white text-center leading-none text-[50px]">
          Play Bold Win
        </h2>
      </div>
    </section>
  );
};

export default MobRaksSec5;