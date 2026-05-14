import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../assets/client/page/Qatamaran.png";
import img2 from "../assets/client/page/Padlr.png";
import img3 from "../assets/client/page/Gopalan.png";
import img4 from "../assets/client/page/Syed Bawkher.png";
import img5 from "../assets/client/page/Raks.png";

import cd from "../assets/client/page/clientsCd.png";

// ALL CLIENTS
const allClients = [
  {
    id: "qatamaran",
    title: "QATAMARAN",
    image: img1,
    link: "/client/qatamaran",
  },
  {
    id: "padlr",
    title: "PADLR",
    image: img2,
    link: "/client/padlr",
  },
  {
    id: "gopalan",
    title: "GOPALAN ENTERPRISES",
    image: img3,
    link: "/client/gopalan-enterprises",
  },
  {
    id: "syed",
    title: "SYED BAWKHER",
    image: img4,
    link: "/client/syed",
  },
  {
    id: "raks",
    title: "RAKS INSTITUTIONS",
    image: img5,
    link: "/client/raks",
  },
];

const ViewNext = ({
  activeClient = "padlr",

  // COLORS
  titleColor = "#9bc7f0",

  // TEXT
  heading = (
    <>
      <span className="salo">VIEW NEXT</span>
       <span className="font-[Arial] inline-block normal-case"
      style={{ fontFamily: "Arial" }}>?</span>
    </>
  ),
}) => {
  // REMOVE ACTIVE CLIENT
  const clients = allClients
    .filter((item) => item.id !== activeClient)
    .slice(0, 4);

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* HEADING */}
      <div className="flex justify-center mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            uppercase salo
            text-[40px] md:text-[90px]
            leading-none
            tracking-wide
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
          grid grid-cols-2 md:grid-cols-4
          gap-x-6 md:gap-x-12
          gap-y-14 md:gap-y-10
          justify-items-center
          w-full max-w-[1400px]
          mx-auto
          px-4 md:px-10
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
                  w-[160px] md:w-[200px]
                  aspect-square
                "
              >
                {/* CD */}
                <img
                  src={cd}
                  alt="CD"
                  className="
                    absolute top-1/2 left-0
                    w-[120px] md:w-[160px]
                    -translate-y-1/2
                    z-0
                    transition-all duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:translate-x-[70%]
                    group-hover:rotate-[180deg]
                  "
                />

                {/* IMAGE */}
                <div
                  className="
                    relative z-10
                    w-full h-full
                    overflow-hidden
                    rounded-[6px]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-500
                      group-hover:scale-[1.05]
                    "
                  />
                </div>
              </div>

              {/* TITLE */}
              <p
                className="
                  mt-4 md:mt-6
                  text-center md:text-left
                  text-[12px] md:text-[24px]
                  font-normal
                  salo
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
