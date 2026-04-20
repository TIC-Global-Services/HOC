// components/padlr/CourtSky.jsx
import courtImg1 from "../../assets/client/padlr/img/courtImg1.png";
import courtImg2 from "../../assets/client/padlr/img/courtImg2.png";
import courtImg3 from "../../assets/client/padlr/img/courtImg3.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

export default function CourtSky() {
  return (
    <div className="w-full min-h-screen flex bg-[#8FC4E9]"
    style={{
            backgroundImage: `url(${grid})`,
            backgroundSize: "cover",
          }}>

      {/* LEFT */}
      <div className="relative w-1/2 h-screen">
        <img
          src={courtImg1}
          alt="court"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* RIGHT */}
      <div className="relative w-1/2 h-screen  flex flex-col justify-between overflow-hidden">

        {/* Swatch image — top left */}
        <div className="relative z-10 p-6">
          <img
            src={courtImg2}
            alt="swatches"
            className="w-[330px] absolute top-0 left-0 object-contain"
          />
        </div>

        {/* COURT SKY — middle right */}
        <div className="relative z-10 px-6 max-w-[500px] self-end">
          <h2 className="text-[120px] md:text-[200px] salo font-[400] text-start leading-none tracking-[4%] text-white">
            COURT<br />SKY
          </h2>
        </div>

        {/* Bottom row */}
        <div className="relative z-10 flex items-center justify-around pt-[10%] pb-[10%]">
          <div className="flex flex-col gap-1">
            <p className="md:text-[40px] salo text-start font-[400] leading-none tracking-tight text-white">
              BOLD,<br />RICH, AND<br />UNAPOLOGETIC.
            </p>
            <p className="jost font-[400] text-[20px] text-start text-white/80 mt-2">Hex Precision</p>
            <p className="jost font-[400] text-[20px] text-start text-white/80">RGB Consistency</p>
          </div>
          <img
            src={courtImg3}
            alt="product bag"
            className="w-[180px] md:w-[240px] object-contain rotate-[-10deg]"
          />
        </div>

      </div>
    </div>
  );
}