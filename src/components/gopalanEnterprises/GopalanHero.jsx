import { motion } from "framer-motion";
import {
  AnimatedText,
  AnimatedWord,
  containerVariants,
} from "../reusable/TextAnimation";
import GridOverlay from "../GridOverlay";

const GopalanHero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center">
      <div className="w-full flex flex-col md:flex-row relative">
        {/* ───── LEFT SIDE ───── */}
        <div className="relative w-full h-[500px] md:h-screen md:w-1/2 overflow-hidden flex-shrink-0">
          {/* GRID */}
          <GridOverlay
            color="0,0,0"
            opacity={0.20}
            size={100}
            position="99px 0px"
          />

          {/* CONTENT */}
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 px-4">
            <h1
              className="font-[1000] alinsa text-[#060EBB] leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(48px, 9vw, 140px)" }}
            >
              GOPALAN GROUPS
            </h1>

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

        {/* ───── RIGHT TEXT ───── */}
        <div
          className="
          absolute 
          top-0 
          right-0 
          h-full 
          w-full md:w-1/2
        "
        >
          {/* INNER ANIMATION CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
            absolute
            top-[25%]
            left-0
            ml-[5%] xl:ml-[8%] 2xl:ml-[15%]
            w-[85%]
            max-w-[420px]
            lg:max-w-[541px]
            xl:max-w-[560px]
            2xl:max-w-[580px]
            flex justify-start
          "
          >
            <p
              className="jost text-start font-[500] capitalize text-black leading-[160%]"
              style={{
                fontSize: "clamp(14px,4vh,26px)",
              }}
            >
              Reimagining Gopalan Group's identity meant balancing four decades
              of trust with a future-ready vision. The refined{" "}
              <span className="salo text-[#E96428] text-[clamp(18px,6vh,40px)]">
                logomark
              </span>{" "}
              and evolved palette retain architectural roots while introducing a
              sense of dynamism, adaptability, and modernity. Through a modular,
              multi-tiered visual system, each vertical gains its own identity
              while remaining part of a cohesive whole resulting in a brand that
              is grounded.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GopalanHero;
