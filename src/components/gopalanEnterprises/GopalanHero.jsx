import { motion } from "framer-motion";
import { AnimatedText, AnimatedWord, containerVariants } from "../reusable/TextAnimation";
import grid from "../../assets/client/padlr/img/checkBg.png";

const GopalanHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center">

      {/* MAIN WRAPPER */}
      <div className="relative w-full max-w-[1600px] h-full flex">

        {/* ───── LEFT PANEL ───── */}
        <div
          className="relative h-full "
          style={{
            width: "55vw",
            backgroundImage: `url(${grid})`,
          }}
        >
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "6vw",
              transform: "translateY(-50%)",
              maxWidth: "40vw",
            }}
          >
            <h1
              className="alinsa text-[#060EBB] leading-none"
              style={{
                fontSize: "clamp(48px,8vw,140px)",
                fontWeight: 1000,
              }}
            >
              GOPALAN GROUPS
            </h1>

            <button
              className="rounded-full bg-[#060EBB] text-white mt-6"
              style={{
                width: "clamp(140px,12vw,220px)",
                height: "clamp(40px,4vw,70px)",
                fontSize: "clamp(12px,1vw,16px)",
              }}
            >
              SPORTS & LIFESTYLE
            </button>
          </div>
        </div>

        {/* ───── RIGHT TEXT (ABSOLUTE CENTER RIGHT) ───── */}
        <div
          className="absolute"
          style={{
            top: "50%",
            right: "0vw",
            transform: "translateY(-50%)",
            maxWidth: "40vw",
          }}
        >
          <motion.p
            className="jost text-black text-start capitalize tracking-tight font-[500]"
            style={{
              fontSize: "clamp(14px,2vw,26px)",
              lineHeight: "150%",
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatedText text="Reimagining Gopalan Group's identity meant balancing four decades of trust with a future-ready vision. The refined" />
            {" "}
            <AnimatedWord
              className="salo text-[#E96428]"
              style={{ fontSize: "clamp(18px,4vw,40px)" }}
            >
              logomark
            </AnimatedWord>
            {" "}
            <AnimatedText text="and evolved palette retain architectural roots while introducing a sense of dynamism, adaptability, and modernity. Through a modular, multi-tiered visual system, each vertical gains its own identity while remaining part of a cohesive whole—resulting in a brand that is grounded." />
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default GopalanHero;