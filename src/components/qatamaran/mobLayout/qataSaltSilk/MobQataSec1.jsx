import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import craftImg from "../../../../assets/client/qatamaran/heroFloat3.png";
import treeLogoImg from "../../../../assets/client/qatamaran/heroFloat2.png";
import silkCraft from "../../../../assets/client/qatamaran/silkImg.png";

const MobQataSec1 = () => {
  const craftRef = useRef(null);
  const treeRef = useRef(null);

  useScrollFloat(craftRef, { yFactor: 0.5, rFactor: 0.4 });
  useScrollFloat(treeRef, { yFactor: 0.7, rFactor: 0.3 });

  return (
    <section className="w-full bg-[#1E382D] text-white">

      {/* TITLE */}
      <div className="px-4 py-14 relative">
        <h1 className="text-start salo text-[60px] leading-none uppercase">
          Salt & Silk craft
        </h1>

        {/* ICON RIGHT  */}
        <img
          ref={craftRef}
          src={craftImg}
          alt="icon"
          className="absolute right-4 top-0 -translate-y-1/2 w-[100px]"
        />
      </div>

      {/* ROWS */}
      <div className="flex flex-col border-t border-white">
        {["Heritage.", "Craft.", "Voyage."].map((text, i) => (
          <div key={i} className="border-b border-white px-4 py-10">
            <h2 className="salo text-start text-[60px] leading-none uppercase">
              {text}
            </h2>
          </div>
        ))}
      </div>

      {/* ABOUT SECTION */}
      <div className="text-start px-4 py-[35%] relative">

        {/* LOGO RIGHT  */}
        <img
          ref={treeRef}
          src={treeLogoImg}
          alt="icon"
          className="absolute right-4 bottom-0 w-[120px]"
        />

        {/* TITLE */}
        <h2 className="salo text-[60px] leading-none uppercase">About</h2>

        {/* TEXT */}
        <p className="jost capitalize font-[300] text-[16px] leading-[120%] max-w-[340px] pt-3">
          Rooted in seaside heritage, shaped by skilled hands. A balance of
          fluid elegance and structured precision.
        </p>
      </div>

      {/* IMAGE */}
      <div className="w-full bg-[#EAEAEA]">
        <img src={silkCraft} alt="about" className="w-full object-cover" />
      </div>

    </section>
  );
};

export default MobQataSec1;