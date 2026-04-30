import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import tailorHeritageImg from "../../assets/client/syedBawkher/img/secImg.png";
import grid from "../../assets/client/padlr/img/checkBg.png";
import buttonImg from "../../assets/client/page/button.png";
import syedLogo from "../../assets/client/syedBawkher/img/heroImg1.png";
import syedBawkherImg from "../../assets/client/syedBawkher/img/syedBawkher4.png";
import tagElegantImg from "../../assets/client/syedBawkher/img/signatureImg.png";

gsap.registerPlugin(ScrollTrigger);

export default function SyedTailorHeritage() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const addIconRef = (el) => {
    if (el) iconRefs.current.push(el);
  };


  useEffect(() => {
    if (window.innerWidth < 768) return;

    // ── ICON MOMENTUM via real scroll delta ──
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

    // ── HORIZONTAL SCROLL ──
    const ctx = gsap.context(() => {
      const totalScroll = trackRef.current.scrollWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapperRef);

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={wrapperRef}>
      <div className="h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full">
          {/* ── BLOCK 1 (70vw) ── */}
          <div
            className="relative h-full flex-shrink-0"
            style={{
              width: "70vw",
              backgroundImage: `url(${grid})`,
              backgroundSize: "cover",
              backgroundColor: "#EBE2CE",
            }}
          >
            <img
              src={tailorHeritageImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ── BLOCK 2 (100vw) ── */}
          <div
            className="relative h-full flex flex-col justify-center flex-shrink-0"
            style={{
              width: "100vw",
              padding: "0 5%",
              backgroundImage: `url(${grid})`,
              backgroundSize: "cover",
              backgroundColor: "#EBE2CE",
            }}
          >
            {/* BUTTON ICON */}
            <div
              ref={addIconRef}
              data-speed="0.4"
              data-rotate="0"
              className="absolute"
              style={{
                top: "10%",
                left: "35%",
                width: "clamp(80px,8vw,140px)",
                willChange: "transform",
              }}
            >
              <img src={buttonImg} className="w-full" />
            </div>

            {/* HEADING */}
            <div className="absolute top-[20%] left-[10%] text-start">
            <h2
              className="salo tracking-wider text-[#262666] leading-none"
              style={{
                fontSize: "clamp(60px,12vw,200px)",
                maxWidth: "70%",
              }}
            >
              TAILOR <br /> HERITAGE
            </h2>
            </div>

            {/* SUB TEXT */}
            <div className="absolute top-[80%] left-[10%] text-start">
            <p
              className="salo uppercase text-[#262666] tracking-tight leading-none"
              style={{
                fontSize: "clamp(18px,2.5vw,40px)",
                marginTop: "2%",
              }}
            >
              Crafted <br /> In Heritage
            </p>
            </div>

            {/* RIGHT PARA */}
            <div
              className="absolute"
              style={{
                right: "5%",
                top: "50%",
                transform: "translateY(-50%)",
                maxWidth: "40%",
              }}
            >
              <p
                className="jost text-start text-[26px] leading-[130%] capitalize text-[#262666]"
                
              >
                Syed Bawkher is a heritage tailoring house built on generations of craftsmanship—where tradition, 
                precision, and timeless style come together. Designed for the modern gentleman, 
                it offers bespoke garments, refined detailing, and an experience that goes beyond just dressing.
              </p>
            </div>

            {/* LOGO */}
            <div
              ref={addIconRef}
              data-speed="0.3"
              data-rotate="-6"
              className="absolute bottom-[5%] left-[40%]"
              style={{
                marginTop: "4%",
                width: "clamp(120px,8vw,200px)",
                willChange: "transform",
              }}
            >
              <img src={syedLogo} className="w-full" />
            </div>

            {/* BOTTOM TITLE */}
            <div
              className="absolute"
              style={{
                bottom: "5%",
                right: "-22%",
              }}
            >
              <h2
                className="salo tracking-normal text-white leading-none"
                style={{
                  fontSize: "clamp(50px,8vw,150px)",
                }}
              >
                TIMEL<span style={{ color: "#262666" }}>ESS CRAFT</span>
              </h2>
            </div>
          </div>

          {/* ── BLOCK 3 (30vw) ── */}
          <div
            className="flex-shrink-0 flex items-start justify-center"
            style={{
              width: "30vw",
              padding: "2%",
              backgroundImage: `url(${grid})`,
              backgroundColor: "#ffffff",
            }}
          >
            <div className="relative flex flex-col items-start w-full">
              {/* MAIN IMAGE */}
              <img
                src={syedBawkherImg}
                className="object-contain"
                style={{
                  top: "50%",
                  right: "20%",
                  width: "clamp(120px,20vw,300px)",
                  transform: "rotate(-10deg)",
                }}
              />

              {/* TAG */}
              <div
                ref={addIconRef}
                data-speed="0.25"
                className="absolute"
                style={{
                  top: "5%",
                  right: "90%",
                  width: "clamp(60px,10vw,200px)",
                  willChange: "transform",
                }}
              >
                <img src={tagElegantImg} className="w-full -rotate-[20deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
