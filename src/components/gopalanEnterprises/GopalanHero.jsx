import { motion } from "framer-motion";
import { AnimatedText, AnimatedWord, containerVariants } from "../reusable/TextAnimation";
import grid from "../../assets/client/padlr/img/checkBg.png";

const GopalanHero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex flex-col md:flex-row">

        {/* LEFT */}
        <div
          className="relative w-full h-[500px] md:h-screen md:w-1/2 overflow-hidden flex-shrink-0 border-2"
          style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 px-4">
            <h1
              className="font-[1000] text-start alinsa text-[#060EBB] leading-none tracking-tight"
              style={{ fontSize: "clamp(48px, 10vw, 140px)" }}
            >
              GOPALAN GROUPS
            </h1>
            <button className="rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium w-[160px] h-[45px] md:w-[200px] md:h-[60px] xl:w-[220px] xl:h-[70px] text-sm md:text-base">
              SPORTS & LIFESTYLE
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-10 xl:px-14 py-10 md:py-0">
          <motion.p
            className="jost text-start capitalize tracking-tight font-[500] text-black max-w-[656px] leading-[150%] text-[14px] md:text-[18px] xl:text-[22px] 2xl:text-[26px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatedText text="Reimagining Gopalan Group's identity meant balancing four decades of trust with a future-ready vision. The refined" />
            {" "}
            <AnimatedWord className="text-[40px] font-[400] salo text-[#E96428]">logomark</AnimatedWord>
            {" "}
            <AnimatedText text="and evolved palette retain architectural roots while introducing a sense of dynamism, adaptability, and modernity. Through a modular, multi-tiered visual system, each vertical gains its own identity while remaining part of a cohesive whole—resulting in a brand that is grounded." />
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default GopalanHero;