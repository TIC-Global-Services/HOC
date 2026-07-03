import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const img1 ="https://ik.imagekit.io/hoc01/assets/client/clientPage/Qatamaran.png";

const img1back ="https://ik.imagekit.io/hoc01/assets/client/clientPage/QTBack.png";

const img2 ="https://ik.imagekit.io/hoc01/assets/client/clientPage/Padlr.png";

const img2back ="https://ik.imagekit.io/hoc01/assets/client/clientPage/PadlrBack.png";

const img3 ="https://ik.imagekit.io/hoc01/assets/client/clientPage/Gopalan.png";

const img3back ="https://ik.imagekit.io/hoc01/assets/client/clientPage/GEBack.png";

const img4 ="https://ik.imagekit.io/hoc01/assets/client/clientPage/Syed%20Bawkher.png";

const img4back ="https://ik.imagekit.io/hoc01/assets/client/clientPage/SyedBawkher_Back.png";

const img5 ="https://ik.imagekit.io/hoc01/assets/client/clientPage/Raks.png";

const img5back ="https://ik.imagekit.io/hoc01/assets/client/clientPage/RAKS_Back.png";

const cd ="https://ik.imagekit.io/hoc01/assets/client/clientPage/clientsCd.png";

const items = [
  { img: img1, backImg: img1back, title: "QATAMARAN", path: "/client/qatamaran" },
  { img: img2, backImg: img2back, title: "PADLR", path: "/client/padlr" },
  { img: img3, backImg: img3back, title: "GOPALAN ENTERPRISES", path: "/client/gopalan-enterprises" },
  { img: img4, backImg: img4back, title: "SYED BAWKHER", path: "/client/syed" },
  { img: img5, backImg: img5back, title: "RAKS INSTITUTIONS", path: "/client/raks" },
];

const ClientsUniq = () => {
  return (
    <section className="px-4 lg:px-16 py-16 lg:py-24 text-center">

      <style>{`
        .vinyl-cd {
          transform: translateY(-50%) translateX(0%) rotate(0deg);
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .group:hover .vinyl-cd {
          transform: translateY(-50%) translateX(70%) rotate(720deg);
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
      <div className="leading-none mb-10 lg:mb-20">
        <h2 className="text-[clamp(50px,10.4vw,150px)] salo text-[#060ebb]">
          CURIOUS <span className="font-[Arial]">?</span>
        </h2>

        <p className="text-[clamp(20px,4.2vw,60px)] jost text-black tracking-tight mt-4 font-[500]">
          let's build your next big idea.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-12 justify-items-center w-full max-w-[1400px] mx-auto">

        {items.map((item) => (
          <Link key={item.title} to={item.path} className="block w-full max-w-[250px]">
            <motion.div
              className="group w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              {/* CARD */}
              <div
                className="relative w-full aspect-square"
                style={{ perspective: "800px" }}
              >

                {/* CD VINYL — slides out + spins */}
                <img
                  src={cd}
                  alt="CD"
                  className="vinyl-cd absolute top-1/2 left-0 w-[80%] z-0"
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
              <p className="mt-2 lg:mt-6 text-center lg:text-left text-[clamp(20px,1.7vw,24px)] font-normal salo tracking-[2%] lg:tracking-normal">
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
