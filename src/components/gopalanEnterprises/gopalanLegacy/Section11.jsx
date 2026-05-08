import { useRef } from "react";

import topImage from "../../../assets/client/gopalan/panelImg2.png";
import bottomImage from "../../../assets/client/gopalan/PanelImg1.png";

import tagIcon from "../../../assets/client/gopalan/heroImg2.png";
import tagIcon2 from "../../../assets/client/gopalan/heroImg3.png";

import useScrollFloat from "../../../hooks/useScrollFloat";

const Section11 = () => {
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
    <section
      className="
        relative
        w-full
        h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        bg-white
      "
    >
      {/* FIXED DESKTOP CONTENT WIDTH */}
      <div
        className="
          relative
          h-full
          w-[40vw]
        "
      >

        {/* TOP IMAGE */}
        <div
          className="
            absolute
            top-[10%]
            left-1/2
            -translate-x-1/2
          "
          style={{
            width: "clamp(180px,18vw,340px)",
            height: "clamp(220px,42vh,480px)",
          }}
        >
          {/* FLOATING TAG */}
          <img
            ref={iconRef}
            src={tagIcon}
            alt="tag"
            className="
              absolute
              z-10
              -rotate-12
            "
            style={{
              top: "-12%",
              left: "5%",
              width: "clamp(60px,7vw,180px)",
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

        {/* BOTTOM IMAGE */}
        <div
          className="
            absolute
            bottom-[5%]
            left-1/2
            -translate-x-1/2
          "
          style={{
            width: "clamp(220px,22vw,420px)",
            height: "clamp(180px,34vh,340px)",
          }}
        >
          {/* FLOATING TAG */}
          <img
            ref={iconRef2}
            src={tagIcon2}
            alt="tag"
            className="
              absolute
              z-10
              rotate-12
            "
            style={{
              top: "-8%",
              right: "12%",
              width: "clamp(70px,10vw,250px)",
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

export default Section11;