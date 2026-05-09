import img1 from "../../../assets/client/gopalan/heroImg1.png";
import img2 from "../../../assets/client/gopalan/heroImg2.png";
import img3 from "../../../assets/client/gopalan/heroImg3.png";
import img4 from "../../../assets/client/gopalan/heroImg4.png";
import GridOverlay from "../../GridOverlay";

const MobGopalanHero = () => {
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
        className="relative w-full h-[75vh] flex items-center justify-center">

          {/* GRID */}
          <GridOverlay
            color="0,0,0"
            opacity={0.2}
            size={100}
            position="99px 0px"
          />

        {/* FLOAT IMAGES (STATIC) */}
        <img src={img1} className="float-1 absolute top-[15%] left-[10%] w-[120px] -rotate-12" />
        <img src={img2} className="float-2 absolute top-[15%] right-[15%] w-[120px] rotate-12" />
        <img src={img3} className="float-3 absolute bottom-[10%] left-[10%] w-[120px] -rotate-12" />
        <img src={img4} className="float-4 absolute bottom-[10%] right-[10%] w-[120px] rotate-12" />

        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="alinsa text-[#060EBB] text-[48px] leading-none uppercase">
            Gopalan Groups
          </h1>

          <button className="jost rounded-full bg-[#060EBB] text-white px-6 py-3 text-[12px]">
            SPORTS & LIFESTYLE
          </button>
        </div>
      </div>

      {/* ─── BOTTOM ─── */}
      <div className="w-full text-start flex-1 px-5 py-8 flex items-center">
        <p className="jost font-medium text-[13px] leading-[24px] tracking-[-0.03em] capitalize text-black">
          Reimagining Gopalan Group's identity meant balancing four decades of
          trust with a future-ready vision. The refined{" "}
          
          <span className="salo text-[#E96428] text-[20px] leading-[24px] capitalize">
            logomark
          </span>{" "}
          
          and evolved palette retain architectural roots while introducing a
          sense of dynamism, adaptability, and modernity. Through a modular,
          multi-tiered visual system, each vertical gains its own identity while
          remaining part of a cohesive whole—resulting in a brand that is
          grounded.
        </p>
      </div>

    </section>
  );
};

export default MobGopalanHero;