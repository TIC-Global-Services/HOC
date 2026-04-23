import grid from "../../../../assets/client/padlr/img/checkBg.png";
import brandImg from "../../../../assets/client/padlr/img/courtPanelImg2.png";
import circleBadge from "../../../../assets/client/padlr/img/heroImg1.png";

export default function Section4() {
  return (
    <div
      className="w-full h-screen relative overflow-hidden flex"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LEFT IMAGE */}
      <div className="absolute left-[6%] md:left-[8%] xl:left-[0%] top-1/2 -translate-y-1/2">
        <img
          src={brandImg}
          alt="brand"
          className="w-[260px] md:w-[380px] xl:w-[640px] 2xl:w-[640px] h-auto object-contain"
        />
      </div>

      {/* RIGHT BLUE PANEL */}
      <div className="absolute right-0 top-0 h-full w-[28%] md:w-[30%] xl:w-[32%] bg-[#8FC4E9] z-10" />

      {/* BRAND VOICE TEXT */}
      <div className="absolute right-0 top-1/2 -translate-x-[75%] -translate-y-1/2 z-20 flex flex-col leading-none">
        <div className="flex items-baseline">
          <span
            className="salo font-[400] text-[#8FC4E9]"
            style={{ fontSize: "clamp(80px, 14vw, 150px)" }}
          >
            B
          </span>
          <span
            className="salo font-[400] text-white"
            style={{ fontSize: "clamp(80px, 14vw, 150px)" }}
          >
            RAND
          </span>
        </div>

        <div className="flex items-baseline">
          <span
            className="salo font-[400] text-[#8FC4E9]"
            style={{ fontSize: "clamp(80px, 14vw, 150px)" }}
          >
            V
          </span>
          <span
            className="salo font-[400] text-white"
            style={{ fontSize: "clamp(80px, 14vw, 150px)" }}
          >
            OICE
          </span>
        </div>
      </div>

      {/* CIRCLE BADGE */}
      <div className="absolute left-1/2 bottom-[6%] md:bottom-[8%] xl:bottom-[10%] -translate-x-[10%] z-20">
        <img
          src={circleBadge}
          alt="circle badge"
          className="w-[120px] md:w-[160px] xl:w-[200px] 2xl:w-[240px] object-contain animate-spin"
          style={{ animationDuration: "10s" }}
        />
      </div>
    </div>
  );
}
