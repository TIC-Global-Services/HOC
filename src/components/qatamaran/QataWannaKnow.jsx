import React from 'react';
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import question from "../../assets/client/qatamaran/question.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const lines = ["Wann..", "Know", "More"];
const IMAGE_DELAY = 80;

const AnimatedChar = ({ char, scrollYProgress, start, end }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [-100, 0]);
  return (
    <motion.span style={{ opacity, y }} className="text-[#1E382D] font-[500] salo uppercase inline-block">
      <span style={{ fontSize: "clamp(40px, 14vw, 150px)" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    </motion.span>
  );
};

const QataWannaKnowMore = () => {
  const ref = useRef(null);
  const lastTimeRef = useRef(0);
  const cursorX = useMotionValue(-999);
  const cursorY = useMotionValue(-999);
  const [insideSection, setInsideSection] = useState(false);
  const [particles, setParticles] = useState([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      // cursor icon appears/disappears on enter/leave
      setInsideSection(inside);

      if (!inside) return;

      // moves exactly with mouse — no lag, no spring delay
      cursorX.set(e.clientX - rect.left);
      cursorY.set(e.clientY - rect.top);

      // trail spawns behind cursor every 80ms
      const now = Date.now();
      if (now - lastTimeRef.current < IMAGE_DELAY) return;
      lastTimeRef.current = now;

      const newParticle = {
        id: now + Math.random(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        offsetX: (Math.random() - 0.5) * 120,
        offsetY: (Math.random() - 0.5) * 120,
        scale: Math.random() * 0.4 + 0.8,
      };

      setParticles((prev) => [...prev, newParticle]);
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 900);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      // cursor-none hides browser cursor inside this section only
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden cursor-none"
      style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
    >

      {/* THIS IS THE CURSOR — question icon, moves 1:1 with mouse */}
      {insideSection && (
        <motion.img
          src={question}
          className="absolute w-[55px] md:w-[70px] pointer-events-none z-[999]"
          style={{
            x: cursorX,        // directly bound — no animation delay
            y: cursorY,
            translateX: "-50%", // centered on hotspot
            translateY: "-50%",
          }}
        />
      )}

      {/* TRAIL — smaller icons that drift + fade behind cursor */}
      {particles.map((p) => (
        <motion.img
          key={p.id}
          src={question}
          className="absolute w-[35px] md:w-[50px] pointer-events-none z-[998]"
          initial={{ x: p.x, y: p.y, opacity: 0.7, scale: p.scale }}
          animate={{ x: p.x + p.offsetX, y: p.y + p.offsetY, opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ translateX: "-50%", translateY: "-50%" }}
        />
      ))}

      {/* STATIC CORNER ICONS */}
      <img src={question} className="absolute top-[10%] left-[10%] w-[40px] md:w-[60px]" />
      <img src={question} className="absolute top-[15%] right-[15%] w-[40px] md:w-[60px]" />
      <img src={question} className="absolute bottom-[10%] left-[15%] w-[40px] md:w-[60px]" />
      <img src={question} className="absolute bottom-[15%] right-[10%] w-[40px] md:w-[60px]" />

      {/* SCROLL TEXT */}
      <div className="text-center leading-none px-4 overflow-hidden">
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
    </section>
  );
};

export default QataWannaKnowMore;