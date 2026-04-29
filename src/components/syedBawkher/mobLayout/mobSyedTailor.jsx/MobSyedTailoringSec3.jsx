import React from "react";
import syedBawkherImg from "../../../../assets/client/syedBawkher/img/syedBawkher4.png";
import tagElegantImg from "../../../../assets/client/syedBawkher/img/signatureImg.png";

const MobSyedTailoringSec3 = () => {
  return (
    <section
      className="w-full bg-white px-5 py-10 flex justify-center"
    >
      <div className="relative">
        {/* MAIN IMAGE */}
        <img
          src={syedBawkherImg}
          className="w-[70%] mx-auto rotate-[-10deg]"
        />

        {/* TAG */}
        <img
          src={tagElegantImg}
          className="absolute top-0 left-0 w-[60px] -rotate-[20deg]"
        />
      </div>
    </section>
  );
};

export default MobSyedTailoringSec3;