import React from "react";
import refinedImg from "../../../assets/client/gopalan/Gopalan groups.png";

const MobSection7 = () => {
  return (
    <section
      className="w-full h-[30vh] overflow-hidden"
    >
      <div className="relative w-full h-full">
        <img
          src={refinedImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MobSection7;