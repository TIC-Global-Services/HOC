import { motion } from "framer-motion";
import img1 from "../../assets/client/raks/img/heroImg1.png";
import img2 from "../../assets/client/raks/img/heroImg2.png";
import img3 from "../../assets/client/raks/img/heroImg3.png";
import img4 from "../../assets/client/raks/img/heroImg4.png";
import heroParaImg from "../../assets/client/raks/img/heroParaIcon.png";
import GridOverlay from "../GridOverlay";

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

      <div className="w-full flex flex-col md:flex-row relative">
        {/* LEFT */}
        <div className="relative w-full h-[500px] md:h-screen md:w-1/2 overflow-hidden flex-shrink-0">
          {/* GRID */}
          <GridOverlay
            color="0,0,0"
            opacity={0.20}
            size={100}
            position="99px 0px"
          />
          <img
            src={img2}
            className="float-1 absolute top-[10%] left-[10%] w-[50px] md:w-[80px] xl:w-[180px]"
          />
          <img
            src={img1}
            className="float-2 absolute top-[15%] right-[15%] w-[60px] md:w-[100px] xl:w-[180px]"
          />
          <img
            src={img4}
            className="float-3 absolute bottom-[10%] left-[10%] w-[100px] md:w-[140px] xl:w-[180px]"
          />
          <img
            src={img3}
            className="float-4 absolute bottom-[10%] right-[10%] w-[100px] md:w-[140px] xl:w-[180px]"
          />

          <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 px-4">
            <h1
              className="font-[1000] alinsa text-[#060EBB] leading-none tracking-tight text-center uppercase"
              style={{ fontSize: "clamp(60px, 15vh, 100px)" }}
            >
              RAKS <br />Pallikoodam
            </h1>

            <button className="jost rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium w-[180px] h-[50px] md:w-[200px] md:h-[60px] xl:w-[220px] xl:h-[70px] text-sm md:text-base">
              CHILDREN LEARNING
            </button>
          </div>
        </div>

        {/* RIGHT SIDE WRAPPER */}
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
              ml-[5%] xl:ml-[6%] 2xl:ml-[10%]
              w-[85%]
             max-w-[420px]
             lg:max-w-[520px]
             xl:max-w-[590px]
             2xl:max-w-[700px]
              flex justify-start
            "
          >
            <p className="jost text-start font-[500] capitalize text-black  leading-[150%] text-[14px] md:text-[18px] xl:text-[24px]">
              RaK's Institutions is a future-forward school rooted in the{" "}
              <span className="salo text-[#000085] text-[18px] md:text-[26px] xl:text-[36px]">
                Reggio Emilia philosophy,
              </span>{" "}
              fostering experiential, interdisciplinary learning for children to
              grow with purpose. Embracing this spirit, Haus of Chaos crafted an
              identity for{" "}
              <span className="salo text-[#000085] text-[18px] md:text-[26px] xl:text-[36px]">
                RaK's Pallikkoodam
              </span>{" "}
              that is warm, attentive, and child-centric. The result is a
              playful yet thoughtful visual language and environment designed to
              nurture curiosity and lifelong learning.
              <img
                src={heroParaImg}
                alt="Binocular"
                className="inline-block mr-6 size-[14%] object-contain"
              />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RaksHero;
