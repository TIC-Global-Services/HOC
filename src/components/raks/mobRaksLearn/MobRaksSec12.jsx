import React from "react";
import grid from "../../../assets/client/padlr/img/checkBg.png";

const MobRaksSec12 = () => {
  return (
    <section
      className="w-full min-h-[60dvh] flex items-center justify-start px-5"
      style={{ backgroundSize: "100vh", backgroundImage: `url(${grid})` }}
    >
      <div className="max-w-[320px] text-start">
        {/* HEADING */}
        <h2 className="salo text-[30px] text-[#000085] uppercase leading-[30px] mb-3">
          The Art of Growing <br /> Minds
        </h2>

        {/* PARAGRAPH */}
        <p className="jost text-[16px] text-black/50 leading-[20px] tracking-tight max-w-[300px]">
          Haus of Chaos app branding exercise—an exploration of childhood and
          the Reggio Emilia philosophy. Through playful geometries, modular
          systems, and {" "}
          <span className="text-[#000085] text-[20px] salo">
            {" "}
            expressive visuals,
          </span>
          {" "}the identity balances clarity with imagination while remaining
          cohesive across institutions.
        </p>
      </div>
    </section>
  );
};

export default MobRaksSec12;
