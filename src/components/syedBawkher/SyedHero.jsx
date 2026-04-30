import { motion } from "framer-motion";

import img1 from "../../assets/client/syedBawkher/img/heroImg1.png";
import img2 from "../../assets/client/syedBawkher/img/heroImg2.png";
import img3 from "../../assets/client/syedBawkher/img/heroImg3.png";
import img4 from "../../assets/client/syedBawkher/img/heroImg4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const SyedHero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center relative overflow-hidden">
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

        {/* LEFT */}
        <div
          className="relative w-full h-[500px] md:h-screen md:w-1/2 overflow-hidden flex-shrink-0"
          style={{ backgroundImage: `url(${grid})` }}
        >
          {/* FLOATING IMAGES */}
          <img src={img1} className="float-1 absolute top-[5%] left-[10%] w-[40px] sm:w-[60px] md:w-[80px] xl:w-[120px]" />
          <img src={img2} className="float-2 absolute top-[15%] right-[10%] w-[50px] sm:w-[80px] md:w-[100px] xl:w-[160px]" />
          <img src={img3} className="float-3 absolute bottom-[10%] left-[8%] w-[80px] sm:w-[110px] md:w-[140px] xl:w-[160px]" />
          <img src={img4} className="float-4 absolute bottom-[10%] right-[8%] w-[80px] sm:w-[110px] md:w-[140px] xl:w-[140px]" />

          {/* CENTER TEXT */}
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 md:gap-6 px-4 text-center md:text-left">
            <h1
              className="font-[1000] alinsa text-[#060EBB] leading-none tracking-tight"
              style={{ fontSize: "clamp(42px, 18vh, 180px)" }}
            >
              SYED BAWKHER
            </h1>

            <button className="jost rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium w-[140px] h-[40px] sm:w-[180px] sm:h-[50px] md:w-[200px] md:h-[60px] xl:w-[220px] xl:h-[70px] text-xs sm:text-sm md:text-base">
              FASHION
            </button>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div
          className="
            w-full 
            md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 
            px-5 sm:px-8 md:px-10 xl:px-6 
            py-8 md:py-0
            md:max-w-[50%]
          "
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="
              jost capitalize text-black font-[500]
              leading-[140%] text-start tracking-tight
              text-[13px] sm:text-[15px] md:text-[18px] xl:text-[25px]
              max-w-[600px]
            "
          >
            Since 1904, Syed Bawkher & Co. has been a mainstay of the sartorial scene in Madras, and remains one of the oldest continual bespoke tailoring houses in the world. Marrying the custodial heritage of five generations with refined{" "}
            
            <span className="text-[#262666] salo text-[16px] sm:text-[20px] md:text-[24px] xl:text-[30px]">
              Craftsmanship and contemporary
            </span>{" "}
            
            technique, they epitomise the cardinal values of transparency, quality, and excellence in the service of the impeccable gentleman.
            
            <br /><br />
            
            Haus of Chaos created an analogue brochure for Syed Bawkher & Co., as a piece of literature to be remembered for its textual and textural richness. A philosophy of{" "}
            
            <span className="text-[#262666] salo text-[16px] sm:text-[20px] md:text-[24px] xl:text-[30px]">
              "experience and encounter"
            </span>{" "}
            
            informed Haus of Chaos' process towards an object that materially imparts the sophistication intrinsic to Syed Bawkher.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default SyedHero;