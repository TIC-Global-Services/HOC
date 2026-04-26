import { useEffect, useRef } from "react";
import gsap from "gsap";

import batlogo from "../../../../assets/client/padlr/img/batIcon.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import rightImg from "../../../../assets/client/padlr/img/courtPanelImg.png";
import courtImg2 from "../../../../assets/client/padlr/img/courtImg2.png";
import courtImg3 from "../../../../assets/client/padlr/img/courtImg3.png";

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
    <section
      className="h-screen w-full flex relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundColor: "#8FC4E9",
      }}
    >
      <div className="w-full h-full flex">
        {/* LEFT PANEL */}
        <div className="w-1/2 h-full flex flex-col justify-between relative">
          {/* TOP */}
          <div className="relative flex justify-end">
            {/* SWATCH */}
            <div
              ref={addIconRef}
              data-speed="0.3"
              data-rotate="0"
              className="absolute"
              style={{
                top: 0,
                left: 0,
                width: "clamp(140px,20vw,360px)",
                willChange: "transform",
              }}
            >
              <img src={courtImg2} alt="" className="w-full" />
            </div>

            {/* TITLE */}
            <h2
              className="absolute translate-y-[20%] left-[30%] salo text-start text-white leading-none"
              style={{ fontSize: "clamp(80px,12vw,200px)" }}
            >
              COURT <br /> SKY
            </h2>
          </div>

          {/* BOTTOM */}
          <div className="flex -translate-y-[4%] justify-between">
            {/* TEXT */}
            <div className="max-w-[50%] px-[5%]">
              <p
                className="salo text-start text-white tracking-tight leading-none"
                style={{ fontSize: "clamp(22px,3.5vw,50px)" }}
              >
                BOLD, <br />
                RICH, AND <br />
                UNAPOLOGETIC.
              </p>

              <p className="jost text-start text-white/80 mt-[6%] text-[clamp(12px,1.2vw,24px)]">
                Hex Precision
              </p>
              <p className="jost text-start text-white/80 text-[clamp(12px,1.2vw,24px)]">
                RGB Consistency
              </p>
            </div>

            {/* IMAGE */}
            <div
              ref={addIconRef}
              data-speed="0.6"
              data-rotate="0"
              className=""
              style={{ willChange: "transform", }}
            >
              <img
                src={courtImg3}
                alt=""
                style={{
                  width: "clamp(120px,14vw,300px)",
                  transform: "rotate(-5deg)",
                }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 relative flex items-center justify-center px-[5%]">
          {/* TEXT */}
          <p
            className="jost text-start capitalize tracking-tight text-white/90 max-w-[80%]"
            style={{
              fontSize: "clamp(16px,2vw,26px)",
              lineHeight: "160%",
            }}
          >
            Padlr is a modern destination built around the fast-growing culture
            of padel—where sport, community, and lifestyle come together.
            Designed for both <span className="salo font-[400] text-[40px]">Performance and Experience</span>, it offers premium
            courts, vibrant social energy, and a space that goes beyond just
            playing the game
          </p>

          {/* LOGO */}
          <div
            ref={addIconRef}
            data-speed="0.5"
            data-rotate="-5"
            className="absolute right-[5%] bottom-[10%]"
            style={{ willChange: "transform" }}
          >
            <img
              src={batlogo}
              alt="logo"
              style={{ width: "clamp(120px,10vw,200px)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
