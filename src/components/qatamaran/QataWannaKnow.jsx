import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import grid from "../../assets/client/padlr/img/checkBg.png";
import question from "../../assets/client/qatamaran/question.png";

import ImagesTrail from "../../components/ImagesTrail";

const lines = ["Wann..", "Know", "More"];

const AnimatedChar = ({ char, scrollYProgress, start, end }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [-50, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="text-[#1E382D] font-[500] salo uppercase inline-block"
    >
      <span style={{ fontSize: "clamp(40px, 14vw, 150px)" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    </motion.span>
  );
};

const FloatingImage = ({ delay = 0, style }) => {
  return (
    <motion.img
      src={question}
      alt=""
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [0, -25, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        position: "absolute",
        width: "clamp(60px, 8vw, 120px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
};

const QataWannaKnowMore = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"],
  });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden isolate"
      style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
    >
      {/* IMAGE TRAIL */}
      <ImagesTrail image={question} />

      {/* STATIC FLOATING */}
      <FloatingImage delay={0} style={{ top: "8%", left: "6%" }} />
      <FloatingImage delay={0.5} style={{ top: "18%", right: "8%" }} />
      <FloatingImage delay={1} style={{ bottom: "18%", left: "10%" }} />
      <FloatingImage delay={1.5} style={{ bottom: "8%", right: "6%" }} />

      {/* SCROLL TEXT */}
      <div className="relative z-[3] w-full h-full flex items-center justify-center overflow-hidden">
        <div className="text-center leading-none px-4 max-w-full">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex justify-center flex-wrap">
              {line.split("").map((char, i) => {
                const index = lineIndex * 10 + i;
                const start = index / 35;
                const end = start + 0.12;

                return (
                  <AnimatedChar
                    key={i}
                    char={char}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QataWannaKnowMore;
