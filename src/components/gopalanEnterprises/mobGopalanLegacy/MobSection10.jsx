import { useRef } from "react";

import topImage from "../../../assets/client/gopalan/panelImg2.png";
import bottomImage from "../../../assets/client/gopalan/PanelImg1.png";

import tagIcon from "../../../assets/client/gopalan/heroImg2.png";
import tagIcon2 from "../../../assets/client/gopalan/heroImg3.png";

import useScrollFloat from "../../../hooks/useScrollFloat";

const MobSection10 = () => {
  const iconRef = useRef(null);
  const iconRef2 = useRef(null);

  // FLOAT ANIMATION
  useScrollFloat(iconRef, {
    y: 20,
    x: 10,
    rotate: 8,
    duration: 3,
  });

  useScrollFloat(iconRef2, {
    y: 25,
    x: -10,
    rotate: -8,
    duration: 3.5,
  });

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-white">

      {/* MOBILE CONTENT */}
      <div className="relative w-full h-full">

        {/* ─── TOP IMAGE ─── */}
        <div
          className="absolute top-[12%] left-1/2 -translate-x-1/2"
          style={{
            width: "300px",
            height: "300px",
          }}
        >

          {/* FLOATING TAG */}
          <img
            ref={iconRef}
            src={tagIcon}
            alt="tag"
            className="absolute z-10 -rotate-12"
            style={{
              top: "-15%",
              left: "15%",
              width: "90px",
            }}
          />

          {/* MAIN IMAGE */}
          <img
            src={topImage}
            alt="top"
            className="w-full h-full object-contain"
            style={{
              transform: "rotate(20deg)",
            }}
          />
        </div>

        {/* ─── BOTTOM IMAGE ─── */}
        <div
          className="absolute bottom-[8%] left-1/2 -translate-x-1/2"
          style={{
            width: "300px",
            height: "300px",
          }}
        >

          {/* FLOATING TAG */}
          <img
            ref={iconRef2}
            src={tagIcon2}
            alt="tag"
            className="absolute z-10 rotate-12"
            style={{
              top: "-10%",
              right: "8%",
              width: "100px",
            }}
          />

          {/* MAIN IMAGE */}
          <img
            src={bottomImage}
            alt="bottom"
            className="w-full h-full object-contain"
            style={{
              transform: "rotate(-12deg)",
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default MobSection10;
