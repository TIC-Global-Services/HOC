import { useEffect, useRef } from "react";
import gsap from "gsap";

import courtImg1 from "../../../../assets/client/padlr/img/courtImg1.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

export default function Section1() {
  return (
    <section
      className="h-screen flex justify-center overflow-hidden"
    >
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full h-full flex">

        {/* LEFT PANEL */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={courtImg1}
            alt="court"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}