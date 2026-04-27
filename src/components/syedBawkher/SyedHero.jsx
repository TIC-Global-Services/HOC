import { motion } from "framer-motion";
import { AnimatedText, AnimatedWord, containerVariants } from "../reusable/TextAnimation";
import img1 from "../../assets/client/syedBawkher/img/heroImg1.png";
import img2 from "../../assets/client/syedBawkher/img/heroImg2.png";
import img3 from "../../assets/client/syedBawkher/img/heroImg3.png";
import img4 from "../../assets/client/syedBawkher/img/heroImg4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const SyedHero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotate(var(--r)); }
          50%       { transform: translateY(-18px) rotate(var(--r)); }
        }
        .float-1 { --r: 6deg;   animation: floatY 3.2s ease-in-out 0s      infinite; }
        .float-2 { --r: -8deg;  animation: floatY 4s   ease-in-out 0.6s    infinite; }
        .float-3 { --r: 10deg;  animation: floatY 3.6s ease-in-out 1.2s    infinite; }
        .float-4 { --r: -6deg;  animation: floatY 4.4s ease-in-out 0.3s    infinite; }
      `}</style>

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex flex-col md:flex-row">

        {/* LEFT */}
        <div
          className="relative w-full h-[500px] md:h-screen md:w-1/2 overflow-hidden flex-shrink-0"
          style={{ backgroundImage: `url(${grid})`, }}
        >
          <img src={img1} className="float-1 absolute top-[10%] left-[10%] w-[50px] md:w-[80px] xl:w-[100px]" />
          <img src={img2} className="float-2 absolute top-[15%] right-[15%] w-[60px] md:w-[100px] xl:w-[120px]" />
          <img src={img3} className="float-3 absolute bottom-[10%] left-[10%] w-[100px] md:w-[140px] xl:w-[180px]" />
          <img src={img4} className="float-4 absolute bottom-[10%] right-[10%] w-[100px] md:w-[140px] xl:w-[160px]" />

          <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 px-4">
            <h1
              className="font-[1000] alinsa text-start text-[#060EBB] leading-none tracking-tight"
              style={{ fontSize: "clamp(48px, 10vw, 200px)" }}
            >
              SYED BAWKHER
            </h1>
            <button className="rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium w-[160px] h-[45px] md:w-[200px] md:h-[60px] xl:w-[220px] xl:h-[70px] text-sm md:text-base">
              FASHION
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-10 xl:px-14 py-10 md:py-0">
          <motion.p
            className="jost capitalize text-start font-[500] tracking-tight text-black max-w-[656px] leading-[140%] text-[14px] md:text-[18px] xl:text-[22px] 2xl:text-[26px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatedText text="Since 1904, Syed Bawkher & Co. has been a mainstay of the sartorial scene in Madras, and remains one of the oldest continual bespoke tailoring houses in the world. Marrying the custodial heritage of five generations with refined" />
            {" "}
            <AnimatedWord className="text-[#262666] salo text-[18px] md:text-[26px] xl:text-[32px] 2xl:text-[40px]">
              craftsmanship and contemporary
            </AnimatedWord>
            {" "}
            <AnimatedText text="technique, they epitomise the cardinal values of transparency, quality, and excellence in the service of the impeccable gentleman." />
            <br />
            <AnimatedText text="Haus of Chaos created an analogue brochure for Syed Bawkher & Co., as a piece of literature to be remembered for its textual and textural richness. A philosophy of" />
            {" "}
            <AnimatedWord className="text-[#262666] salo text-[18px] md:text-[26px] xl:text-[32px] 2xl:text-[40px]">
              "experience and encounter"
            </AnimatedWord>
            {" "}
            <AnimatedText text="informed Haus of Chaos' process towards an object that materially imparts the sophistication intrinsic to Syed Bawkher." />
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default SyedHero;