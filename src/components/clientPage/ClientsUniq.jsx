import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../../assets/client/page/Qatamaran.png";
import img1back from "../../assets/client/page/QTBack.png";
import img2 from "../../assets/client/page/Padlr.png";
import img2back from "../../assets/client/page/PadlrBack.png";
import img3 from "../../assets/client/page/Gopalan.png";
import img3back from "../../assets/client/page/GEBack.png";
import img4 from "../../assets/client/page/Syed Bawkher.png";
import img4back from "../../assets/client/page/SyedBawkher_Back.png";
import img5 from "../../assets/client/page/Raks.png";
import img5back from "../../assets/client/page/RAKS_Back.png";
import cd from "../../assets/client/page/clientsCd.png";

const items = [
  { img: img1, backImg: img1back, title: "QATAMARAN", path: "/client/qatamaran" },
  { img: img2, backImg: img2back, title: "PADLR", path: "/client/padlr" },
  { img: img3, backImg: img3back, title: "GOPALAN ENTERPRISES", path: "/client/gopalan-enterprises" },
  { img: img4, backImg: img4back, title: "SYED BAWKHER", path: "/client/syed" },
  { img: img5, backImg: img5back, title: "RAKS INSTITUTIONS", path: "/client/raks" },
];

const ClientsUniq = () => {
  return (
    <section className="px-4 md:px-16 py-16 md:py-24 text-center">

      <style>{`
        @keyframes vinylSpin {
          from { transform: translateY(-50%) translateX(0%) rotate(0deg); }
          to   { transform: translateY(-50%) translateX(70%) rotate(720deg); }
        }
        .group:hover .vinyl-cd {
          animation: vinylSpin 0.6s ease-out forwards;
        }
        .flip-card {
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .group:hover .flip-card {
          transform: rotateY(180deg);
        }
        .flip-front,
        .flip-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* CURIOUS HEADING */}
      <div className="leading-none mb-10 md:mb-20">
        <h2 className="text-[50px] md:text-[150px] salo text-[#0000FF]">
          CURIOUS <span className="font-[Arial]">?</span>
        </h2>

        <p className="text-[20px] md:text-[60px] jost text-black tracking-tight mt-4 font-[500]">
          let's build your next big idea.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10 justify-items-center">

        {items.map((item) => (
          <Link key={item.title} to={item.path}>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              {/* CARD */}
              <div
                className="relative w-[200px] md:w-[220px] aspect-square"
                style={{ perspective: "800px" }}
              >

                {/* CD VINYL — slides out + spins */}
                <img
                  src={cd}
                  alt="CD"
                  className="vinyl-cd absolute top-1/2 left-0 w-[140px] md:w-[180px] z-0"
                  style={{ transform: "translateY(-50%) translateX(0%) rotate(0deg)" }}
                />

                {/* FLIP CARD */}
                <div className="flip-card relative z-10 w-full h-full">

                  {/* FRONT */}
                  <div className="flip-front absolute inset-0 rounded-md overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* BACK */}
                  <div className="flip-back absolute inset-0 rounded-md overflow-hidden">
                    <img
                      src={item.backImg}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>

              </div>

              {/* TITLE */}
              <p className="mt-2 md:mt-6 text-center md:text-left text-sm md:text-[24px] font-normal salo tracking-[2%] md:tracking-normal">
                {item.title}
              </p>

            </motion.div>
          </Link>
        ))}

      </div>

    </section>
  );
};

export default ClientsUniq;
