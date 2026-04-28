import { motion } from "framer-motion";
import img1 from "../../assets/client/qatamaran/heroFloat1.png";
import img2 from "../../assets/client/qatamaran/heroFloat2.png";
import img3 from "../../assets/client/qatamaran/heroFloat3.png";
import img4 from "../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

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

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex flex-col md:flex-row relative">
        {/* LEFT SIDE */}
        <div
          className="relative w-full h-[500px] md:h-screen md:w-1/2 overflow-hidden flex-shrink-0"
          style={{ backgroundImage: `url(${grid})` }}
        >
          <img
            src={img1}
            className="float-1 absolute top-[10%] left-[10%] w-[50px] md:w-[80px] xl:w-[100px]"
          />
          <img
            src={img2}
            className="float-2 absolute top-[15%] right-[15%] w-[60px] md:w-[100px] xl:w-[120px]"
          />
          <img
            src={img3}
            className="float-3 absolute bottom-[10%] left-[10%] w-[100px] md:w-[140px] xl:w-[180px]"
          />
          <img
            src={img4}
            className="float-4 absolute bottom-[10%] right-[10%] w-[100px] md:w-[140px] xl:w-[180px]"
          />

          <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 px-4">
            <h1
              className="font-[1000] uppercase alinsa text-[#060EBB] leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(48px, 8vw, 140px)" }}
            >
              Qatamaran
            </h1>

            <button className="jost rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium w-[160px] h-[45px] md:w-[200px] md:h-[60px] xl:w-[220px] xl:h-[70px] text-sm md:text-base">
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
          w-full md:w-1/2
          flex items-center
          px-6 md:px-10 xl:px-14
        "
        >
          <p className="jost capitalize text-start font-[500] tracking-tight text-black max-w-[582px] leading-[160%] text-[14px] md:text-[18px] xl:text-[26px]">
            Qatamaran is a prêt-à-porter menswear label rooted in Chennai's rich
            tailoring heritage, designed for the modern gentleman who{" "}
            <span className="salo text-[#1E382D] text-[18px] md:text-[26px] xl:text-[40px]">
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
