import { useEffect, useRef } from "react";
import gsap from "gsap";
import callOutCenter from "../../../assets/client/gopalan/heroImg4.png";
import callOutTop from "../../../assets/client/gopalan/heroImg1.png";
import GridOverlay from "../../../components/GridOverlay";

const Section9 = () => {
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
        backgroundColor: "#E96428", // base color
      }}
    >
      <GridOverlay
        color="0,0,0"
        opacity={0.15}
        size={100}
        position="99px 0px"
      />
      {/* ─── LEFT PANEL (GRID) ─── */}
      <div className="relative w-[50vw] h-full ">
        {/* TITLE */}
        <div
          className="absolute text-start"
          style={{
            top: "50%",
            left: "20%",
            transform: "translateY(-50%)",
          }}
        >
          <h2
            className="salo text-white leading-none"
            style={{ fontSize: "clamp(48px,12vw,180px)" }}
          >
            STRUCTURED <br /> EVOLUTION
          </h2>

          <p
            className="salo font-[400] text-white uppercase pl-[2%] leading-none tracking-tight "
            style={{ fontSize: "clamp(14px,4vw,40px)" }}
          >
            Shaping <br /> The Future
          </p>
        </div>
      </div>

      {/* ─── RIGHT PANEL  ─── */}
      <div className="relative w-[70vw] h-full">
        {/* TOP RIGHT ICON */}
        <div
          ref={addIconRef}
          data-speed="0.35"
          data-rotate="10"
          className="absolute z-[5]"
          style={{
            top: "8%",
            right: "6%",
            width: "clamp(70px,16vw,250px)",
            willChange: "transform",
          }}
        >
          <img src={callOutTop} alt="" className="w-full rotate-[10deg]" />
        </div>

        {/* TEXT */}
        <div
          className="absolute"
          style={{
            top: "30%",
            right: "10%",
            maxWidth: "clamp(260px,28vw,520px)",
          }}
        >
          <p
            className="jost text-start capitalize font-[400] leading-[150%] text-white/80"
            style={{
              fontSize: "clamp(14px,1.5vw,24px)",
              lineHeight: "160%",
            }}
          >
            Gopalan Group is a legacy-driven enterprise rooted in over four
            decades of architectural excellence, trust, and innovation. Evolving
            from a renowned real estate brand into a diversified multi-vertical
            conglomerate, the Group seamlessly blends heritage with contemporary
            vision. From landmark residential and commercial developments to
            ventures across hospitality, education, aerospace.
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
            left: "15%",
            width: "clamp(60px,20vh,200px)",
            transform: "rotate(-12deg)",
            willChange: "transform",
          }}
        >
          <img src={callOutCenter} className="w-full" />
        </div>

        {/* HEADING
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
        </div> */}
      </div>
    </section>
  );
};

export default Section9;
