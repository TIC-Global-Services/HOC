import { useEffect, useRef } from "react";
import gsap from "gsap";


const courtImg1 = "https://ik.imagekit.io/hoc01/assets/client/padlr/courtImg1.png";


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