import img1 from "../../../../assets/client/padlr/img/heroImg1.png";
import img2 from "../../../../assets/client/padlr/img/heroImg2.png";
import img3 from "../../../../assets/client/padlr/img/heroImg3.png";
import img4 from "../../../../assets/client/padlr/img/heroImg4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobPadlrHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col mt-[25%]">

      {/* ─── TOP ─── */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundPosition: "center",
        }}
      >
        {/* FLOATING IMAGES  */}
        <img
          src={img2}
          className="absolute top-[15%] left-[8%] w-[100px]"
        />
        <img
          src={img1}
          className="absolute top-[20%] right-[10%] w-[60px]"
        />
        <img
          src={img4}
          className="absolute bottom-[14%] left-[8%] w-[90px]"
        />
        <img
          src={img3}
          className="absolute bottom-[10%] right-[10%] w-[120px]"
        />

        {/* CENTER TITLE */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h2 className="alinsa text-[#060EBB] text-[50px] leading-none">
            PADLR
          </h2>

          <button className="jost rounded-full bg-[#060EBB] text-white px-6 py-3 text-[10px]">
            SPORTS & LIFESTYLE
          </button>
        </div>
      </div>

      {/* ─── BOTTOM  ─── */}
      <div className="w-full flex-1 px-5 py-8 flex items-center">
        <p className="jost text-start font-medium text-[13px] leading-[24px] tracking-[-0.03em] capitalize">
          Established in 2025, Padlr is set to be Chennai's premier padel and{" "}
          <span className="salo text-[#060EBB] font-normal text-[20px] leading-[24px] capitalize">
            Pickleball
          </span>{" "}
          destination. As a high-performance, tech-forward arena, Padlr takes
          the demands of these racquet sports seriously, with ultra-panoramic
          padel courts licensed by{" "}
          <span className="salo text-[#060EBB] font-normal text-[20px] leading-[24px] capitalize">
            SkyPadel
          </span>{" "}
          Spain, outfitted with Mondo turf — the first of its kind in Chennai —
          and semi-indoor pickleball courts engineered to IPA standards.
          <br />
          When Haus of Chaos partnered with Padlr, it was game, set and a match
          like no other. The score? One suave, bold identity in the spirit of
          all things{" "}
          <span className="salo text-[#060EBB] font-normal text-[20px] leading-[24px] capitalize">
            "Seriously Playful"
          </span>.
        </p>
      </div>

    </section>
  );
};

export default MobPadlrHero;