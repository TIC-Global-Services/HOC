import React from "react";

import visualImg from "../../../../assets/client/padlr/img/visualImg.png";

const Section4 = () => {
  return (
    <section className="h-screen relative flex items-center overflow-hidden bg-white">

      <img
        src={visualImg}
        alt="visual"
        className="h-screen w-auto object-contain object-top"
      />

        {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#0606BC]" />
    </section>
  );
};

export default Section4;