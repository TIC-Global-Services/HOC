import { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import treeImg from "../../../../assets/client/qatamaran/heroFloat2.png";
import callOut from "../../../../assets/client/qatamaran/heroFloat1.png";

const MobRefineSec2 = () => {
  const topRef = useRef(null);
  const rightRef = useRef(null);

  useScrollFloat(topRef, { yFactor: 0.5, rFactor: 0.3 });
  useScrollFloat(rightRef, { yFactor: 0.5, rFactor: 0.3 });

  return (
    <section
      className="w-full relative h-[80vh] flex flex-col py-[15%]"
      style={{ backgroundColor: "#1E382D" }}
    >
      {/* TOP LEFT */}
      <div ref={topRef} className="w-[90px] self-start">
        <img src={treeImg} alt="" className="w-full object-contain" />
      </div>

      {/* CENTER */}
      <div className="flex flex-col justify-center mt-6 px-10 gap-3">
        <h2 className="salo text-start text-white text-[50px] tracking-wider leading-none">
          REFINED <br /> TAILORING
        </h2>

        <p className="salo font-[400] text-start text-white uppercase text-[20px] leading-none">
          Crafted <br /> In Heritage
        </p>
      </div>

      {/* RIGHT ICON */}
      <div
        ref={rightRef}
        className="absolute top-[40%] right-[5%] w-[90px]"
      >
        <img
          src={callOut}
          alt=""
          className="w-full object-contain -rotate-12"
        />
      </div>

      {/* PARAGRAPH */}
      <div className="flex justify-center mt-16">
        <p className="jost font-[400] text-start text-white/80 max-w-[320px] text-[16px] leading-[23px] capitalize">
          Qatamaran is a modern prêt-à-porter menswear label rooted in the rich
          heritage of Chennai’s tailoring tradition—where craftsmanship,
          precision, and timeless elegance converge. Designed for the
          contemporary gentleman, it brings together coastal inspiration.
        </p>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center mt-10">
        <h2 className="salo text-white text-center text-[50px] leading-none">
          COASTAL CRAFT
        </h2>
      </div>
    </section>
  );
};

export default MobRefineSec2;