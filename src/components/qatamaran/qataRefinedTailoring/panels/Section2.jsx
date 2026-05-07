import { useRef } from "react";

import topCubImage from "../../../../assets/client/qatamaran/syedCub.png";
import bottomCubImage from "../../../../assets/client/qatamaran/syedCub.png";
import tagIcon from "../../../../assets/client/qatamaran/heroFloat3.png";
import tagIcon2 from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

import useScrollFloat from "../../../../hooks/useScrollFloat";

const Section2 = () => {
  // refs
  const iconRef = useRef(null);
  const iconRef2 = useRef(null);

  // float animation
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
    <section
      className="relative h-screen flex overflow-visible"
      style={{
        width: "100vw",
        flexShrink: 0,
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundColor: "white",
      }}
    >
      {/* LEFT PANEL */}
      <div className="relative h-full" style={{ width: "40vw" }}>

        {/* TOP LEFT IMAGE */}
        <div
          className="absolute"
          style={{
            top: "8%",
            left: "5%",
            width: "clamp(120px,14vw,300px)",
            height: "clamp(200px,60vh,450px)",
          }}
        >
          {/* PIN */}
          <img
            ref={iconRef}
            src={tagIcon}
            alt="pin"
            className="absolute z-10 -rotate-12"
            style={{
              top: "-10%",
              left: "-60%",
              width: "clamp(20px,16vw,280px)",
            }}
          />

          {/* IMAGE */}
          <img
            src={topCubImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ transform: "rotate(-12deg)" }}
          />
        </div>

        {/* BOTTOM RIGHT IMAGE */}
        <div
          className="absolute"
          style={{
            bottom: "15%",
            right: "-10%",
            width: "clamp(180px, 24vw, 320px)",
            height: "clamp(150px, 44vh, 305px)",
          }}
        >
          {/* PIN */}
          <img
            ref={iconRef2}
            src={tagIcon2}
            alt="pin"
            className="absolute z-10 rotate-12"
            style={{
              top: "-30%",
              left: "30%",
              width: "clamp(22px,12vw,250px)",
            }}
          />

          {/* IMAGE */}
          <img
            src={bottomCubImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ transform: "rotate(12.19deg)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;