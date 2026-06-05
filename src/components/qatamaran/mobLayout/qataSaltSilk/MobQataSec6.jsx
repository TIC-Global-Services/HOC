import React from "react";

const qataRightImg = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/qataRight.png";

const MobQataSec6 = () => {
  return (
    <section className="w-full overflow-hidden">

      {/* ─── BOTTOM IMAGE ─── */}
      <div className="w-full h-[70vh]">
        <img
          src={qataRightImg}
          alt=""
          className="w-full h-full object-cover-[center_40%]"
        />
      </div>

    </section>
  );
};

export default MobQataSec6;