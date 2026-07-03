import { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";
import GridOverlay from "../../../GridOverlay";

const topIcon = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/heroFloat1.png";
const bottomIcon = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/heroFloat4.png";

const MobQataSec4 = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useScrollFloat(topRef, { yFactor: 0.2, rFactor: 0.12 });
  useScrollFloat(bottomRef, { yFactor: 0.3, rFactor: 0.18 });

  return (
    <section className="w-full relative overflow-hidden bg-white flex flex-col justify-center px-10 py-10 gap-10">

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* TOP ICON */}
      <div ref={topRef} className="w-[100px] relative z-10">
        <img
          src={topIcon}
          alt=""
          className="w-full object-contain -rotate-20"
        />
      </div>

      {/* TEXT */}
      <div className="text-black text-start max-w-[320px] sm:max-w-md md:max-w-lg relative z-10">
        <h2 className="salo uppercase text-[20px] sm:text-3xl leading-[110%] mb-3">
          Where Heritage Meets Modern Elegance
        </h2>

        <p className="jost text-[16px] sm:text-xl leading-[1.3] tracking-tighter font-[400]">
          "At Qatamaran, every piece is thoughtfully crafted to embody
          timeless tailoring, coastal inspiration, and effortless
          sophistication—designed for the modern gentleman to wear with
          confidence and ease."
        </p>
      </div>

      {/* BOTTOM ICON */}
      <div ref={bottomRef} className="w-[100px] relative z-10">
        <img
          src={bottomIcon}
          alt=""
          className="w-full object-contain -rotate-10"
        />
      </div>
    </section>
  );
};

export default MobQataSec4;