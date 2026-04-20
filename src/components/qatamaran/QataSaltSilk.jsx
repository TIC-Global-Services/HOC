import craftImg from "../../assets/client/qatamaran/heroFloat3.png";
import treeLogoImg from "../../assets/client/qatamaran/heroFloat2.png"; // circular badge/logo
import silkCraft from "../../assets/client/qatamaran/silkImg.png"; // swap your video

const GREEN = "#1E382D"; 

export default function QataSaltSilk() {
  return (
    <section className="w-full" style={{ backgroundColor: GREEN }}>
      {/* ── TOP BAR ── */}
      <div
        className="flex items-center justify-between px-6 xl:px-10"
        style={{ borderBottom: "1px solid white" }}
      >
        <h1 className="salo font-[400] md:text-[150px] text-white uppercase leading-none">
          Salt & Silk craft
        </h1>

        <img
          src={craftImg}
          alt="retro computer"
          className="object-contain self-start pt-2"
          style={{ width: "clamp(110px, 14vw, 210px)" }}
        />
      </div>

      {/* ── BOTTOM GRID ── */}
      <div className="flex min-h-[60vh]">
        {/* TRACKED / ANALYZED / OPTIMIZED + paddle badge */}
        <div
          className="flex flex-col"
          style={{ width: "38%", borderRight: "1px solid white" }}
        >
          {/* TRACKED */}
          <div
            className="flex items-center px-6 xl:px-10 flex-1"
            style={{ borderBottom: "1px solid white" }}
          >
            <span className="salo md:text-[120px] text-white font-[400] uppercase leading-none">
              Heritage.
            </span>
          </div>

          {/* ANALYZED */}
          <div
            className="flex items-center px-6 xl:px-8 flex-1"
            style={{ borderBottom: "1px solid white" }}
          >
            <span className="salo md:text-[120px] text-white font-[400] uppercase leading-none">
              Craft.
            </span>
          </div>

          {/* OPTIMIZED  */}
          <div
            className="flex items-center px-6 xl:px-8 flex-1"
            style={{ borderBottom: "1px solid white" }}
          >
            <span className="salo md:text-[120px] text-white font-[400] uppercase leading-none">
                Voyage.
            </span>
          </div>

          {/* bat */}
          <div className="flex items-end justify-start py-6 xl:py-8">
            <img
              src={treeLogoImg}
              alt="qata tree logo"
              className="md:w-[110px] object-contain bottom-0 bg-transparent rotate-[16deg]"
            />
          </div>
        </div>

        {/*  ABOUT text */}
        <div
          className="flex flex-col justify-center"
          style={{ width: "30%" }}
        >
          <p className="salo md:text-[60px] font-[400] text-white text-start uppercase tracking-tight mb-5">
            ABOUT
          </p>
          <p className="jost font-regular md:text-[26px] text-start font-[400] text-white leading-[140%] tracking-tight border-t border-b border-white py-4">
            Rooted in seaside heritage, shaped by skilled hands. A balance of fluid elegance and structured precision.
          </p>
        </div>

        {/* Players silhouettes (video or img) */}
        <div
          className="relative overflow-hidden flex-1"
          style={{ borderLeft: "1px solid white" }}
        >
          <img
            src={silkCraft}
            alt="silkImg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
