import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const wordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mx-[0.05rem]">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export const AnimatedWord = ({ children, className }) => (
  <span className="inline-block overflow-hidden align-bottom mx-[0.5em]">
    <motion.span className={`inline-block ${className}`} variants={wordVariants}>
      {children}
    </motion.span>
  </span>
);

export { containerVariants, wordVariants };