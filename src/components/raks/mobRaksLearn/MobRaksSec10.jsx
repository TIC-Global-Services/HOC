import React from "react";

import topRightIcon from "../../../assets/client/raks/img/heroImg1.png";
import bottomLeftIcon from "../../../assets/client/raks/img/heroImg3.png";
import grid from "../../../assets/client/padlr/img/checkBg.png";

const MobRaksSec10 = () => {
  return (
    <section className="w-full min-h-[40dvh] flex flex-col justify-center overflow-hidden"
     style={{backgroundSize: "100vh",
            backgroundImage: `url(${grid})`,
          }}>

      <div className="relative px-5 py-20">

        {/* TOP RIGHT ICON */}
        <img
          src={topRightIcon}
          alt="icon"
          className="absolute top-0 right-5 w-[100px]"
        />

        {/* HEADING */}
        <h2 className="salo text-[30px] text-[#000085] uppercase leading-none text-start mb-3">
          The RAKS <br /> Framework
        </h2>

        {/* PARAGRAPH */}
        <p className="jost text-[16px] text-black/60 leading-[120%] text-start max-w-[320px]">
          A thoughtful approach to shaping young minds through purpose, rhythm, and meaningful learning.
        </p>

        {/* BOTTOM LEFT ICON */}
        <img
          src={bottomLeftIcon}
          alt="icon"
          className="absolute bottom-0 left-[5%] w-[100px]"
        />

      </div>

    </section>
  );
};

export default MobRaksSec10;