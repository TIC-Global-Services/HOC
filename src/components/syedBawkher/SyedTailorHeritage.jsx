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

  const addIconRef = (el) => { if (el) iconRefs.current.push(el); };

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
      <div className="sticky top-0 h-screen overflow-hidden">
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
              alt="tailor heritage"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ── BLOCK 2 (100vw) ── */}
          <div
            className="relative h-full flex flex-col text-start justify-center px-10 flex-shrink-0"
            style={{
              width: "100vw",
              backgroundImage: `url(${grid})`,
              backgroundSize: "cover",
              backgroundColor: "#EBE2CE",
            }}
          >
            {/* ICON — button */}
            <div
              ref={addIconRef}
              data-speed="0.4"
              data-rotate="0"
              className="absolute inset-0 top-[8%] md:translate-x-[38%]"
              style={{ willChange: "transform" }}
            >
              <img src={buttonImg} alt="icon" className="w-[120px] object-contain" />
            </div>

            {/* heading */}
            <h2 className="text-[80px] md:translate-x-36 md:text-[160px] xl:text-[200px] salo font-[400] leading-none text-[#262666]">
              TAILOR <br /> HERITAGE
            </h2>

            {/* bottom text */}
            <p className="salo uppercase md:translate-x-36 font-bold tracking-tight text-[20px] md:text-[40px] text-[#262666] mt-10">
              Crafted <br /> In Heritage
            </p>

            {/* right side para */}
            <div className="absolute right-0 max-w-[485px]">
              <p className="jost capitalize text-[#262666] tracking-normal text-[14px] md:text-[26px]">
                Syed Bawkher is a heritage tailoring house built on generations
                of craftsmanship—where tradition, precision, and timeless style
                come together. Designed for the modern gentleman, it offers
                bespoke garments, refined detailing, and an experience that goes
                beyond just dressing.
              </p>
            </div>

            {/* ICON — syed logo */}
            <div
              ref={addIconRef}
              data-speed="0.3"
              data-rotate="-6"
              className="md:translate-x-[40%]"
              style={{ willChange: "transform" }}
            >
              <img src={syedLogo} alt="icon" className="w-[195px] object-contain" />
            </div>

            {/* bottom heading */}
            <div className="absolute -right-[15%] bottom-0">
              <h2 className="text-[80px] md:translate-x-[30%] md:text-[70px] xl:text-[150px] salo font-[400] leading-none text-white">
                TIMEL<span className="text-[#262666]">ESS CRAFT</span>
              </h2>
            </div>
          </div>

          {/* ── BLOCK 3 (30vw) ── */}
          <div
            className="flex-shrink-0 flex items-start justify-end pr-[clamp(12px,2vw,40px)] pt-[clamp(12px,2vw,40px)]"
            style={{
              width: "30vw",
              backgroundSize: "cover",
              backgroundColor: "#ffffff",
            }}
          >
            <div className="relative flex flex-col items-end w-full">

              {/* ICON — main image */}
              <div
              >
                <img
                  src={syedBawkherImg}
                  alt="syed-image"
                  className="object-contain -rotate-[20deg]"
                  style={{ width: "clamp(120px, 25vw, 400px)" }}
                />
              </div>

              {/* ICON — tag */}
              <div
                ref={addIconRef}
                data-speed="0.25"
                data-rotate="00"
                className="absolute"
                style={{ top: "10%", right: "5%", willChange: "transform" }}
              >
                <img
                  src={tagElegantImg}
                  alt="icon"
                  className="md:-translate-x-[170%] object-contain"
                  style={{ width: "clamp(60px, 12vw, 200px)" }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}