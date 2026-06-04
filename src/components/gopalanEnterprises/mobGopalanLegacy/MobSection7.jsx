import React from "react";
const gopalanGroupImg = "https://ik.imagekit.io/hoc01/assets/client/gopalan/Gopalan_groups.png";

const MobSection7 = () => {
  return (
    <section
      className="w-full h-[30vh] overflow-hidden"
    >
      <div className="relative w-full h-full">
        <img
          src={gopalanGroupImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MobSection7;