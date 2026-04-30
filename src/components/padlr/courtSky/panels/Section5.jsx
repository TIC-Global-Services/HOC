import { useEffect, useRef } from "react";
import gsap from "gsap";

import courtImg1 from "../../../../assets/client/padlr/img/courtPanelImg.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

export default function Section6() {
  return (
    <section
      className="h-screen flex justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundColor: "#8FC4E9",
      }}
    >
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full h-full flex">

        {/* LEFT PANEL */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={courtImg1}
            alt="court"
            className="absolute inset-0 w-full h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
}