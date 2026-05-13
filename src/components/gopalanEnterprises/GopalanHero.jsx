import { motion } from "framer-motion";
import GridOverlay from "../GridOverlay";

import img1 from "../../assets/client/gopalan/heroImg1.png";
import img2 from "../../assets/client/gopalan/heroImg2.png";
import img3 from "../../assets/client/gopalan/heroImg3.png";
import img4 from "../../assets/client/gopalan/heroImg4.png";

const GopalanHero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center">
      <style>{`
        @keyframes floatY {
          0%, 100% { 
            transform: translateY(0px) rotate(var(--r)); 
          }

          50% { 
            transform: translateY(-18px) rotate(var(--r)); 
          }
        }

        .float-1 { 
          --r: 6deg; 
          animation: floatY 3.2s ease-in-out infinite; 
        }

        .float-2 { 
          --r: -8deg; 
          animation: floatY 4s ease-in-out 0.6s infinite; 
        }

        .float-3 { 
          --r: 10deg; 
          animation: floatY 3.6s ease-in-out 1.2s infinite; 
        }

        .float-4 { 
          --r: -6deg; 
          animation: floatY 4.4s ease-in-out 0.3s infinite; 
        }
      `}</style>

      <div className="w-full flex flex-col md:flex-row relative">
        {/* ───── LEFT SIDE ───── */}
        <div className="relative w-full h-[500px] md:h-screen md:w-1/2 overflow-hidden flex-shrink-0">
          {/* GRID */}
          <GridOverlay
            color="0,0,0"
            opacity={0.2}
            size={100}
            position="99px 0px"
          />

          {/* FLOATING IMAGES */}
          <img
            src={img1}
            alt=""
            className="float-1 absolute top-[15%] left-[10%] object-contain"
            style={{
              width: "clamp(70px, 30vh, 150px)",
            }}
          />

          <img
            src={img2}
            alt=""
            className="float-2 absolute top-[10%] right-[10%] object-contain"
            style={{
              width: "clamp(80px, 20vh, 150px)",
            }}
          />

          <img
            src={img3}
            alt=""
            className="float-3 absolute bottom-[12%] left-[8%] object-contain"
            style={{
              width: "clamp(100px, 30vh, 150px)",
            }}
          />

          <img
            src={img4}
            alt=""
            className="float-4 absolute bottom-[10%] right-[12%] object-contain"
            style={{
              width: "clamp(100px, 20vh, 150px)",
            }}
          />

          {/* CONTENT */}
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 px-4 relative z-10">
            <h1
              className="font-[1000] alinsa text-[#060EBB] leading-none text-center tracking-tight "
              style={{ fontSize: "clamp(48px, 18vh, 140px)" }}
            >
              GOPALAN GROUPS
            </h1>

            <button
              className="jost rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium"
              style={{
                width: "clamp(160px, 18vw, 240px)",
                height: "clamp(50px, 6vw, 80px)",
                fontSize: "clamp(12px, 1vw, 20px)",
              }}
            >
              MULTI-VERTICAL
            </button>
          </div>
        </div>

        {/* ───── RIGHT TEXT ───── */}
        <div
          className="
            absolute 
            top-0 
            right-0 
            h-full 
            w-full md:w-1/2
          "
        >
          {/* INNER ANIMATION CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              absolute
              top-[25%]
              left-0
              ml-[5%] xl:ml-[8%] 2xl:ml-[15%]
              w-[85%]
              max-w-[420px]
              lg:max-w-[541px]
              xl:max-w-[560px]
              2xl:max-w-[580px]
              flex justify-start
            "
          >
            <p
              className="jost text-start font-[500] capitalize text-black leading-[160%]"
              style={{
                fontSize: "clamp(14px,4vh,24px)",
              }}
            >
              Reimagining Gopalan Group's identity meant balancing four decades
              of trust with a future-ready vision. The refined{" "}
              <span className="salo text-[#E96428] text-[clamp(18px,6vh,36px)]">
                logomark
              </span>{" "}
              and evolved palette retain architectural roots while introducing a
              sense of dynamism, adaptability, and modernity. Through a modular,
              multi-tiered visual system, each vertical gains its own identity
              while remaining part of a cohesive whole resulting in a brand that
              is grounded.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GopalanHero;
