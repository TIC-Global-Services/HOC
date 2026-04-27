import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import question from "../../assets/client/syedBawkher/img/question.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const lines = ["Wann..", "Know", "More"];

const SyedWannaKnowMore = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // PARTICLES
  const [particles, setParticles] = useState([]);
  const lastTimeRef = useRef(0);
  const IMAGE_DELAY = 40;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      // only inside section
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      )
        return;

      const now = Date.now();
      if (now - lastTimeRef.current < IMAGE_DELAY) return;
      lastTimeRef.current = now;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newParticle = {
        id: Math.random(),
        x,
        y,
        offsetX: (Math.random() - 0.5) * 60,
        offsetY: (Math.random() - 0.5) * 60,
        scale: Math.random() * 0.4 + 0.8,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => p.id !== newParticle.id)
        );
      }, 900);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      {/* PARTICLE TRAIL */}
      {particles.map((p) => (
        <motion.img
          key={p.id}
          src={question}
          className="absolute w-[40px] md:w-[60px] pointer-events-none"
          initial={{
            x: p.x,
            y: p.y,
            opacity: 1,
            scale: p.scale,
          }}
          animate={{
            x: p.x + p.offsetX,
            y: p.y + p.offsetY,
            opacity: 0,
            scale: 0.4,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          style={{
            transform: "translate(0%, 0%)", // FIXED CENTER ALIGN
          }}
        />
      ))}

      {/* STATIC ICONS */}
      <img
        src={question}
        className="absolute top-[10%] left-[10%] w-[40px] md:w-[60px]"
      />
      <img
        src={question}
        className="absolute top-[15%] right-[15%] w-[40px] md:w-[60px]"
      />
      <img
        src={question}
        className="absolute bottom-[10%] left-[15%] w-[40px] md:w-[60px]"
      />
      <img
        src={question}
        className="absolute bottom-[15%] right-[10%] w-[40px] md:w-[60px]"
      />

      {/* TEXT */}
      <div className="text-center leading-none px-4 overflow-hidden">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex justify-center flex-wrap">
            {line.split("").map((char, i) => {
              const index = lineIndex * 10 + i;

              const start = index / 35;
              const end = start + 0.12;

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0, 1]
              );

              const y = useTransform(
                scrollYProgress,
                [start, end],
                [-100, 0]
              );

              return (
                <motion.span
                  key={i}
                  style={{ opacity, y }}
                  className="text-[#262666] font-[500] salo uppercase inline-block"
                >
                  <span
                    style={{
                      fontSize: "clamp(40px, 14vw, 150px)",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SyedWannaKnowMore;