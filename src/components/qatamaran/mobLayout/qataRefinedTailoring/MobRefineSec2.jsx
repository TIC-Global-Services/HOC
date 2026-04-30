import { useEffect, useRef } from "react";
import gsap from "gsap";

import treeImg from "../../../../assets/client/qatamaran/heroFloat2.png";
import callOut from "../../../../assets/client/qatamaran/heroFloat1.png";

const MobRefineSec2 = () => {
  const iconRefs = useRef([]);

  const addIconRef = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  // light scroll animation
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
      className="w-full relative h-[80vh] flex flex-col py-[15%]"
      style={{
        backgroundColor: "#1E382D",
      }}
    >
      {/* ─── TOP LEFT ─── */}
      <div ref={addIconRef} data-speed="1" className="w-[90px] self-start">
        <img src={treeImg} alt="" className="w-full object-contain" />
      </div>

      {/* ─── CENTER ─── */}
      <div className="flex flex-col justify-center mt-6 px-10 gap-3">
        <h2 className="salo text-start text-white text-[50px] tracking-wider leading-none">
          REFINED <br /> TAILORING
        </h2>

        <p className="salo font-[400] text-start text-white uppercase text-[20px] leading-none">
          Crafted <br /> In Heritage
        </p>
      </div>

      {/* ─── RIGHT ICON ─── */}
      <div
        ref={addIconRef}
        data-speed="1"
        data-rotate="-12"
        className="absolute top-[40%] right-[5%] w-[90px]"
      >
        <img src={callOut} alt="" className="w-full object-contain" />
      </div>

      {/* ─── PARAGRAPH ─── */}
      <div className="flex justify-center mt-16">
        <p className="jost font-[400] text-start text-white/80 max-w-[320px] text-[16px] leading-[23px] capitalize">
          Qatamaran is a modern prêt-à-porter menswear label rooted in the rich
          heritage of Chennai’s tailoring tradition—where craftsmanship,
          precision, and timeless elegance converge. Designed for the
          contemporary gentleman, it brings together coastal inspiration.
        </p>
      </div>

      {/* ─── BOTTOM ─── */}
      <div className="flex justify-center mt-10">
        <h2 className="salo text-white text-center text-[50px] leading-none">
          COASTAL CRAFT
        </h2>
      </div>
    </section>
  );
};

export default MobRefineSec2;
