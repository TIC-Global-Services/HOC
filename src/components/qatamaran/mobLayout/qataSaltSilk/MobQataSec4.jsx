import { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import topIcon from "../../../../assets/client/qatamaran/heroFloat1.png";
import bottomIcon from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobQataSec4 = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useScrollFloat(topRef, { yFactor: 0.2, rFactor: 0.12 });
  useScrollFloat(bottomRef, { yFactor: 0.3, rFactor: 0.18 });

  return (
    <section
      className="w-full flex flex-col justify-center px-10 py-10 gap-10"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      {/* TOP ICON */}
      <div ref={topRef} className="w-[100px]">
        <img src={topIcon} alt="" className="w-full object-contain -rotate-20" />
      </div>

      {/* TEXT */}
      <div className="text-black text-start max-w-[320px]">
        <h2 className="salo uppercase text-[20px] leading-[110%] mb-3">
          Where Heritage Meets Modern Elegance
        </h2>

        <p className="jost text-[16px] leading-[130%] font-[400]">
          "At Qatamaran, every piece is thoughtfully crafted to embody
          timeless tailoring, coastal inspiration, and effortless
          sophistication—designed for the modern gentleman to wear with
          confidence and ease."
        </p>
      </div>

      {/* BOTTOM ICON */}
      <div ref={bottomRef} className="w-[100px]">
        <img src={bottomIcon} alt="" className="w-full object-contain -rotate-10" />
      </div>
    </section>
  );
};

export default MobQataSec4;