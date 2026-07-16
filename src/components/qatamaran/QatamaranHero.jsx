import { motion } from "framer-motion";
import GridOverlay from "../GridOverlay";


const img1 = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/heroFloat1.png";
const img2 = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/heroFloat2.png";
const img3 = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/heroFloat3.png";
const img4 = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/heroFloat4.png";


const QatamaranHero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotate(var(--r)); }
          50% { transform: translateY(-18px) rotate(var(--r)); }
        }
        .float-1 { --r: 6deg; animation: floatY 3.2s ease-in-out infinite; }
        .float-2 { --r: -8deg; animation: floatY 4s ease-in-out 0.6s infinite; }
        .float-3 { --r: 10deg; animation: floatY 3.6s ease-in-out 1.2s infinite; }
        .float-4 { --r: -6deg; animation: floatY 4.4s ease-in-out 0.3s infinite; }
      `}</style>

      <div className="w-full flex flex-col lg:flex-row relative">
        {/* LEFT SIDE */}
        <div
          className="relative w-full h-[500px] lg:h-screen lg:w-1/2 overflow-hidden flex-shrink-0"
        >
          {/* GRID */}
          <GridOverlay color="0,0,0" opacity={0.20} size={100} position="99px 0px" offsetY={70} />
          <img
            src={img1}
            className="float-1 absolute top-[15%] left-[10%] w-[50px] lg:w-[80px] xl:w-[100px]"
          />
          <img
            src={img2}
            className="float-2 absolute top-[15%] right-[15%] w-[60px] lg:w-[100px] xl:w-[100px]"
          />
          <img
            src={img3}
            className="float-3 absolute bottom-[8%] left-[10%] w-[100px] lg:w-[140px] xl:w-[220px]"
          />
          <img
            src={img4}
            className="float-4 absolute bottom-[8%] right-[10%] w-[100px] lg:w-[140px] xl:w-[220px]"
          />

          <div className="w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-6 px-4">
            <h1
              className="alinsa text-[#060EBB] leading-none  text-center"
              style={{ fontSize: "clamp(48px, min(12vh, 8vw), 140px)" }}
            >
              QATAMARAN
            </h1>

            <button className="jost rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium w-[160px] h-[45px] lg:w-[200px] lg:h-[60px] xl:w-[220px] xl:h-[70px] text-[clamp(14px,1.1vw,16px)] ">
              FASHION & LIFESTYLE
            </button>
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
          absolute 
          top-0 
          right-0 
          h-full 
          w-full lg:w-1/2
          flex items-center justify-start
          px-6 lg:px-8 xl:px-12 2xl:px-14
        "
        >
          <p className="jost text-start font-[500] tracking-tight text-black max-w-[420px] lg:max-w-[540px] xl:max-w-[580px] 2xl:max-w-[7400px] leading-[160%] text-[clamp(14px,1.3vw,18px)] xl:text-[24px]">
            Qatamaran is a prêt-à-porter menswear label rooted in Chennai's rich
            tailoring heritage, designed for the modern gentleman who{" "}
            <span className="salo text-[#1E382D] text-[clamp(18px,1.8vw,26px)] xl:text-[36px]">
              balances luxury with simplicity.
            </span>{" "}
            Haus of Chaos crafted a visual identity inspired by its tropical
            roots, along with an intimate packaging experience that reflects the
            refined sensibilities of its patrons.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QatamaranHero;
