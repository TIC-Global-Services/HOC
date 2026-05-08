import { useRef } from "react";

import useScrollFloat from "../../../hooks/useScrollFloat";

import topImg from "../../../assets/client/gopalan/heroImg4.png";

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
        h-[70vh]
        overflow-hidden
        flex
        flex-col
        py-[15%]
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
      <div className="relative z-10 flex flex-col h-full">

        {/* TOP LEFT */}
        <div
          ref={topRef}
          className="
            w-[150px]
            self-start
            px-5
          "
        >
          <img
            src={topImg}
            alt=""
            className="w-full object-contain"
          />
        </div>

        {/* CENTER */}
        <div
          className="
            flex
            flex-col
            justify-center
            mt-6
            px-10
            gap-3
          "
        >
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

        {/* PARAGRAPH */}
        <div className="flex justify-center mt-10 px-5">

          <p
            className="
              jost
              font-[400]
              text-start
              text-white/80
              max-w-[350px]
              text-[16px]
              leading-[23px]
              capitalize
            "
          >
            Gopalan Group is a legacy-driven enterprise rooted in over
            four decades of architectural excellence, trust, and
            innovation. Evolving from a renowned real estate brand into
            a diversified multi-vertical conglomerate, the Group
            seamlessly blends heritage with contemporary vision. From
            landmark residential and commercial developments to ventures
            across hospitality, education, aerospace.
          </p>

        </div>

      </div>
    </section>
  );
};

export default MobSection8;