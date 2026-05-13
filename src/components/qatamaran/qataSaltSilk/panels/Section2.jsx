import { useEffect, useRef } from "react";
import gsap from "gsap";

import topLeftImg from "../../../../assets/client/qatamaran/coromandelCoast.png";
import bottomLeftImg from "../../../../assets/client/qatamaran/heroFloat1.png";
import topRightImg from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import qataLeftImg from "../../../../assets/client/qatamaran/qataLeftImg.png";
import qataRightImg from "../../../../assets/client/qatamaran/qataRightImg.png";
import treeIcon from "../../../../assets/client/qatamaran/heroFloat2.png";
import GridOverlay from "../../../../components/GridOverlay";

export default function Section2() {
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const addIconRef = (el) => {
    if (el) iconRefs.current.push(el);
  };

  useEffect(() => {
    const qs = iconRefs.current.map((el) => ({
      el,
      setX: gsap.quickTo(el, "x", { duration: 1, ease: "power3.out" }),
      setY: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
      setR: gsap.quickTo(el, "rotation", { duration: 1, ease: "power3.out" }),
    }));

    let lastScrollY = window.scrollY;
    let velocity = 0;
    let rafId;

    const tick = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      velocity += (delta - velocity) * 0.15;

      qs.forEach(({ el, setX, setY, setR }) => {
        const speed = parseFloat(el.dataset.speed || 0.5);
        const baseRotate = parseFloat(el.dataset.rotate || 0);

        setX(velocity * speed * 4);
        setY(velocity * speed * 0.8);
        setR(baseRotate + velocity * speed * 0.6);
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="h-screen flex">
      {/* ───────── BLOCK 1 ───────── */}
      <div className="w-[80vw] h-full relative overflow-hidden flex-shrink-0">
        {/* GRID LAYER */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GridOverlay
            color="0,0,0"
            opacity={0.15}
            size={100}
            position="99px 0px"
          />
        </div>
        {/* CONTENT LAYER */}
        <div className="relative z-10 h-full">
          <div className="absolute top-0 left-0 w-full py-[clamp(6px,1vw,14px)] bg-[#1E382D]" />

          {/* CENTER */}
          <div className="absolute top-[20%] left-[20%] flex items-center justify-center px-[clamp(20px,4vw,80px)] md:translate-x-[0%]">
            <div className="max-w-[900px] text-start space-y-[clamp(12px,0.5vw,14px)]">
              <h2 className="salo text-[#1E382D] uppercase tracking-tight leading-none text-[clamp(48px,20vh,200px)]">
                Tide bound <br /> Tailoring
              </h2>

              <p className="jost text-black leading-[140%]  tracking-tight text-[clamp(14px,1.8vw,24px)] max-w-[600px]">
                Classic techniques meet contemporary expression. <br /> Designed
                for the man who moves with quiet confidence.
              </p>
            </div>
          </div>

          {/* CORNER ICONS (momentum) */}

          {/* TOP LEFT */}
          <div
            ref={addIconRef}
            data-speed="0.3"
            data-rotate="-10"
            style={{
              position: "absolute",
              top: "clamp(20px,4vw,60px)",
              left: "clamp(20px,4vw,60px)",
              width: "clamp(80px,12vw,220px)",
              willChange: "transform",
            }}
          >
            <img src={topLeftImg} className="-rotate-[10deg] w-full" />
          </div>

          {/* TOP RIGHT */}
          <div
            ref={addIconRef}
            data-speed="0.5"
            data-rotate="0"
            style={{
              position: "absolute",
              top: "clamp(20px,4vw,60px)",
              right: "clamp(20px,4vw,60px)",
              width: "clamp(100px,14vw,260px)",
              willChange: "transform",
            }}
          >
            <img src={topRightImg} className="w-full" />
          </div>

          {/* BOTTOM LEFT */}
          <div
            ref={addIconRef}
            data-speed="0.6"
            data-rotate="-20"
            style={{
              position: "absolute",
              bottom: "clamp(20px,4vw,60px)",
              left: "clamp(20px,4vw,60px)",
              width: "clamp(80px,12vw,220px)",
              willChange: "transform",
            }}
          >
            <img src={bottomLeftImg} className="-rotate-[20deg] w-full" />
          </div>

          {/* TEXT */}
          <div
            className="absolute text-black"
            style={{
              bottom: "5%",
              right: "5%",
            }}
          >
            <p className="jost leading-[120%] tracking-tight text-start font-medium text-[clamp(18px,6.5vh,60px)]">
              MODERN GENTLEMEN <br />&  TIMELESS STYLE
            </p>
          </div>
        </div>
      </div>

      {/* ───────── BLOCK 2 ───────── */}
      <div className="w-[125vw] h-full relative overflow-hidden flex-shrink-0">
        {/* GRID */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GridOverlay
            color="0,0,0"
            opacity={0.15}
            size={100}
            position="99px 0px"
          />
        </div>

        <div className="relative z-10 h-full flex">
          {/* LEFT */}
          <div className="h-full flex items-center justify-center">
            <img
              src={qataLeftImg}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* CENTER */}
          <div className="flex-1 flex flex-col items-center justify-center gap-[clamp(20px,4vw,80px)] px-[clamp(20px,4vw,80px)] text-start">
            <p className="jost text-black leading-[140%] pl-[6%] w-[18ch] tracking-tight font-[500] capitalize text-[clamp(18px,20vh,40px)] [hanging-punctuation:first]" style={{ textIndent: "-0.5ch" }}>
              "Honoring Heritage <span className="pl-1">refining craft defining</span> modern elegance"
            </p>

            {/* tree icon momentum */}
            <div
              ref={addIconRef}
              data-speed="0.5"
              data-rotate="0"
              style={{
                width: "clamp(80px,14vw,400px)",
                willChange: "transform",
              }}
            >
              <img src={treeIcon} className="object-contain w-full" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-full w-[40vw] aspect-9/16 relative overflow-hidden">
            <img
              src={qataRightImg}
              className="absolute inset-0 w-full h-full aspect-9/16 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
