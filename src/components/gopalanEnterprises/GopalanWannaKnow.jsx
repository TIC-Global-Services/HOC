import React from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import question from "../../assets/client/gopalan/question.png"; // ? icon
import grid from "../../assets/client/padlr/img/checkBg.png"; // grid bg

const lines = ["Wanna..", "Know", "More"];

const GopalanWannaKnow = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Mouse follow (for comment bubble)
  const mouseX = useSpring(0, { stiffness: 80, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 40);
    mouseY.set(e.clientY - rect.top - 40);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      {/* Floating Question Marks */}
      <img src={question} className="absolute top-[10%] left-[10%] w-[40px] md:w-[60px]" />
      <img src={question} className="absolute top-[15%] right-[15%] w-[40px] md:w-[60px]" />
      <img src={question} className="absolute bottom-[10%] left-[15%] w-[40px] md:w-[60px]" />
      <img src={question} className="absolute bottom-[15%] right-[10%] w-[40px] md:w-[60px]" />

      {/* Center Text */}
      <div className="text-center leading-none">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex justify-center">
            {line.split("").map((char, i) => {
              const index = lineIndex * 10 + i;
              const start = index / 40;
              const end = start + 0.08;

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0, 1]
              );

              return (
                <motion.span
                  key={i}
                  style={{ opacity }}
                  className="text-[#E96428] font-bold salo uppercase text-[50px] md:text-[120px] tracking-normal"
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GopalanWannaKnow;
