import { useEffect, useRef } from "react";
import gsap from "gsap";

import batlogo from "../../../../assets/client/padlr/img/batIcon.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import rightImg from "../../../../assets/client/padlr/img/courtPanelImg.png";

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
      className="w-full min-h-screen flex justify-center relative overflow-visible bg-[#8FC4E9]"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      {/* CENTER CONTAINER */}
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex">

        {/* LEFT SIDE */}
        <div className="w-1/2 h-screen flex flex-col justify-center px-6 md:px-10 xl:px-14">

          <p
            className="jost text-start font-[400] capitalize text-white/90 leading-[120%] tracking-tight max-w-[550px]
            text-[16px] md:text-[22px] xl:text-[28px] 2xl:text-[34px]"
          >
            Padlr is a modern destination built around the fast-growing culture of
            padel—where sport, community, and lifestyle come together.
            Designed for both Performance and Experience, it offers premium courts,
            vibrant social energy, and a space that goes beyond just playing the game
          </p>

          {/* LOGO */}
          <div
            ref={addIconRef}
            data-speed="0.5"
            data-rotate="-5"
            data-rotate-change="20"
            style={{ willChange: "transform" }}
          >
            <img
              src={batlogo}
              alt="logo"
              className="mt-6 xl:mt-8 xl:translate-x-[150%] w-[140px] md:w-[160px] xl:w-[180px] 2xl:w-[200px] object-contain"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 relative h-screen overflow-visible">

          {/* IMAGE */}
          <div
            className="absolute top-0 right-[-5%] h-full"
          >
            <img
              src={rightImg}
              alt="energy"
              className="h-full w-auto max-w-none object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}