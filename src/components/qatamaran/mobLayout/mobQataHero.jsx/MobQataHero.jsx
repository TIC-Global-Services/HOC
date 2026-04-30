import img1 from "../../../../assets/client/qatamaran/heroFloat1.png";
import img2 from "../../../../assets/client/qatamaran/heroFloat2.png";
import img3 from "../../../../assets/client/qatamaran/heroFloat3.png";
import img4 from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobQataHero = () => {
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

      {/* ─── TOP (VISUAL) ─── */}
      <div
        className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundPosition: "center",
        }}
      >
        {/* FLOAT IMAGES (STATIC) */}
        <img src={img1} className="float-1 absolute top-[10%] left-[10%] w-[90px] -rotate-12" />
        <img src={img2} className="float-2 absolute top-[15%] right-[15%] w-[80px] rotate-12" />
        <img src={img3} className="float-3 absolute bottom-[10%] left-[10%] w-[100px] -rotate-12" />
        <img src={img4} className="float-4 absolute bottom-[10%] right-[10%] w-[100px] rotate-12" />

        {/* CENTER TITLE */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="alinsa text-[#060EBB] text-[50px] leading-none uppercase">
            Qatamaran
          </h1>

          <button className="jost rounded-full bg-[#060EBB] text-white px-6 py-3 text-[10px]">
            FASHION & LIFESTYLE
          </button>
        </div>
      </div>

      {/* ─── BOTTOM (TEXT) ─── */}
      <div className="w-full text-start flex-1 px-5 py-8 flex items-center">
        <p className="jost font-medium text-[13px] leading-[24px] tracking-[-0.03em] capitalize text-black">
          Qatamaran is a prêt-à-porter menswear label rooted in Chennai's rich
          tailoring heritage, designed for the modern gentleman who{" "}
          <span className="salo text-[#1E382D] text-[20px] leading-[24px] capitalize">
            balances luxury with simplicity.
          </span>{" "}
          Haus of Chaos crafted a visual identity inspired by its tropical
          roots, along with an intimate packaging experience that reflects the
          refined sensibilities of its patrons.
        </p>
      </div>

    </section>
  );
};

export default MobQataHero;