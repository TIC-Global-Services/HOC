import grid from "../../../assets/client/padlr/img/checkBg.png";

const MobGopalanHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col mt-[25%]">

      {/* ─── TOP ─── */}
      <div
        className="relative w-full h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundPosition: "center",
        }}
      >
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