import React from "react";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import delightImg from "../../../../assets/client/padlr/img/courtPanelImg4.png";
import topImg from "../../../../assets/client/padlr/img/courtPanelImg3.png";
import paddle from "../../../../assets/client/padlr/img/batIcon.png";
import circleImg from "../../../../assets/client/padlr/img/heroImg1.png";


const MobCourtSec4 = () => {
  return (
    <section
      className="w-full relative h-[90vh] flex flex-col justify-between px-5 py-8"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >

      {/* ─── TOP ROW ─── */}
      <div className="flex justify-between items-start">

        {/* LEFT IMAGE */}
        <img
          src={delightImg}
          alt=""
          className="w-[220px] absolute top-0 left-0"
        />

        {/* RIGHT BAT */}
        <img
          src={paddle}
          alt=""
          className="w-[100px] absolute top-[5%] right-[5%]"
        />

      </div>

      {/* ─── CENTER TEXT ─── */}
      <div className="mt-8 absolute left-[10%] top-[35%] max-w-[300px] text-start">

        {/* HEADING */}
        <h1 className="salo text-[#8FC4E9] text-[80px] tracking-wider leading-none mb-4">
          TYPEFACE
        </h1>

        {/* PARAGRAPH */}
        <p className="jost text-black text-[14px] capitalize leading-[13px]">
          The typography system balances bold expression with refined clarity—
          where the primary typeface delivers a strong, modern identity, and the
          secondary typeface ensures{" "}
          <span className="salo text-[#8FC4E9] text-[16px]">
            versatility and seamless
          </span>{" "}
          readability across all brand touchpoints.
        </p>

      </div>

      {/* ─── BOTTOM ROW ─── */}
      <div className="flex justify-between items-end mt-10">

        {/* LEFT IMAGE */}
        <img
          src={circleImg}
          alt=""
          className="w-[120px]"
        />

        {/* RIGHT IMAGE */}
        <img
          src={topImg}
          alt=""
          className="w-[220px] absolute bottom-[2%] right-0"
        />

      </div>

    </section>
  );
};

export default MobCourtSec4;