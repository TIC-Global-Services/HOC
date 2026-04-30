import { useRef, useEffect } from "react";
import gsap from "gsap";
import designImg from "../../../../assets/client/qatamaran/block4Top.png";
import iconCoromandelImg from "../../../../assets/client/qatamaran/coromandelCoast.png";
import glassIcon from "../../../../assets/client/qatamaran/heroFloat1.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section4 = () => {
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
      className="relative h-screen overflow-hidden flex"
      style={{
        width: "100vw",
        backgroundColor: "#1E382D",
      }}
    >
      {/* ─── LEFT SIDE ─── */}
      <div
        className="relative h-full"
        style={{
          width: "60vw",
          backgroundImage: `url(${grid})`,
          backgroundColor: "white",
        }}
      >
        {/* IMAGE */}
        <div
          className="absolute"
          style={{
            top: "5vh",
            left: "0vw",
            width: "clamp(180px,56vh,800px)",
          }}
        >
          <img src={designImg} className="w-full object-contain" />
        </div>

        {/* TIMELESS */}
        <div
          className="absolute"
          style={{
            top: "10vh",
            right: "0vw",
          }}
        >
          <h2
            className="salo text-[#1E382D] leading-none text-right"
            style={{ fontSize: "clamp(40px,12vw,150px)" }}
          >
            TIMELESS
          </h2>
        </div>

        {/* CENTER ICON */}
        <div
          className="absolute"
          style={{
            top: "45%",
            left: "40vw",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            ref={addIconRef}
            data-speed="0.3"
            style={{
              width: "clamp(60px,8vw,120px)",
              willChange: "transform",
            }}
          >
            <img src={iconCoromandelImg} className="w-full object-contain -rotate-12" />
          </div>
        </div>

        {/* TEXT */}
        <div
          className="absolute"
          style={{
            bottom: "0vh",
            padding:"6%",
            
          }}
        >
          <p
            className="jost text-start text-black capitalize leading-[150%] tracking-tight font-[500]"
            style={{
              fontSize: "clamp(14px,4vh,26px)",
              lineHeight: "150%",
            }}
          >
            Qatamaran is a contemporary prêt-à-porter menswear label inspired by Chennai’s deep-rooted tailoring legacy. 
            Blending skilled craftsmanship with refined precision, the brand embodies a sense of enduring elegance. Created for 
            <span style={{
              fontSize: "clamp(18px,8vh,30px)"}} className=" salo text-[#1E382D]"> the modern gentleman,</span>{" "} 
            it seamlessly fuses tradition with a subtle touch of coastal influence, offering styles that are both sophisticated and effortlessly distinctive.
          </p>
        </div>
      </div>

      {/* ─── RIGHT SIDE ─── */}
      <div
        className="relative h-full"
        style={{
          width: "40vw",
        }}
      >
        {/* TAILORING */}
        <h2
          className="salo absolute text-white leading-none"
          style={{
            top: "10vh",
            left: "1.5vw",
            fontSize: "clamp(40px,12vw,150px)",
          }}
        >
          TAILORING
        </h2>

        {/* ICON */}
        <div
          ref={addIconRef}
          data-speed="0.5"
          data-rotate="12"
          className="absolute"
          style={{
            bottom: "10vh",
            right: "12vw",
            width: "clamp(80px,12vw,250px)",
            transform: "rotate(12deg)",
            willChange: "transform",
          }}
        >
          <img src={glassIcon} className="w-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
