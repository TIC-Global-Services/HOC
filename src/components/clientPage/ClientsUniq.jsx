import { motion } from "framer-motion";

import img1 from "../../assets/client/page/Qatamaran.png";
import img2 from "../../assets/client/page/Padlr.png";
import img3 from "../../assets/client/page/Gopalan.png";
import img4 from "../../assets/client/page/Syed Bawkher.png";
import img5 from "../../assets/client/page/Raks.png";
import cd from "../../assets/client/page/clientsCd.png";
import { Link } from "react-router-dom";

const items = [
  { img: img1, title: "QATAMARAN", path: "/client/qatamaran" },
  { img: img2, title: "PADLR", path: "/client/padlr" },
  { img: img3, title: "GOPALAN ENTERPRISES", path: "/client/gopalan-enterprises" },
  { img: img4, title: "SYED BAWKHER", path: "/client/syed" },
  { img: img5, title: "RAKS", path: "/client/raks" },
];

const ClientsUniq = () => {
  return (
    <section className="px-4 md:px-16 py-20 md:py-28">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10 justify-items-center">

        {items.map((item, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
        <Link to={item.path} >
            {/* Card Wrapper */}
            <div className="relative w-[200px] md:w-[220px] aspect-square">

              {/* CD */}
              <img
                src={cd}
                alt="CD"
                className="
                  absolute top-1/2 left-0
                  w-[140px] md:w-[180px]
                  -translate-y-1/2
                  z-0
                  transition-all duration-500
                  group-hover:translate-x-[60%]
                  group-hover:rotate-[180deg]
                "
              />

              {/* Image */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

            </div>

            

            {/* Title */}
            <p className="mt-1 md:mt-6 text-center md:text-left text-sm md:text-[24px] font-normal salo tracking-[2%] md:tracking-normal">
              {item.title}
            </p>
            </Link>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default ClientsUniq;