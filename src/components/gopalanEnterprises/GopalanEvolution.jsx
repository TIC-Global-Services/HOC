import React from "react";
import brandImg from "../../assets/client/gopalan/brandImg.png";

const GopalanEvolution = () => {
  return (
    <section className="w-full min-h-screen flex justify-center overflow-hidden">
      {/* CENTER CONTAINER */}
      <div className="w-full h-screen flex">
        {/* ── LEFT IMAGE ── */}

        <div className="w-1/2 h-screen overflow-hidden flex items-center justify-center">
          <img
            src={brandImg}
            alt="Evolution"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* ── RIGHT TEXT ── */}
        <div
          className="
          w-1/2
          h-full
          flex items-center justify-center
          px-6 md:px-10 xl:px-16 2xl:px-20
        "
        >
          <div className="w-full max-w-[420px] lg:max-w-[520px] xl:max-w-[580px] 2xl:max-w-[500px]">
            <h2
              className="salo uppercase text-[#CD684D] font-[400] leading-none tracking-tight text-start"
              style={{
                fontSize: "clamp(40px, 12vw, 160px)",
              }}
            >
              Structured <br /> Evolution
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GopalanEvolution;
