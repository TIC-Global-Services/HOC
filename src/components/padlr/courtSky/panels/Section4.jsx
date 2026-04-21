import grid from "../../../../assets/client/padlr/img/checkBg.png";
import brandImg from "../../../../assets/client/padlr/img/courtPanelImg2.png";
import circleBadge from "../../../../assets/client/padlr/img/heroImg1.png";

export default function Section4() {
  return (
    <div
      className="w-full h-screen flex relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >

      {/* LEFT — full width image behind everything */}
      <div className="absolute inset-0 left-[10%] m-10">
        <img
          src={brandImg}
          alt="brand"
          className="max-w-[640px] h-full object-cover"
        />
      </div>

      {/* RIGHT — blue panel pinned to end edge only */}
      <div className="absolute right-0 top-0 h-full w-[30%] bg-[#8FC4E9] z-10" />

      {/* BRAND VOICE — B & V overflow outside blue panel */}
      <div className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col leading-none">
        <div className="flex items-baseline">
          <span className="salo text-[100px] md:text-[150px] font-[400] text-[#8FC4E9]">B</span>
          <span className="salo text-[100px] md:text-[150px] font-[400] text-white">RAND</span>
        </div>
        <div className="flex items-baseline">
          <span className="salo text-[100px] md:text-[150px] font-[400] text-[#8FC4E9]">V</span>
          <span className="salo text-[100px] md:text-[150px] font-[400] text-white">OICE</span>
        </div>
      </div>

      {/* CIRCLE BADGE — center overlap */}
      <div className="absolute left-1/2 bottom-0 -translate-x-[20%] -translate-y-1/2 z-20">
        <img
          src={circleBadge}
          alt="circle badge"
          className="w-[140px] md:w-[180px] object-contain animate-spin"
          style={{ animationDuration: "10s" }}
        />
      </div>

    </div>
  );
}