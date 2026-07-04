import React from "react";


const topImg = "https://ik.imagekit.io/hoc01/assets/client/raks/panel10.png";
const topImgnew = "https://ik.imagekit.io/hoc01/assets/client/raks/panel10new.png";

const MobRaksSec11 = () => {
  return (
    <section className="w-full h-[60vh] sm:h-full">
      <div className="sm:hidden">
     <img
        src={topImg}
        alt="Top Visual"
        className="w-full h-full object-cover sm:object-contain"
      />
      </div>
      <div className="hidden sm:block">
         <img
        src={topImgnew}
        alt="Top Visual"
        className="w-full h-full object-cover sm:object-contain"
      />
        </div>
     
    </section>
  );
};

export default MobRaksSec11;
