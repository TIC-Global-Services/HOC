import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const img1 =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/Qatamaran.png";
const img1back =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/QTBack.png";

const img2 =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/Padlr.png";
const img2back =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/PadlrBack.png";

const img3 =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/Gopalan.png";
const img3back =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/GEBack.png";

const img4 =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/Syed%20Bawkher.png";
const img4back =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/SyedBawkher_Back.png";

const img5 =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/Raks.png";
const img5back =
  "https://ik.imagekit.io/hoc01/assets/client/clientPage/RAKS_Back.png";

// ALL CLIENTS
const allClients = [
  {
    id: "qatamaran",
    title: "QATAMARAN",
    image: img1,
    backImg: img1back,
    link: "/client/qatamaran",
  },
  {
    id: "padlr",
    title: "PADLR",
    image: img2,
    backImg: img2back,
    link: "/client/padlr",
  },
  {
    id: "gopalan",
    title: "GOPALAN ENTERPRISES",
    image: img3,
    backImg: img3back,
    link: "/client/gopalan-enterprises",
  },
  {
    id: "syed",
    title: "SYED BAWKHER",
    image: img4,
    backImg: img4back,
    link: "/client/syed",
  },
  {
    id: "raks",
    title: "RAKS INSTITUTIONS",
    image: img5,
    backImg: img5back,
    link: "/client/raks",
  },
];

const ViewNext = ({
  activeClient = "padlr",
  titleColor = "#9bc7f0",

  heading = (
    <>
      <span className="salo">VIEW NEXT</span>
      <span
        className="font-[Arial] inline-block normal-case"
        style={{ fontFamily: "Arial" }}
      >
        ?
      </span>
    </>
  ),
}) => {
  // REMOVE ACTIVE CLIENT
  const clients = allClients
    .filter((item) => item.id !== activeClient)
    .slice(0, 4);

  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-28">
      {/* HEADING */}
      <div className="mb-16 flex justify-center lg:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            salo
            text-[40px] lg:text-[90px]
            leading-none
            tracking-wide
            uppercase
          "
          style={{
            color: titleColor,
          }}
        >
          {heading}
        </motion.h2>
      </div>

      {/* GRID */}
      <div
        className="
          mx-auto grid w-full max-w-[1400px]
          grid-cols-2 lg:grid-cols-4
          justify-items-center
          gap-x-6 lg:gap-x-12
          gap-y-14 lg:gap-y-10
          px-4 lg:px-10
        "
      >
        {clients.map((item, index) => (
          <Link key={item.id} to={item.link}>
            <motion.div
              className="group"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* CARD */}
              <div
                className="
                  relative
                  w-[160px] lg:w-[200px]
                  aspect-square
                "
                style={{ perspective: "1000px" }}
              >
                {/* CD */}
                <img
                  src="/client/page/clientsCd.png"
                  alt="CD"
                  className="
                    absolute left-0 top-1/2
                    z-0
                    w-[120px] lg:w-[160px]
                    -translate-y-1/2
                    transition-all duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:translate-x-[70%]
                    group-hover:rotate-[720deg]
                  "
                />

                {/* FLIP CARD */}
                <div
                  className="
                    relative z-10
                    h-full w-full
                    transition-transform duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                  "
                >
                  {/* FRONT */}
                  <div
                    className="
                      absolute inset-0
                      overflow-hidden rounded-[6px]
                      [backface-visibility:hidden]
                      [-webkit-backface-visibility:hidden]
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* BACK */}
                  <div
                    className="
                      absolute inset-0
                      overflow-hidden rounded-[6px]
                      [transform:rotateY(180deg)]
                      [backface-visibility:hidden]
                      [-webkit-backface-visibility:hidden]
                    "
                  >
                    <img
                      src={item.backImg}
                      alt={`${item.title} Back`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* TITLE */}
              <p
                className="
                  salo
                  mt-4 lg:mt-6
                  text-center lg:text-left
                  text-[12px] sm:text-xl lg:text-[24px]
                  font-normal
                  tracking-[1px]
                "
              >
                {item.title}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ViewNext;