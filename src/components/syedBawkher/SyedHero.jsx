import { motion } from "framer-motion";
import GridOverlay from "../../components/GridOverlay";


const img1 = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/heroImg1.png";
const img2 = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/heroImg2.png";
const img3 = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/heroImg3.png";
const img4 = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/heroImg4.png";

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

      <div className="w-full flex flex-col lg:flex-row relative">
        {/* LEFT */}

        <div className="relative w-full h-[500px] lg:h-screen lg:w-1/2 overflow-hidden flex-shrink-0">
          {/* GRID */}
          <GridOverlay color="0,0,0" opacity={0.20} size={100} position="99px 0px" offsetY={70} />
          {/* FLOATING IMAGES */}
          <img
            src={img1}
            className="float-1 absolute top-[15%] left-[10%] w-[40px] sm:w-[60px] lg:w-[80px] xl:w-[130px]"
          />
          <img
            src={img2}
            className="float-2 absolute top-[15%] right-[10%] w-[50px] sm:w-[80px] lg:w-[100px] xl:w-[180px]"
          />
          <img
            src={img3}
            className="float-3 absolute bottom-[10%] left-[8%] w-[80px] sm:w-[110px] lg:w-[140px] xl:w-[180px]"
          />
          <img
            src={img4}
            className="float-4 absolute bottom-[10%] right-[8%] w-[80px] sm:w-[110px] lg:w-[140px] xl:w-[160px]"
          />

          {/* CENTER TEXT */}
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 lg:gap-6 px-4 text-center ">
            <h1
              className="font-[1000] alinsa text-[#060EBB] leading-none tracking-tight"
              style={{ fontSize: "clamp(42px, min(16vh, 6.5vw), 180px)" }}
            >
              SYED BAWKHER
            </h1>

            <button className="jost rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium w-[140px] h-[40px] sm:w-[180px] sm:h-[50px] lg:w-[200px] lg:h-[60px] xl:w-[220px] xl:h-[70px] text-[clamp(12px,1.1vw,16px)] sm:text-sm ">
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
          top-10
          right-0
          h-screen
          w-full lg:w-1/2
          flex items-center
          justify-center
          px-6 lg:px-8 xl:px-10
          overflow-hidden
        "
        >
          <div className="w-full max-w-[420px] lg:max-w-[520px] xl:max-w-[656px] 2xl:max-w-[760px]">
            <p
              className="
              jost text-start font-[500]
              tracking-tight text-black
              leading-[160%]
            "
              style={{
                fontSize: "clamp(12px,3.5vh,24px)",
              }}
            >
              Since 1904, Syed Bawkher & Co. has been a mainstay of the
              sartorial scene in Madras, and remains one of the oldest continual
              bespoke tailoring houses in the world. Marrying the custodial
              heritage of five generations with refined{" "}
              <span
                className="text-[#262666] salo"
                style={{
                  fontSize: "clamp(18px,5vh,40px)",
                }}
              >
                Craftsmanship and contemporary
              </span>{" "}
              technique, they epitomise the cardinal values of transparency,
              quality, and excellence in the service of the impeccable
              gentleman.
              <br />
              <br />
              Haus of Chaos created an analogue brochure for Syed Bawkher & Co.,
              as a piece of literature to be remembered for its textual and
              textural richness. A philosophy of{" "}
              <span
                className="text-[#262666] salo"
                style={{
                  fontSize: "clamp(18px,5vh,40px)",
                }}
              >
                "experience and encounter"
              </span>{" "}
              informed Haus of Chaos' process towards an object that materially
              imparts the sophistication intrinsic to Syed Bawkher.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SyedHero;
