import { useEffect, useRef } from "react";
import gsap from "gsap";

import grid from "../../assets/client/padlr/img/checkBg.png";
import img1 from "../../assets/client/padlr/img/heroImg1.png";
import img2 from "../../assets/client/padlr/img/heroImg2.png";
import img3 from "../../assets/client/padlr/img/heroImg3.png";
import img4 from "../../assets/client/padlr/img/heroImg4.png";

const IMGS = {
  circle: img1,
  bat: img2,
  spring: img3,
  can: img4,
};

const ROWS = [
  [{ t: "can", x: 60, s: 164, r: 0, d: 0.05 }],
  [
    { t: "spring", x: 50, s: 222, r: -30, d: 0.22 },
    { t: "bat", x: 60, s: 144, r: 0, d: 0.32 },
    { t: "spring", x: 70, s: 222, r: 30, d: 0.22 },
  ],
  [
    { t: "can", x: 40, s: 164, r: -18, d: 0.46 },
    { t: "circle", x: 50, s: 99, r: 8, d: 0.56 },
    { t: "bat", x: 60, s: 144, r: 0, d: 0.66 },
    { t: "circle", x: 70, s: 99, r: 8, d: 0.56 },
  ],
  [
    { t: "spring", x: 35, s: 222, r: 26, d: 0.8 },
    { t: "can", x: 45, s: 164, r: -20, d: 0.9 },
    { t: "circle", x: 55, s: 99, r: 5, d: 1.0 },
    { t: "spring", x: 65, s: 222, r: 0, d: 1.1 },
    { t: "bat", x: 75, s: 144, r: 26, d: 0.8 },
    { t: "can", x: 85, s: 164, r: -20, d: 0.9 },
  ],
  [
    { t: "can", x: 25, s: 164, r: -26, d: 1.22 },
    { t: "circle", x: 35, s: 99, r: 12, d: 1.32 },
    { t: "spring", x: 45, s: 222, r: 0, d: 1.42 },
    { t: "bat", x: 55, s: 144, r: -24, d: 1.52 },
    { t: "can", x: 65, s: 164, r: 18, d: 1.62 },
    { t: "circle", x: 75, s: 99, r: 5, d: 2.14 },
    { t: "bat", x: 85, s: 144, r: -24, d: 1.52 },
    { t: "circle", x: 90, s: 99, r: 5, d: 2.14 },
  ],
  [
    { t: "bat", x: 5, s: 144, r: 0, d: 1.74 },
    { t: "spring", x: 15, s: 222, r: -10, d: 1.84 },
    { t: "bat", x: 30, s: 144, r: 0, d: 1.94 },
    { t: "can", x: 40, s: 164, r: 0, d: 2.04 },
    { t: "circle", x: 50, s: 99, r: 5, d: 2.14 },
    { t: "spring", x: 60, s: 222, r: 0, d: 2.24 },
    { t: "can", x: 75, s: 164, r: 0, d: 2.34 },
    { t: "spring", x: 85, s: 222, r: 0, d: 2.34 },
  ],
];

const ROW_Y = ["12vh", "30vh", "45vh", "60vh", "70vh", "85vh"];

export default function OwnTheCourt() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  //Indexed refs 
  const setRef = (el, index) => {
    if (el) itemRefs.current[index] = el;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    setTimeout(() => {
      if (itemRefs.current.length === 0) return;

      const mouse = { x: 0, y: 0 };
      const radius = 180;
      let rafId;

      const handleMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      };

      const tl = gsap.timeline();

      let index = 0;

      ROWS.forEach((row) => {
        row.forEach((item) => {
          const el = itemRefs.current[index++];
          if (!el) return;

          tl.fromTo(
            el,
            { y: -window.innerHeight, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.4)",
            },
            item.d
          );
        });
      });

      tl.add(() => {
        const animate = () => {
          const parentRect =
            containerRef.current.getBoundingClientRect();

          itemRefs.current.forEach((el) => {
            if (!el) return;

            const rect = el.getBoundingClientRect();

            const elX =
              rect.left - parentRect.left + rect.width / 2;
            const elY =
              rect.top - parentRect.top + rect.height / 2;

            let dx = elX - mouse.x;
            let dy = elY - mouse.y;

            let distance = Math.sqrt(dx * dx + dy * dy) || 1;

            let moveX = 0;
            let moveY = 0;

            if (distance < radius) {
              const force = (radius - distance) / radius;
              dx /= distance;
              dy /= distance;

              moveX = dx * force * 120;
              moveY = dy * force * 120;
            }

            gsap.to(el, {
              x: moveX,
              y: moveY,
              duration: 0.4,
              ease: "power2.out",
            });
          });

          rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);
      });

      containerRef.current.addEventListener("mousemove", handleMove);

      return () => {
        containerRef.current?.removeEventListener(
          "mousemove",
          handleMove
        );
        cancelAnimationFrame(rafId);
      };
    }, 0);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="absolute left-[5%] top-[clamp(40px,8vh,90px)] z-10 m-0 salo font-medium text-[14px] md:text-[140px] leading-none tracking-[-0.02em] uppercase text-[#7ac9f0]">
        <span style={{ display: "block" }}>OWN THE</span>
        <span style={{ display: "block" }}>COURT</span>
      </h2>

      <div className="w-full max-w-[1600px] mx-auto relative h-full">
        {ROWS.map((row, ri) =>
          row.map((item, i) => {
            const flatIndex =
              ROWS.slice(0, ri).reduce((acc, r) => acc + r.length, 0) + i;

            return (
              <div
                key={`${ri}-${i}`}
                ref={(el) => setRef(el, flatIndex)}
                style={{
                  position: "absolute",
                  left: `${item.x}%`,
                  top: ROW_Y[ri],
                  transform: `translate(-50%, -50%) rotate(${item.r}deg)`,
                  pointerEvents: "none",
                }}
              >
                <img
                  src={IMGS[item.t]}
                  alt=""
                  width={item.s}
                  draggable={false}
                  style={{
                    display: "block",
                    filter:
                      "drop-shadow(0 3px 10px rgba(0,60,160,0.18))",
                  }}
                />
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}