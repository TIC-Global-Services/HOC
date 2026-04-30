import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import syedBawkherImg from "../../../../assets/client/syedBawkher/img/syedBawkher4.png";
import tagElegantImg from "../../../../assets/client/syedBawkher/img/signatureImg.png";

const MobSyedTailoringSec3 = () => {
  const imgRef = useRef(null);
  const tagRef = useRef(null);

  useScrollFloat(imgRef, { yFactor: 0.6, rFactor: 0.4 });   // subtle (background)
  useScrollFloat(tagRef, { yFactor: 0.6, rFactor: 0.4 });   // stronger (foreground)

  return (
    <section className="w-full bg-white px-5 py-10 flex justify-center">

      <div className="relative">

        {/* MAIN IMAGE */}
        <img
          ref={imgRef}
          src={syedBawkherImg}
          alt=""
          className="w-[70%] mx-auto rotate-[-30deg] shadow-md"
        />

        {/* TAG (ANIMATED - FOCUS) */}
        <img
          ref={tagRef}
          src={tagElegantImg}
          alt="icon"
          className="absolute top-0 left-0 w-[60px] -rotate-[20deg]"
        />

      </div>

    </section>
  );
};

export default MobSyedTailoringSec3;