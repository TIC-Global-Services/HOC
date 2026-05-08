import React from "react";

import gopalanImg from "../../../assets/client/gopalan/groupImg.png";

const Section3 = () => {
  return (
    <section className="h-screen relative flex items-center overflow-hidden bg-white">

      <img
        src={gopalanImg}
        alt="visual"
        className="h-screen w-auto object-contain object-top"
      />

        {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#E96428]" />
    </section>
  );
};

export default Section3;