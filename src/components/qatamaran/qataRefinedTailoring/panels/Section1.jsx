import { useEffect, useRef } from "react";
import gsap from "gsap";
import treeImg from "../../../../assets/client/qatamaran/heroFloat2.png";
import callOut from "../../../../assets/client/qatamaran/heroFloat1.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section1 = () => {
  const iconRefs = useRef([]);

  const addIconRef = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  useEffect(() => {
    const qs = iconRefs.current.map((el) => ({
      el,
      setX: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" }),
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
  className="relative w-full h-screen flex overflow-visible"
  style={{
    backgroundColor: "#1E382D", // base color
  }}
>

  {/* ─── LEFT PANEL (GRID) ─── */}
  <div
    className="relative w-[50vw] h-full"
    style={{
      backgroundImage: `url(${grid})`,
    }}
  >
    {/* FLOAT TREE */}
    <img
      ref={addIconRef}
      data-speed="0.4"
      src={treeImg}
      alt=""
      className="absolute bottom-0 left-0 z-10"
      style={{
        width: "clamp(120px,14vw,280px)",
        willChange: "transform",
      }}
    />

    {/* TITLE */}
    <div
      className="absolute text-start"
      style={{
        top: "50%",
        left: "60%",
        transform: "translateY(-50%)",
      }}
    >
      <h2
        className="salo text-white leading-none"
        style={{ fontSize: "clamp(48px,12vw,180px)" }}
      >
        REFINED <br /> TAILORING
      </h2>

      <p
        className="salo font-[400] text-white uppercase pl-[2%] leading-none tracking-tight "
        style={{ fontSize: "clamp(14px,4vw,40px)" }}
      >
        Crafted <br /> In Heritage
      </p>
    </div>
  </div>

  {/* ─── RIGHT PANEL  ─── */}
  <div className="relative w-[70vw] h-full">
    
    {/* TEXT */}
    <div
      className="absolute"
      style={{
        top: "30%",
        right: "5%",
        maxWidth: "clamp(260px,28vw,440px)",
      }}
    >
      <p
        className="jost text-start capitalize font-[400] leading-[150%] text-white/80"
        style={{
          fontSize: "clamp(14px,1.5vw,26px)",
          lineHeight: "160%",
        }}
      >
        Qatamaran is a modern prêt-à-porter menswear label rooted in the rich heritage of 
        Chennai’s tailoring tradition—where craftsmanship, precision, and timeless elegance converge. 
        Designed for the contemporary gentleman, it brings together coastal inspiration.
      </p>
    </div>

    {/* FLOAT ICON */}
    <div
      ref={addIconRef}
      data-speed="0.6"
      data-rotate="-12"
      className="absolute"
      style={{
        bottom: "5%",
        left: "20%",
        width: "clamp(60px,8vw,150px)",
        transform: "rotate(-12deg)",
        willChange: "transform",
      }}
    >
      <img src={callOut} className="w-full" />
    </div>

    {/* HEADING */}
    <div
      className="absolute z-[10]"
      style={{
        bottom: "0%",
        right: "-36%",
      }}
    >
      <h2
        className="salo text-white text-end tracking-wide leading-none"
        style={{ fontSize: "clamp(48px,8vw,150px)" }}
      >
        COAST<span style={{ color: "#1E382D" }}>AL CRAFT</span>
      </h2>
    </div>

  </div>
</section>
  );
};

export default Section1;
