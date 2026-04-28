import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const JobListings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  const positions = [
    "UI/UX Designer // Product Designer",
    "Motion Designer",
    "Illustrator/Multimedia Designer",
    "Experimental Graphic Designer",
    "Experimental Graphic Designer",
    "Experimental Graphic Designer",

  ];

  return (
    <div className="md:px-10 px-2 py-10">
      <div
        ref={ref}
        className="min-h-[70vh] rounded-[20px] bg-black text-white p-4 md:p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex  md:flex-row flex-col mx-auto md:px-10 py-10 md:py-20 gap-10"
        >
          <div className="mb-12 md:w-[55%] text-left">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="xl:text-[50px] lg:text-[42px] text-4xl md:leading-[50px] font-bold jost mb-6"
            >
              <span className="text-[#060ebb] hover:text-white ">E-mail us</span> if you are a
              creator, open to learning, nurturing, growing, and fostering the
              ethos of the company, "order in chaos".
            </motion.h1>

            <div className="flex gap-4">
              <div className="flex justify-center items-center">
                <button
                  className="bg-white jost text-[#060ebb] px-6 py-3 rounded-full font-medium transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents unwanted navigation issues
                    window.open(
                      "mailto:explore@hausofchaos.co?subject=Contact%20from%20Website",
                      "_self"
                    );
                  }}
                >
                  E-MAIL NOW
                </button>
              </div>

              <a href="https://www.linkedin.com/company/hausofchaos/" 
              target="_blank"
              > 
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border jost border-white px-6 py-3 rounded-full font-medium transition-colors duration-300 hover:bg-white hover:text-black"
                >
                  VIEW LINKEDIN
                </motion.button>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="space-y-4  md:mt-20 text-center md:text-right md:w-[45%]"
          >
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index }}
                whileHover={{ x: 10 }}
                className="border-b border-gray-800 py-4  transition-colors duration-300 hover:text-[#060ebb]"
              >
                <h2 className="text-xl font-medium">{position}</h2>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobListings;