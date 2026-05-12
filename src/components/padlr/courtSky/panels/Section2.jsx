import { useEffect, useRef } from "react";
import gsap from "gsap";

import batlogo from "../../../../assets/client/padlr/img/batIcon.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import rightImg from "../../../../assets/client/padlr/img/courtPanelImg.png";
import courtImg2 from "../../../../assets/client/padlr/img/courtImg2.png";
import courtImg3 from "../../../../assets/client/padlr/img/courtImg3.png";
import GridOverlay from "../../../../components/GridOverlay";

export default function Panel2() {
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
      setR: gsap.quickTo(el, "rotation", {
        duration: 1,
        ease: "power3.out",
      }),
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
    <section
      className="h-screen w-full flex relative overflow-hidden"
      style={{
        backgroundColor: "#8FC4E9",
      }}
>
        {/* Grid */}
      <GridOverlay
            color="0,0,0"
            opacity={0.15}
            size={100}
            position="99px 0px"
          />


      <div className="w-full h-full flex">
        {/* LEFT PANEL */}
        <div className="w-1/2 h-full relative">
          {/* TOP */}
          <div className="relative h-[45vh] flex items-start">
            {/* IMAGE */}
            <div
              ref={addIconRef}
              data-speed="0.3"
              data-rotate="0"
              className="relative z-10"
              style={{
                width: "clamp(180px,40vh,400px)",
                willChange: "transform",
              }}
            >
              <img src={courtImg2} alt="" className="w-full" />
            </div>

            {/* TITLE */}
            <div
              className="relative z-20"
              style={{
                marginLeft: "-8%",
                marginTop: "8%",
              }}
            >
              <h2
                className="salo text-start text-white leading-none"
                style={{
                  fontSize: "clamp(80px,25vh,200px)",
                }}
              >
                COURT <br /> SKY
              </h2>
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <div className="absolute left-[5%] bottom-[5%] max-w-[50%]">
            <p
              className="salo text-start text-white tracking-tight leading-none"
              style={{
                fontSize: "clamp(22px,6vh,50px)",
              }}
            >
              BOLD, <br />
              RICH, AND <br />
              UNAPOLOGETIC.
            </p>

            <p
              className="jost text-start text-white/80 leading-none tracking-tight mt-[6%]"
              style={{
                fontSize: "clamp(12px,5vh,24px)",
              }}
            >
              Hex Precision
            </p>

            <p
              className="jost text-start leading-none tracking-tight text-white/80"
              style={{
                fontSize: "clamp(12px,5vh,24px)",
              }}
            >
              RGB Consistency
            </p>
          </div>

          {/* BOTTOM IMAGE */}
          <div
            ref={addIconRef}
            data-speed="0.6"
            data-rotate="0"
            className="absolute right-[0%] bottom-[4%]"
            style={{
              willChange: "transform",
            }}
          >
            <img
              src={courtImg3}
              alt=""
              style={{
                width: "clamp(120px,40vh,400px)",
                transform: "rotate(-5deg)",
              }}
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 relative flex items-center justify-center px-[5%]">
          {/* TEXT */}
          <p
            className="jost text-start capitalize tracking-tight text-white/90 max-w-[80%]"
            style={{
              fontSize: "clamp(16px,4vh,24px)",
              lineHeight: "160%",
            }}
          >
            Padlr is a modern destination built around the fast-growing culture
            of padel—where sport, community, and lifestyle come together.
            Designed for both{" "}
            <span
              className="salo font-[400]"
              style={{
                fontSize: "clamp(20px,6vh,36px)",
              }}
            >
              Performance and Experience
            </span>
            , it offers premium courts, vibrant social energy, and a space that
            goes beyond just playing the game.
          </p>

          {/* LOGO */}
          <div
            ref={addIconRef}
            data-speed="0.5"
            data-rotate="-5"
            className="absolute right-[5%] bottom-[8%]"
            style={{
              willChange: "transform",
            }}
          >
            <img
              src={batlogo}
              alt="logo"
              style={{
                width: "clamp(120px,25vh,200px)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
