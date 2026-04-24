import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import grid from "../../assets/client/padlr/img/checkBg.png";
import img1 from "../../assets/client/raks/img/heroImg1.png";
import img2 from "../../assets/client/raks/img/heroImg2.png";
import img3 from "../../assets/client/raks/img/heroImg3.png";
import img4 from "../../assets/client/raks/img/heroImg4.png";

const IMGS = { circle: img1, bat: img2, spring: img3, can: img4 };

const ROWS = [
  [{ t: "can", x: 62, s: 164, r: 0, d: 0.05 }],
  [{ t: "spring", x: 50, s: 222, r: -30, d: 0.22 }, { t: "bat", x: 63, s: 144, r: 0, d: 0.32 }, { t: "spring", x: 70, s: 222, r: 0, d: 0.22 }],
  [{ t: "can", x: 44, s: 164, r: -18, d: 0.46 }, { t: "circle", x: 59, s: 99, r: 8, d: 0.56 }, { t: "bat", x: 73, s: 144, r: 0, d: 0.66 }, { t: "circle", x: 80, s: 99, r: 8, d: 0.56 }],
  [{ t: "spring", x: 37, s: 222, r: 26, d: 0.8 }, { t: "can", x: 51, s: 164, r: -20, d: 0.9 }, { t: "circle", x: 64, s: 99, r: 5, d: 1.0 }, { t: "spring", x: 77, s: 222, r: 0, d: 1.1 }, { t: "bat", x: 83, s: 144, r: 26, d: 0.8 }, { t: "can", x: 90, s: 164, r: -20, d: 0.9 }],
  [{ t: "can", x: 30, s: 164, r: -26, d: 1.22 }, { t: "circle", x: 43, s: 99, r: 12, d: 1.32 }, { t: "spring", x: 55, s: 222, r: 0, d: 1.42 }, { t: "bat", x: 66, s: 144, r: -24, d: 1.52 }, { t: "can", x: 78, s: 164, r: 18, d: 1.62 }, { t: "circle", x: 84, s: 99, r: 5, d: 2.14 }, { t: "bat", x: 87, s: 144, r: -24, d: 1.52 }, { t: "circle", x: 95, s: 99, r: 5, d: 2.14 }],
  [{ t: "bat", x: 5, s: 144, r: 0, d: 1.74 }, { t: "spring", x: 15, s: 222, r: -10, d: 1.84 }, { t: "bat", x: 32, s: 144, r: 0, d: 1.94 }, { t: "can", x: 46, s: 164, r: 0, d: 2.04 }, { t: "circle", x: 60, s: 99, r: 5, d: 2.14 }, { t: "spring", x: 66, s: 222, r: 0, d: 2.24 }, { t: "can", x: 82, s: 164, r: 0, d: 2.34 }, { t: "spring", x: 92, s: 222, r: 0, d: 2.34 }],
];

const ROW_Y = ["10vh", "30vh", "50vh", "60vh", "70vh", "80vh"];

export default function RaksOwnTheCourt() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];

  const addRef = (el) => { if (el) itemRefs.current.push(el); };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.05 }
      );

      itemRefs.current.forEach((el) => {
        const rot = parseFloat(el.dataset.rot);
        const delay = parseFloat(el.dataset.delay);

        gsap.fromTo(
          el,
          { y: -700, rotation: rot * 2.5, opacity: 0 },
          { y: 0, rotation: rot, opacity: 1, duration: 0.85, delay, ease: "bounce.out" }
        );

        el.addEventListener("mouseenter", () => {
          const section = containerRef.current.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();
          const dirX = (elRect.left + elRect.width / 2 - section.left) < section.width / 2 ? -1 : 1;
          const dirY = (elRect.top + elRect.height / 2 - section.top) < section.height / 2 ? -1 : 1;
          gsap.to(el, {
            x: dirX * (80 + Math.random() * 120),
            y: dirY * (60 + Math.random() * 100),
            rotation: rot + (Math.random() - 0.5) * 80,
            scale: 1.15,
            duration: 0.4,
            ease: "power3.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, { x: 0, y: 0, rotation: rot, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen relative flex overflow-hidden"
      style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
    >
      <h2
        ref={titleRef}
        className="absolute left-[5%] top-[clamp(40px,8vh,90px)] z-10 opacity-0 m-0 salo font-medium text-[14px] md:text-[150px] leading-none tracking-[-0.02em] uppercase text-[#000085]"
      >
        <span style={{ display: "block" }}>OWN THE</span>
        <span style={{ display: "block" }}>COURT</span>
      </h2>

      <div className="w-full max-w-[1600px] mx-auto relative h-full">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {ROWS.map((row, ri) =>
            row.map((item) => (
              <div
                key={`${ri}-${item.x}`}
                ref={addRef}
                data-rot={item.r}
                data-delay={item.d}
                style={{
                  position: "absolute",
                  left: `${item.x}%`,
                  top: ROW_Y[ri],
                  transform: `translate(-50%, ${item.y || 0}px) rotate(${item.r}deg)`,
                  transformOrigin: "center center",
                  willChange: "transform,opacity",
                  pointerEvents: "auto",
                  cursor: "grab",
                }}
              >
                <img
                  src={IMGS[item.t]}
                  alt="images"
                  style={{
                    width: `clamp(${item.s * 0.6}px, ${item.s}px, ${item.s * 1.3}px)`,
                    display: "block",
                    filter: "drop-shadow(0 3px 10px rgba(0,60,160,0.18))",
                    userSelect: "none",
                  }}
                  draggable={false}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}