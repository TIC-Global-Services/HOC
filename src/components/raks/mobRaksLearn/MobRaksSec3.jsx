import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

import topImg from "../../../assets/client/raks/img/panel2.png";
import leftIcon from "../../../assets/client/raks/img/heroImg2.png";
import grid from "../../../assets/client/padlr/img/checkBg.png";

const MobRaksSec3 = () => {
  const iconRef = useRef(null);

  useScrollFloat(iconRef, { yFactor: 0.6, rFactor: 0.6 });

  return (
    <section
      className="w-full h-screen flex flex-col"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full">
        <img
          src={topImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ─── BOTTOM CONTENT ─── */}
      <div className="w-full h-full flex items-center justify-between px-5">

        {/* LEFT ICON  */}
        <div ref={iconRef} className="w-[120px]">
          <img
            src={leftIcon}
            alt="icon"
            className="w-full object-contain"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="max-w-[200px] text-start">
          <p className="jost text-black text-[16px] leading-[120%] capitalize">
            "Empowering Voices. <br /> Inspiring Minds. <br /> Shaping The
            Future."
          </p>
        </div>

      </div>

    </section>
  );
};

export default MobRaksSec3;