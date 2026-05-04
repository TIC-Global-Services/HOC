import React from "react";
import rakathonImg from "../../../assets/client/raks/img/rightImg.png";
import raksLearnImg from "../../../assets/client/raks/img/raksLearn.png";
import raksImg from "../../../assets/client/raks/img/heroImg2.png";

const MobRaksSec1 = () => {
  return (
    <>
      <section className="w-full bg-[#000085FF] text-[#FFCEC8]">
        {/* TITLE */}
        <div className="px-4 py-14 relative">
          {/* TITLE TEXT */}
          <h1 className="text-start salo text-[50px] leading-none uppercase">
            Learning Reimagined
          </h1>

          {/* ICON RIGHT */}
          <img
            src={raksLearnImg}
            alt="icon"
            className="absolute right-4 top-0 -translate-y-1/2 w-[100px]"
          />
        </div>

        {/* ROWS */}
        <div className="flex flex-col border-t border-white">
          {["Class.", "Kids.", "Perfected."].map((text, i) => (
            <div key={i} className="border-b border-white px-4 py-10">
              <h2 className="salo text-start text-[50px] leading-none uppercase">
                {text}
              </h2>
            </div>
          ))}
        </div>

        {/* ABOUT SECTION */}
        <div className="text-start border-b border-white px-5 py-24 relative">
          {/* LOGO RIGHT */}
          <img
            src={raksImg}
            alt=""
            className="absolute right-4 top-6 w-[150px]"
          />

          {/* ABOUT TITLE */}
          <h2 className="absolute bottom-4 salo text-[42px] leading-none uppercase">
            About
          </h2>
        </div>

        {/* TEXT */}
        <div className="text-start relative px-5 py-20">
          <p className="absolute top-0 jost capitalize font-[300] text-[16px] leading-[120%] max-w-[340px] pt-4">
            RaK’s Institutions is a forward-thinking school rooted in the
            Reggio-Emilia philosophy, where children lead their own learning
            journeys. Through experiential, sports-integrated, and problem-based
            approaches.
          </p>
        </div>

        {/* ─── IMAGE ─── */}
        <div className="w-full bg-[#EAEAEA]">
          <img src={rakathonImg} alt="about" className="w-full object-cover" />
        </div>
      </section>
    </>
  );
};

export default MobRaksSec1;
