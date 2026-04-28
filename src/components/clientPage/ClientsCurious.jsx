// import { useState } from "react";
// import { motion } from "framer-motion";

// import frontImg from "../../assets/client/page/curiousFront.png";
// import backImg from "../../assets/client/page/curiousBack.png";
// import cd from "../../assets/client/page/clientsCd.png";

// const ClientsCurious = () => {
//   const [flipped, setFlipped] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   return (
//     <section className="flex flex-col items-center justify-center text-center px-6 py-10 mt-6 md:-mt-[0%] md:py-20">

//       {/* TEXT */}
//       <div className="leading-none">
//         <h2 className="text-[50px] md:text-[150px] salo text-[#0000FF]">
//           CURIOUS ?
//         </h2>

//         <p className="text-[20px] md:text-[60px] jost text-black tracking-tight font-[500]">
//           let’s build your next big idea.
//         </p>
//       </div>

//       {/* CARD WRAPPER */}
//       <div
//         className="relative mt-10 md:mt-[10%] right-[5%] cursor-pointer"
//         onClick={() => setFlipped(!flipped)}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >

//         {/* CD ANIMATION */}
//         <motion.img
//           src={cd}
//           alt="CD"
//           className="absolute top-0 right-0 w-[180px] md:w-[500px] -translate-y-1/2 z-0"
//           initial={{ x: 0, rotate: 0 }}
//           animate={{
//             x: hovered ? 320 : 0,   // slide out
//             rotate: hovered ? 180 : 0, // rotate
//           }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         />

//         {/* FLIP CARD */}
//         <motion.div
//           className="relative w-[260px] md:w-[500px] aspect-square z-10"
//           style={{ perspective: "1000px" }}
//         >
//           <motion.div
//             animate={{ rotateY: flipped ? 180 : 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative w-full h-full"
//             style={{ transformStyle: "preserve-3d" }}
//           >

//             {/* FRONT */}
//             <div
//               className="absolute w-full h-full rounded-md overflow-hidden shadow-md"
//               style={{ backfaceVisibility: "hidden" }}
//             >
//               <img
//                 src={frontImg}
//                 alt="Front"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* BACK */}
//             <div
//               className="absolute w-full h-full rounded-md overflow-hidden shadow-md"
//               style={{
//                 transform: "rotateY(180deg)",
//                 backfaceVisibility: "hidden",
//               }}
//             >
//               <img
//                 src={backImg}
//                 alt="Back"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default ClientsCurious;