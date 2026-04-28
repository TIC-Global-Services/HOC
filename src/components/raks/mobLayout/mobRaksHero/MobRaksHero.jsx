import img1 from "../../../../assets/client/raks/img/heroImg1.png";
import img2 from "../../../../assets/client/raks/img/heroImg2.png";
import img3 from "../../../../assets/client/raks/img/heroImg3.png";
import img4 from "../../../../assets/client/raks/img/heroImg4.png";
import heroParaImg from "../../../../assets/client/raks/img/heroParaIcon.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobRaksHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col mt-[25%]">

      {/* ─── TOP ─── */}
      <div
        className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundPosition: "center",
        }}
      >
        {/* STATIC IMAGES */}
        <img src={img1} className="absolute top-[20%] left-[5%] w-[150px] -rotate-12" />
        <img src={img2} className="absolute top-[20%] right-[5%] w-[100px] -rotate-12" />
        <img src={img3} className="absolute bottom-[20%] left-[10%] w-[120px]" />
        <img src={img4} className="absolute bottom-[20%] right-[10%] w-[130px]" />

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="alinsa text-[#060EBB] text-[60px] leading-none uppercase">
            RAKS
          </h1>

          <button className="jost rounded-full bg-[#060EBB] text-[#FFCEC8] px-6 py-3 text-[10px]">
            CHILDREN LEARNING
          </button>
        </div>
      </div>

      {/* ─── BOTTOM ─── */}
      <div className="w-full text-start flex-1 px-5 py-8 flex items-center">
        <p className="jost font-medium text-[13px] leading-[24px] tracking-[-0.03em] capitalize text-black">
          RaK's Institutions is a future-forward school rooted in the{" "}
          <span className="salo text-[#000085] text-[20px] leading-[24px] capitalize">
            Reggio Emilia philosophy,
          </span>{" "}
          fostering experiential, interdisciplinary learning for children to
          grow with purpose. Embracing this spirit, Haus of Chaos crafted an
          identity for{" "}
          <span className="salo text-[#000085] text-[20px] leading-[24px] capitalize">
            RaK's Pallikkoodam
          </span>{" "}
          that is warm, attentive, and child-centric.
          <br />
          The result is a playful yet thoughtful visual language and environment
          designed to nurture curiosity and lifelong learning.
          
          {/* INLINE ICON */}
          <img
            src={heroParaImg}
            alt="icon"
            className="inline-block ml-2 w-[30px] h-[30px] object-contain"
          />
        </p>
      </div>

    </section>
  );
};

export default MobRaksHero;