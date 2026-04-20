// components/padlr/CourtSky.jsx
import refinedImg from "../../assets/client/qatamaran/refinedImg.png";
import treeImg from "../../assets/client/qatamaran/heroFloat2.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

export default function QataRefinedTailoring() {
  return (
    <div className="w-full min-h-screen flex bg-[#1E382D]"
    style={{
            backgroundImage: `url(${grid})`,
            backgroundSize: "cover",
          }}>

      {/* LEFT */}
      <div className="relative w-1/2 h-screen">
        <img
          src={refinedImg}
          alt="court"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* RIGHT */}
      <div className="relative w-1/2 h-screen  flex flex-col justify-between overflow-hidden">        
          <img
            src={treeImg}
            alt="swatches"
            className="w-[330px] absolute bottom-0 left-0 object-contain"
          />
        

        {/* middle right */}
        <div className="relative z-10 px-6 max-w-[500px] self-end">
          <h2 className="text-[120px] md:text-[200px] salo font-[400] text-start leading-none tracking-[4%] text-white">
            REFINED <br /> TAILORING
          </h2>
        </div>

        {/* Bottom row */}
        <div className="relative z-10 flex items-center justify-around pt-[10%] pb-[10%]">
          <div className="flex flex-col gap-1">
            <p className="jost font-[400] text-[20px] text-start text-white/80 mt-2">Crafted <br />In Heritage</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}