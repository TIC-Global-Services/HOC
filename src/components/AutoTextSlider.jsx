import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Client Testimonial",
    text: `After years of searching for a graphic designer to create our logo and
    brand identity, we realized it wasn't just about a logo—it was about
    crafting an experience that reflects what our company truly stands
    for. Ria, the creative director of Haus of Chaos, not only
    conceptualized the journey of how clients experience our brand but
    also responded with remarkable efficiency.`,
    author: "Rak's Pallikkoodam, 21st century international school",
  },
  {
    title: "Client Testimonial",
    text: `After years of searching for a graphic designer to create our logo and
    brand identity, we realized it wasn't just about a logo—it was about
    crafting an experience that reflects what our company truly stands
    for. Ria, the creative director of Haus of Chaos, not only
    conceptualized the journey of how clients experience our brand but
    also responded with remarkable efficiency.`,
    author: "Rak's Pallikkoodam, 21st century international school",
  },
  {
    title: "Client Testimonial",
    text: `After years of searching for a graphic designer to create our logo and
    brand identity, we realized it wasn't just about a logo—it was about
    crafting an experience that reflects what our company truly stands
    for. Ria, the creative director of Haus of Chaos, not only
    conceptualized the journey of how clients experience our brand but
    also responded with remarkable efficiency.`,
    author: "Rak's Pallikkoodam, 21st century international school",
  },
];

const AutoTextSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* TITLE */}

          <h1 className="text-base md:text-[42px] mb-6 uppercase text-[#060ebb] tracking-widest salo">
            Client Testimonial
          </h1>
          
          {/* TEXT */}
          <h1 className="text-[#5B636D] px-4 font-[500] md:w-[70%] text-sm md:text-[22px] text-center md:leading-[30px]">
            {slides[index].text}
          </h1>

          {/* AUTHOR */}
          <h2 className="text-[#060ebb] text-xs md:text-[20px] mt-2 md:mt-5">
            {slides[index].author}
          </h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AutoTextSlider;
