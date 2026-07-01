import { motion } from "framer-motion";
import GridOverlay from "../GridOverlay";




const img1 = "https://ik.imagekit.io/hoc01/assets/client/raks/heroImg1.png";
const img2 = "https://ik.imagekit.io/hoc01/assets/client/raks/heroImg2.png";
const img3 = "https://ik.imagekit.io/hoc01/assets/client/raks/heroImg3.png";
const img4 = "https://ik.imagekit.io/hoc01/assets/client/raks/heroImg4.png";
const heroParaImg = "https://ik.imagekit.io/hoc01/assets/client/raks/heroParaIcon.png";


const RaksHero = () => {
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
        {/* LEFT */}
        <div className="relative w-full h-[500px] lg:h-screen lg:w-1/2 overflow-hidden flex-shrink-0">
          {/* GRID */}
          <GridOverlay
            color="0,0,0"
            opacity={0.20}
            size={100}
            position="99px 0px"
            offsetY={70}
          />
          <img
            src={img2}
            className="float-1 absolute top-[15%] left-[10%] w-[50px] lg:w-[80px] xl:w-[180px]"
          />
          <img
            src={img1}
            className="float-2 absolute top-[15%] right-[15%] w-[60px] lg:w-[100px] xl:w-[180px]"
          />
          <img
            src={img4}
            className="float-3 absolute bottom-[10%] left-[10%] w-[100px] lg:w-[140px] xl:w-[180px]"
          />
          <img
            src={img3}
            className="float-4 absolute bottom-[10%] right-[10%] w-[100px] lg:w-[140px] xl:w-[180px]"
          />

          <div className="w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-6 px-4">
            <h1
              className="font-[1000] alinsa text-[#060EBB] leading-none tracking-tight text-center uppercase"
              style={{ fontSize: "clamp(40px, min(15vh, 6.5vw), 90px)" }}
            >
              RAKS <br />INSTITUTIONS
            </h1>

            <button
              className="jost rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium"
              style={{
                width: "clamp(180px, 20vw, 260px)",
                height: "clamp(50px, 6vw, 80px)",
                fontSize: "clamp(12px, 1.2vw, 20px)",
              }}
            >
              INTERNATIONAL SCHOOL
            </button>
          </div>
        </div>

        {/* RIGHT SIDE WRAPPER */}
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
          <div
            className="
             w-full
             max-w-[420px]
             lg:max-w-[520px]
             xl:max-w-[590px]
             2xl:max-w-[700px]
            "
          >
            <p className="jost text-start font-[500] text-black leading-[150%] text-[clamp(14px,1.3vw,18px)] xl:text-[26px]">
              RAKS Institutions is a future-forward school rooted in the{" "}
              <span className="salo text-[#000085] text-[clamp(18px,1.8vw,26px)] xl:text-[40px]">
                Reggio Emilia philosophy,
              </span>{" "}
              fostering experiential, interdisciplinary learning for children to
              grow with purpose. Embracing this spirit, Haus of Chaos crafted an
              identity for{" "}
              <span className="salo text-[#000085] text-[clamp(18px,1.8vw,26px)] xl:text-[40px]">
                RAKS Pallikkoodam
              </span>{" "}
              that is warm, attentive, and child-centric. The result is a
              playful yet thoughtful visual language and environment designed to
              nurture curiosity and lifelong learning.
              <img
                src={heroParaImg}
                alt="Binocular"
                className="inline-block mr-6 size-[10%] object-contain"
              />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RaksHero;
