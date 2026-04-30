import { useEffect, useRef } from "react";
import gsap from "gsap";

import topIcon from "../../../../assets/client/qatamaran/heroFloat1.png";
import bottomIcon from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobQataSec4 = () => {
  const iconRefs = useRef([]);

  const addIconRef = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  useEffect(() => {
    const qs = iconRefs.current.map((el) => ({
      el,
      setY: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
      setR: gsap.quickTo(el, "rotation", { duration: 1, ease: "power3.out" }),
    }));

    let lastScrollY = window.scrollY;
    let velocity = 0;
    let raf;

    const tick = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      velocity += (delta - velocity) * 0.15;

      qs.forEach(({ el, setY, setR }) => {
        const speed = parseFloat(el.dataset.speed || 0.5);
        const baseRotate = parseFloat(el.dataset.rotate || 0);

        setY(velocity * speed * 0.5);
        setR(baseRotate + velocity * speed * 0.3);
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="w-full flex flex-col justify-center px-10 py-10 gap-10"
      style={{ backgroundImage: `url(${grid})` }}
    >
      {/* TOP ICON */}
      <div
        ref={addIconRef}
        data-speed="0.4"
        data-rotate="-20"
        className="w-[100px]"
      >
        <img src={topIcon} alt="" className="w-full object-contain" />
      </div>

      {/* TEXT */}
      <div className="text-black text-start max-w-[320px]">
        <h2 className="salo uppercase text-[20px] leading-[110%] mb-3">
          Where Heritage Meets Modern Elegance
        </h2>

        <p className="jost text-[16px] leading-[130%] font-[400]">
          "At Qatamaran, every piece is thoughtfully crafted to embody
          timeless tailoring, coastal inspiration, and effortless
          sophistication—designed for the modern gentleman to wear with
          confidence and ease."
        </p>
      </div>

      {/* BOTTOM ICON */}
      <div
        ref={addIconRef}
        data-speed="0.6"
        data-rotate="-10"
        className="w-[100px]"
      >
        <img src={bottomIcon} alt="" className="w-full object-contain" />
      </div>
    </section>
  );
};

export default MobQataSec4;