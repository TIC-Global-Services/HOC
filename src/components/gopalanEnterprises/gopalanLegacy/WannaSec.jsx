// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// import question from "../../../assets/client/gopalan/question.png";

// import ImagesTrail from "../../../components/ImagesTrail";
// import GridOverlay from "../../../components/GridOverlay";

// const lines = ["Wanna..", "Know", "More"];

// const AnimatedChar = ({
//   char,
//   scrollYProgress,
//   start,
//   end,
// }) => {
//   const opacity = useTransform(
//     scrollYProgress,
//     [start, end],
//     [0, 1]
//   );

//   const y = useTransform(
//     scrollYProgress,
//     [start, end],
//     [-80, 0]
//   );

//   return (
//     <motion.span
//       style={{ opacity, y }}
//       className="
//         salo
//         uppercase
//         text-[#E96428]
//         font-[500]
//         inline-block
//         will-change-transform
//       "
//     >
//       <span className="text-[clamp(80px,10vw,220px)] leading-none">
//         {char === " " ? "\u00A0" : char}
//       </span>
//     </motion.span>
//   );
// };

// const WannaSec = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start center", "center center"],
//   });

//   return (
//     <section
//       ref={ref}
//       className="
//         relative
//         w-full
//         h-screen
//         overflow-hidden
//         flex
//         items-center
//         justify-center
//         isolate
//       "
//     >
//       {/* GRID */}
//       <div className="absolute inset-0 z-[1] pointer-events-none">
//         <GridOverlay
//           color="0,0,0"
//           opacity={0.15}
//           size={100}
//           position="99px 0px"
//         />
//       </div>

    
//         <ImagesTrail image={question} />
      

//       {/* TEXT CONTENT */}
//       <div
//         className="
//           relative
//           z-[3]
//           w-full
//           h-full
//           flex
//           items-center
//           justify-center
//         "
//       >
//         <div className="flex flex-col items-center leading-none">

//           {lines.map((line, lineIndex) => (
//             <div
//               key={lineIndex}
//               className="flex justify-center"
//             >
//               {line.split("").map((char, i) => {
//                 const index = lineIndex * 10 + i;

//                 const start = index / 35;
//                 const end = start + 0.12;

//                 return (
//                   <AnimatedChar
//                     key={i}
//                     char={char}
//                     scrollYProgress={scrollYProgress}
//                     start={start}
//                     end={end}
//                   />
//                 );
//               })}
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WannaSec;