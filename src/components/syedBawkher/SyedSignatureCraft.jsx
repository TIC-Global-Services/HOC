import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Your assets (adjust paths as needed)
import craftImg from "../../assets/client/syedBawkher/img/signatureRightImg.png";
import elegantLogoImg from "../../assets/client/syedBawkher/img/signatureImg.png";
import circleLogoImg from "../../assets/client/syedBawkher/img/heroImg1.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

gsap.registerPlugin(ScrollTrigger);

const BEIGE = "#EBE2CE";

export default function SyedSignatureCraft() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    let totalWidth = sections.length * 100;
    gsap.set(container, { width: `${totalWidth}vw` });

    const tl = gsap.to(container, {
      x: () => `-${(totalWidth - 100)}vw`,
      ease: "none",
      scrollTrigger: {
        trigger: container.parentElement,
        start: "top top",
        end: () => `+=${container.scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="overflow-visible h-screen w-screen">
      <div ref={containerRef} className="flex h-full">
        
        {/* SECTION 1 - Signature Craft + About */}
        <div
          ref={el => sectionsRef.current[0] = el}
          className="w-[100vw] h-full flex-shrink-0 flex flex-col"
          style={{ backgroundColor: BEIGE }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 xl:px-10 flex-shrink-0" style={{ borderBottom: "2px solid white" }}>
            <h1 className="salo font-[400] md:text-[150px] text-[#262666] uppercase leading-none">
              SIGNATURE CRAFT
            </h1>
            <img
              src={circleLogoImg}
              alt="logo"
              className="object-contain pt-2"
              style={{ width: "clamp(110px, 10vw, 174px)" }}
            />
          </div>

          {/* Content Area - takes remaining height */}
          <div className="flex flex-1 min-h-0">
            {/* Left column: Measured / Crafted / Perfected */}
            <div className="flex flex-col" style={{ width: "38%", borderRight: "2px solid white" }}>
              <div className="flex items-center px-6 xl:px-10 flex-1" style={{ borderBottom: "2px solid white" }}>
                <span className="salo md:text-[120px] text-[#262666] font-[400] uppercase leading-none">Measured.</span>
              </div>
              <div className="flex items-center px-6 xl:px-8 flex-1" style={{ borderBottom: "2px solid white" }}>
                <span className="salo md:text-[120px] text-[#262666] font-[400] uppercase leading-none">Crafted.</span>
              </div>
              <div className="flex items-center px-6 xl:px-8 flex-1" style={{ borderBottom: "2px solid white" }}>
                <span className="salo md:text-[120px] text-[#262666] font-[400] uppercase leading-none">Perfected.</span>
              </div>
              <div className="flex items-end justify-center py-6 xl:py-8">
                <img src={elegantLogoImg} alt="badge" className="md:w-[200px] object-contain" />
              </div>
            </div>

            {/* Middle column: ABOUT text */}
            <div className="flex flex-col justify-center" style={{ width: "30%" }}>
              <p className="salo md:text-[60px] font-[400] text-[#262666] text-start uppercase tracking-tight mb-5">ABOUT</p>
              <p className="jost font-regular md:text-[26px] text-start font-[400] text-[#262666] leading-[140%] tracking-tight border-t-2 border-b-2 border-white py-4">
                Syed Bawlher is Built On A Legacy Of Precision Tailoring And Enduring Craftsmanship.
                From The First Measurement To The Final Stitch, Every Garment Is Shaped With Intention – Transforming Your Experience.
              </p>
            </div>

            {/* Right column: image */}
            <div className="relative overflow-hidden flex-1" style={{ borderLeft: "2px solid white" }}>
              <img src={craftImg} alt="craft" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* SECTION 2 - Precision Tailored + Detail & Discipline */}
        <div
          ref={el => sectionsRef.current[1] = el}
          className="w-[100vw] h-full flex-shrink-0 flex flex-col"
          style={{ backgroundColor: BEIGE }}
        >
          <div className="flex-1 flex flex-col justify-center px-10 xl:px-20" style={{
                    backgroundImage: `url(${grid})`,
                    backgroundSize: "cover",
                    backgroundColor: "white"
                  }}>
            
            
            <div className="mt-10">
              <img src={elegantLogoImg} alt="badge" className="w-32 md:w-48 object-contain" />
            </div>
          </div>
        </div>

        {/* SECTION 3 - Closing / Signature */}
        <div
          ref={el => sectionsRef.current[2] = el}
          className="w-[100vw] h-full flex-shrink-0 flex flex-col items-center justify-center"
          style={{ backgroundColor: BEIGE }}
        >
          
        </div>

      </div>
    </div>
  );
}