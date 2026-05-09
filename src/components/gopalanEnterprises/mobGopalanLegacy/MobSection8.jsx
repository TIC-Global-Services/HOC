import { useRef } from "react";

import useScrollFloat from "../../../hooks/useScrollFloat";

import topImg from "../../../assets/client/gopalan/heroImg4.png";
import bottomImg from "../../../assets/client/gopalan/heroImg1.png";

import GridOverlay from "../../GridOverlay";

const MobSection8 = () => {
  const topRef = useRef(null);
  const rightRef = useRef(null);

  useScrollFloat(topRef, {
    yFactor: 0.5,
    rFactor: 0.3,
  });

  useScrollFloat(rightRef, {
    yFactor: 0.5,
    rFactor: 0.3,
  });

  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        py-10
      "
      style={{
        backgroundColor: "#E96428",
      }}
    >

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col h-full px-5 pt-10">

        {/* TOP ICON */}
        <div
          ref={topRef}
          className="w-[150px]"
        >
          <img
            src={topImg}
            alt=""
            className="w-full object-contain"
          />
        </div>

        {/* HEADING */}
        <div className="pt-10">
          <h2
            className="
              salo
              text-start
              text-white
              text-[80px]
              tracking-wider
              leading-none
            "
          >
            STRUCTURED
            <br />
            EVOLUTION
          </h2>
        </div>

        {/* SUB HEAD */}
        <div className="pt-6">
          <p
            className="
              salo
              font-[400]
              text-start
              text-white
              uppercase
              text-[40px]
              leading-none
            "
          >
            Shape The Future
          </p>
        </div>

        {/* PARA TEXT */}
        <div className="pt-10">
          <p
            className="
              jost
              font-[400]
              text-start
              text-white/80
              max-w-[360px]
              text-[16px]
              leading-[23px]
              capitalize
            "
          >
            Gopalan Group is a legacy-driven enterprise rooted in over four decades of 
            architectural excellence, trust, and innovation. 
            Evolving from a renowned real estate brand into a diversified multi-vertical conglomerate, 
            the Group seamlessly blends heritage with contemporary vision. 
            From landmark residential and commercial developments to ventures across hospitality, education, aerospace.
          </p>
        </div>

        {/* BOTTOM RIGHT ICON */}
        <div className="flex justify-end pt-12">

          <div
            ref={rightRef}
            className="w-[160px] rotate-[18deg]"
          >
            <img
              src={bottomImg}
              alt=""
              className="w-full object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default MobSection8;