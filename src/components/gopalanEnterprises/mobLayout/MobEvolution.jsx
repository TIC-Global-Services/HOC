import React from "react";
import brandImg from "../../../assets/client/gopalan/brandImg.png";

const MobEvolution = () => {
  return (
    <section className="w-full h-[70vh] flex flex-col">

  {/* IMAGE */}
  <div className="w-full flex justify-center">
    <img
      src={brandImg}
      alt="Evolution"
      className="w-full h-auto object-contain"
    />
  </div>

  {/* TITLE */}
  <div className="w-full flex-1 flex items-center justify-center px-4">
    <h2 className="salo uppercase text-[#CD684D] text-[48px] leading-none text-center">
      Structured Evolution
    </h2>
  </div>

</section>
  );
};

export default MobEvolution;