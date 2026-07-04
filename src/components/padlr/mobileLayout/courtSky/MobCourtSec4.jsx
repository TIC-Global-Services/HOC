import React from "react";
import GridOverlay from "../../../GridOverlay";


const delightImg = "https://ik.imagekit.io/hoc01/assets/client/padlr/courtPanelImg4.png";
const topImg =
  "https://ik.imagekit.io/hoc01/assets/client/padlr/courtPanelImg3.png";

const paddle =
  "https://ik.imagekit.io/hoc01/assets/client/padlr/batIcon.png";

const circleImg =
  "https://ik.imagekit.io/hoc01/assets/client/padlr/heroImg1.png";



const MobCourtSec4 = () => {
  return (
    <section
      className="w-full relative h-screen flex flex-col justify-between px-5 py-8">
        {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

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
          className="w-[100px] sm:w-40 absolute top-[5%] right-[5%]"
        />

      </div>

      {/* ─── CENTER TEXT ─── */}
      <div className="mt-8 absolute left-[10%] top-[35%] max-w-[295px] sm:max-w-[350px] text-start">

        {/* HEADING */}
        <h1 className="salo text-[#8FC4E9] text-[80px] tracking-wider leading-[110%] mb-4">
          TYPEFACE
        </h1>

        {/* PARAGRAPH */}
        <p className="jost text-black text-[14px] sm:text-xl leading-[18px] tracking-normal">
          The typography system balances bold expression with refined clarity—
          where the primary typeface delivers a strong, modern identity, and the
          secondary typeface ensures{" "}
          <span className="salo text-[#8FC4E9] text-[16px] sm:text-xl leading-[14px]">
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
          className="w-[200px] h-[234px] sm:h-[300px] absolute bottom-[2%] right-0"
        />

      </div>

    </section>
  );
};

export default MobCourtSec4;