import { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

import topIcon from "../../../assets/client/gopalan/heroImg3.png";
import bottomIcon from "../../../assets/client/gopalan/heroImg2.png";

import GridOverlay from "../../GridOverlay";

const MobSection5 = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useScrollFloat(topRef, {
    yFactor: 0.2,
    rFactor: 0.12,
  });

  useScrollFloat(bottomRef, {
    yFactor: 0.3,
    rFactor: 0.18,
  });

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        py-14
        px-5
        bg-white
      "
    >

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.12}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          gap-14
        "
      >

        {/* TOP ICON */}
        <div
          ref={topRef}
          className="
            w-full
            flex
            justify-start
          "
        >
          <img
            src={topIcon}
            alt=""
            className="
              w-[140px]
              object-contain
              -rotate-20
            "
          />
        </div>

        {/* TEXT */}
        <div
          className="
            text-black
            text-start
            max-w-[320px]
          "
        >
          <h2
            className="
              salo
              uppercase
              text-[20px]
              leading-[110%]
              mb-3
            "
          >
            Where Legacy Meets Modern Elegance
          </h2>

          <p
            className="
              jost
              text-[16px]
              leading-[130%]
              font-[400]
            "
          >
            At Gopalan Group, every space is thoughtfully envisioned to embody timeless architecture, modern innovation, 
            and enduring excellence—crafted to inspire elevated living with trust, purpose, and sophistication.
          </p>
        </div>

        {/* BOTTOM ICON */}
        <div
          ref={bottomRef}
          className="
            w-full
            flex
            justify-end
          "
        >
          <img
            src={bottomIcon}
            alt=""
            className="
              w-[140px]
              object-contain
              -rotate-10
            "
          />
        </div>

      </div>
    </section>
  );
};

export default MobSection5;