import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import grid from "../../assets/client/padlr/img/checkBg.png";
import question from "../../assets/client/raks/img/question.png";
import ImagesTrail from "../../components/ImagesTrail";

const lines = ["Wann..", "Know", "More"];

const AnimatedChar = ({ char, scrollYProgress, start, end }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [-50, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="text-[#000085] font-[500] salo uppercase inline-block will-change-transform"
    >
      <span style={{ fontSize: "clamp(40px, 14vw, 150px)" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    </motion.span>
  );
};

const MobRaksWanna = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"],
  });

  return (
    <section
      ref={ref}
      className="w-full h-[80vh] relative flex items-center justify-center overflow-hidden isolate"
      style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
    >
      {/* IMAGE TRAIL */}
      <ImagesTrail image={question} />

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

export default MobRaksWanna;
