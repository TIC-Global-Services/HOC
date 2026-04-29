import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import grid from "../../assets/client/padlr/img/checkBg.png";
import img1 from "../../assets/client/syedBawkher/img/heroImg1.png";
import img2 from "../../assets/client/syedBawkher/img/heroImg2.png";
import img3 from "../../assets/client/syedBawkher/img/heroImg3.png";
import img4 from "../../assets/client/syedBawkher/img/heroImg4.png";

const IMGS = { circle: img1, bat: img2, spring: img3, can: img4 };

const ROWS = [
  [{ t: "can", x: 62, s: 164, r: 0, d: 0.05 }],
  [
    { t: "spring", x: 50, s: 222, r: -30, d: 0.22 },
    { t: "bat", x: 63, s: 144, r: 0, d: 0.32 },
    { t: "spring", x: 70, s: 222, r: 0, d: 0.22 },
  ],
  [
    { t: "can", x: 44, s: 164, r: -18, d: 0.46 },
    { t: "circle", x: 59, s: 99, r: 8, d: 0.56 },
    { t: "bat", x: 73, s: 144, r: 0, d: 0.66 },
    { t: "circle", x: 80, s: 99, r: 8, d: 0.56 },
  ],
  [
    { t: "spring", x: 37, s: 222, r: 26, d: 0.8 },
    { t: "can", x: 51, s: 164, r: -20, d: 0.9 },
    { t: "circle", x: 64, s: 99, r: 5, d: 1.0 },
    { t: "spring", x: 77, s: 222, r: 0, d: 1.1 },
    { t: "bat", x: 83, s: 144, r: 26, d: 0.8 },
    { t: "can", x: 90, s: 164, r: -20, d: 0.9 },
  ],
  [
    { t: "can", x: 30, s: 164, r: -26, d: 1.22 },
    { t: "circle", x: 43, s: 99, r: 12, d: 1.32 },
    { t: "spring", x: 55, s: 222, r: 0, d: 1.42 },
    { t: "bat", x: 66, s: 144, r: -24, d: 1.52 },
    { t: "can", x: 78, s: 164, r: 18, d: 1.62 },
    { t: "circle", x: 84, s: 99, r: 5, d: 2.14 },
    { t: "bat", x: 87, s: 144, r: -24, d: 1.52 },
    { t: "circle", x: 95, s: 99, r: 5, d: 2.14 },
  ],
  [
    { t: "bat", x: 5, s: 144, r: 0, d: 1.74 },
    { t: "spring", x: 15, s: 222, r: -10, d: 1.84 },
    { t: "bat", x: 32, s: 144, r: 0, d: 1.94 },
    { t: "can", x: 46, s: 164, r: 0, d: 2.04 },
    { t: "circle", x: 60, s: 99, r: 5, d: 2.14 },
    { t: "spring", x: 66, s: 222, r: 0, d: 2.24 },
    { t: "can", x: 82, s: 164, r: 0, d: 2.34 },
    { t: "spring", x: 92, s: 222, r: 0, d: 2.34 },
  ],
];
const ROW_Y = ["35vh", "50vh", "60vh", "70vh", "80vh", "90vh"];

export default function SyedOwnTheCourt() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  const setRef = (el, index) => {
    if (el) itemRefs.current[index] = el;
  };

  // detect enter / leave
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // animation + hover
  useEffect(() => {
    if (!isVisible) return;

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

        // reset before animation
        gsap.set(el, {
          y: -window.innerHeight,
          opacity: 0,
        });

        tl.to(
          el,
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

    //hover repel
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
  }, [isVisible]);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="absolute left-[5%] top-[clamp(40px,8vh,90px)] z-10 m-0 salo font-medium text-[14px] md:text-[140px] leading-none tracking-[-0.02em] uppercase text-[#262666]">
        <span style={{ display: "block" }}>OWN THE</span>
        <span style={{ display: "block" }}>COURT</span>
      </h2>

      <div className="w-full max-w-[1600px] mx-auto relative h-full">
        {isVisible &&
          ROWS.map((row, ri) =>
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
                  />
                </div>
              );
            })
          )}
      </div>
    </section>
  );
}