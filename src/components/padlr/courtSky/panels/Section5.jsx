import { useEffect, useRef } from "react";
import gsap from "gsap";

import courtImg1 from "../../../../assets/client/padlr/img/courtPanelImg4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

export default function Section5() {
  return (
    <section
  className="h-screen overflow-hidden flex items-center justify-center"
  style={{
    backgroundImage: `url(${grid})`,
    backgroundSize: "cover",
    backgroundColor: "#8FC4E9",
  }}
>
  <img
    src={courtImg1}
    alt="court"
    className="h-screen w-full object-cover"
  />
</section>
  );
}