import React from "react";
import qataRightImg from "../../../assets/client/gopalan/panel4Img.png";

const MobSection4 = () => {
  return (
    <section className="w-full overflow-hidden">

      {/* ─── BOTTOM IMAGE ─── */}
      <div className="w-full h-[70vh]">
        <img
          src={qataRightImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default MobSection4;