import React from "react";
import craftWaterImg from "../../../../assets/client/qatamaran/block4Right.png";

const MobRefineSec6 = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">

      {/*  BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[#1E382D]" />

      {/*IMAGE*/}
      <img
        src={craftWaterImg}
        alt=""
        className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom"
      />

    </section>
  );
};

export default MobRefineSec6;