import img1 from "../../../../assets/client/syedBawkher/img/heroImg1.png";
import img2 from "../../../../assets/client/syedBawkher/img/heroImg2.png";
import img3 from "../../../../assets/client/syedBawkher/img/heroImg3.png";
import img4 from "../../../../assets/client/syedBawkher/img/heroImg4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobSyedHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col mt-[25%]">

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotate(var(--r)); }
          50% { transform: translateY(-18px) rotate(var(--r)); }
        }
        .float-1 { --r: 6deg; animation: floatY 3.2s ease-in-out infinite; }
        .float-2 { --r: -8deg; animation: floatY 4s ease-in-out 0.6s infinite; }
        .float-3 { --r: 10deg; animation: floatY 3.6s ease-in-out 1.2s infinite; }
        .float-4 { --r: -6deg; animation: floatY 4.4s ease-in-out 0.3s infinite; }
      `}</style>

      {/* ─── TOP ─── */}
      <div
        className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundPosition: "center",
        }}
      >
        {/* STATIC FLOAT IMAGES */}
        <img src={img1} className="float-1 absolute top-[20%] left-[10%] w-[100px]" />
        <img src={img2} className="float-2 absolute top-[20%] right-[10%] w-[100px]" />
        <img src={img3} className="float-3 absolute bottom-[20%] left-[8%] w-[100px]" />
        <img src={img4} className="float-4 absolute bottom-[20%] right-[8%] w-[100px]" />

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="alinsa text-[#060EBB] text-[50px] leading-none uppercase">
            SYED BAWKHER
          </h1>

          <button className="jost rounded-full bg-[#060EBB] text-white px-6 py-3 text-[10px]">
            FASHION
          </button>
        </div>
      </div>

      {/* ─── BOTTOM ─── */}
      <div className="w-full text-start flex-1 px-5 py-8 flex items-center">
        <p className="jost font-medium text-[13px] leading-[24px] tracking-[-0.03em] capitalize text-black">
          Since 1904, Syed Bawkher & Co. has been a mainstay of the sartorial scene in Madras, and remains one of the oldest continual bespoke tailoring houses in the world. Marrying the custodial heritage of five generations with refined{" "}
          
          <span className="salo text-[#262666] text-[20px] leading-[24px] capitalize">
            craftsmanship and contemporary
          </span>{" "}
          
          technique, they epitomise the cardinal values of transparency, quality, and excellence in the service of the impeccable gentleman.
          
          <br /><br />
          
          Haus of Chaos created an analogue brochure for Syed Bawkher & Co., as a piece of literature to be remembered for its textual and textural richness. A philosophy of{" "}
          
          <span className="salo text-[#262666] text-[20px] leading-[24px] capitalize">
            "experience and encounter"
          </span>{" "}
          
          informed Haus of Chaos' process towards an object that materially imparts the sophistication intrinsic to Syed Bawkher.
        </p>
      </div>

    </section>
  );
};

export default MobSyedHero;