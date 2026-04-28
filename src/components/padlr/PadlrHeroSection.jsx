import { motion } from "framer-motion";
import img1 from "../../assets/client/padlr/img/heroImg1.png";
import img2 from "../../assets/client/padlr/img/heroImg2.png";
import img3 from "../../assets/client/padlr/img/heroImg3.png";
import img4 from "../../assets/client/padlr/img/heroImg4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const PadlrHero = () => {
  return (
    <section className="w-full relative min-h-screen flex flex-col lg:flex-row">
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

      {/* LEFT */}
      <div
        className="relative w-full lg:w-[50%] xl:w-[50%] h-[500px] sm:h-[600px] lg:h-screen overflow-hidden flex-shrink-0"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <img
          src={img2}
          className="float-1 absolute top-[10%] left-[8%] w-[50px] sm:w-[70px] md:w-[90px] lg:w-[110px]"
        />
        <img
          src={img1}
          className="float-2 absolute top-[12%] right-[10%] w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]"
        />
        <img
          src={img4}
          className="float-3 absolute bottom-[10%] left-[8%] w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px]"
        />
        <img
          src={img3}
          className="float-4 absolute bottom-[10%] right-[10%] w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px]"
        />

        <div className="w-full h-full flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 text-center">
          <h2
            className="font-[1000] alinsa text-[#060EBB] leading-none tracking-tight"
            style={{ fontSize: "clamp(60px, 12vw, 160px)" }}
          >
            PADLR
          </h2>

          <button
            className="jost rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium"
            style={{
              width: "clamp(160px, 18vw, 240px)",
              height: "clamp(50px, 6vw, 80px)",
              fontSize: "clamp(12px, 1vw, 16px)",
            }}
          >
            SPORTS & LIFESTYLE
          </button>
        </div>
      </div>

      {/* RIGHT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          absolute 
          top-0 
          right-0 
          h-full 
          w-full xl:w-[50%]
          flex items-center
          
        "
      >
        <p
          className="jost text-black text-start font-[500] capitalize leading-[150%] max-w-[656px]"
          style={{ fontSize: "clamp(14px, 1.7vw, 26px)" }}
        >
          Established in 2025, Padlr is set to be Chennai's premier padel and{" "}
          <span className="text-[#060EBB] salo text-[clamp(18px,2.5vw,40px)]">
            Pickleball
          </span>{" "}
          destination. As a high-performance, tech-forward arena, Padlr takes
          the demands of these racquet sports seriously, with ultra-panoramic
          padel courts licensed by{" "}
          <span className="text-[#060EBB] salo text-[clamp(18px,2.5vw,40px)]">
            SkyPadel
          </span>{" "}
          Spain, outfitted with Mondo turf — the first of its kind in Chennai —
          and semi-indoor pickleball courts engineered to IPA standards.
          <br />
          When Haus of Chaos partnered with Padlr, it was game, set and a match
          like no other. The score? One suave, bold identity in the spirit of
          all things{" "}
          <span className="text-[#060EBB] salo text-[clamp(18px,2.5vw,40px)]">
            "Seriously Playful"
          </span>
          .
        </p>
      </motion.div>
    </section>
  );
};

export default PadlrHero;
