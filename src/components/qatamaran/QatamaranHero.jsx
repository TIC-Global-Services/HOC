import { motion } from "framer-motion";
import img1 from "../../assets/client/qatamaran/heroFloat1.png";
import img2 from "../../assets/client/qatamaran/heroFloat2.png";
import img3 from "../../assets/client/qatamaran/heroFloat3.png";
import img4 from "../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

// animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const wordVariants = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// splits text into animated word spans
const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

const QatamaranHero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center">

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotate(var(--r)); }
          50%       { transform: translateY(-18px) rotate(var(--r)); }
        }
        .float-1 { --r: 6deg;   animation: floatY 3.2s ease-in-out 0s   infinite; }
        .float-2 { --r: -8deg;  animation: floatY 4s   ease-in-out 0.6s infinite; }
        .float-3 { --r: 10deg;  animation: floatY 3.6s ease-in-out 1.2s infinite; }
        .float-4 { --r: -6deg;  animation: floatY 4.4s ease-in-out 0.3s infinite; }
      `}</style>

      {/* CENTER CONTAINER */}
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex flex-col md:flex-row">

        {/* ── LEFT SIDE ── */}
        <div
          className="relative w-full h-[500px] md:h-screen md:w-1/2 overflow-hidden flex-shrink-0"
          style={{
            backgroundImage: `url(${grid})`,
            backgroundSize: "cover",
          }}
        >
          <img src={img1} className="float-1 absolute top-[10%] left-[10%] w-[50px] md:w-[80px] xl:w-[100px]" />
          <img src={img2} className="float-2 absolute top-[15%] right-[15%] w-[60px] md:w-[100px] xl:w-[120px]" />
          <img src={img3} className="float-3 absolute bottom-[10%] left-[10%] w-[100px] md:w-[140px] xl:w-[180px]" />
          <img src={img4} className="float-4 absolute bottom-[10%] right-[10%] w-[100px] md:w-[140px] xl:w-[180px]" />

          <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 px-4">
            <h1
              className="font-[1000] alinsa text-[#060EBB] leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(48px, 8vw, 140px)" }}
            >
              Qatamaran
            </h1>
            <button className="rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium w-[160px] h-[45px] md:w-[200px] md:h-[60px] xl:w-[220px] xl:h-[70px] text-sm md:text-base">
              FASHION & LIFESTYLE
            </button>
          </div>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-10 xl:px-14 py-10 md:py-0">

          <motion.p
            className="jost capitalize text-start font-[500] tracking-tight text-black max-w-[656px] leading-[150%] text-[14px] md:text-[18px] xl:text-[22px] 2xl:text-[26px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatedText text="Qatamaran is a prêt-à-porter menswear label rooted in Chennai's rich tailoring heritage, designed for the modern gentleman who" />

            {/* highlighted span */}
            <span className="inline-block overflow-hidden align-bottom mx-[0.25em]">
              <motion.span
                className="inline-block salo font-[500] text-[#1E382D] text-[18px] md:text-[26px] xl:text-[32px] 2xl:text-[40px]"
                variants={wordVariants}
              >
                balances luxury with simplicity.
              </motion.span>
            </span>

            <AnimatedText text="Haus of Chaos crafted a visual identity inspired by its tropical roots, along with an intimate packaging experience that reflects the refined sensibilities of its patrons." />
          </motion.p>

        </div>

      </div>
    </section>
  );
};

export default QatamaranHero;