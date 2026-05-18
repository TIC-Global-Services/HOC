import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const imagePaths = [
  "/callouts/1.png",
  "/callouts/2.png",
  "/callouts/3.png",
  "/callouts/4.png",
  "/callouts/5.png",
];

const IMAGE_DELAY = 100;

const CursorHover = () => {
  const [images, setImages] = useState([]);
  const lastImageTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastImageTime.current < IMAGE_DELAY) return;
      lastImageTime.current = now;

      const newImage = {
        id: now + Math.random(),
        src: imagePaths[Math.floor(Math.random() * imagePaths.length)],
        x: e.clientX,
        y: e.clientY,
        offsetX: Math.random() * 100 - 50,
        offsetY: Math.random() * 100 - 50,
      };

      setImages((prev) => [...prev, newImage]);

      setTimeout(() => {
        setImages((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {images.map((img) => (
        <motion.img
          key={img.id}
          src={img.src}
          alt="hover-effect"
          className="absolute object-cover w-56 h-56"
          initial={{ x: img.x, y: img.y, opacity: 1, scale: 1 }}
          animate={{ x: img.x + img.offsetX, y: img.y + img.offsetY, opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default CursorHover;
