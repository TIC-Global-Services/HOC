import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

const tagElegantImg = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/signatureImg.png";
const syedBawkherImg=  "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/syedBawkher4.png";

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
          src={syedBawkherImg}
          alt=""
          className="w-[70%] mx-auto -rotate-[10deg]"
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