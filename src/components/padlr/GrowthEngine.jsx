import computerImg from "../../assets/client/padlr/img/Group.png";
import paddleLogoImg from "../../assets/client/padlr/img/heroImg2.png"; // circular badge/logo
import aboutVideo from "../../assets/client/padlr/vdo/Padlr_Animation 2.mp4"; // swap your video

const BLUE = "#0606BC"; // match your brand blue

export default function GrowthEngine() {
  return (
    <section className="w-full" style={{ backgroundColor: BLUE }}>
      {/* ── TOP BAR ── */}
      <div
        className="flex items-center justify-between px-6 xl:px-10"
        style={{ borderBottom: "1px solid white" }}
      >
        <h1 className="salo font-[400] md:text-[150px] text-white uppercase leading-none">
          GROWTH ENGINE
        </h1>

        <img
          src={computerImg}
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
              TRACKED.
            </span>
          </div>

          {/* ANALYZED */}
          <div
            className="flex items-center px-6 xl:px-8 flex-1"
            style={{ borderBottom: "1px solid white" }}
          >
            <span className="salo md:text-[120px] text-white font-[400] uppercase leading-none">
              ANALYZED.
            </span>
          </div>

          {/* OPTIMIZED  */}
          <div
            className="flex items-center px-6 xl:px-8 flex-1"
            style={{ borderBottom: "1px solid white" }}
          >
            <span className="salo md:text-[120px] text-white font-[400] uppercase leading-none">
              OPTIMIZED.
            </span>
          </div>

          {/* bat */}
          <div className="flex items-center justify-end mr-4 py-6 xl:py-8">
            <img
              src={paddleLogoImg}
              alt="padlr logo"
              className="md:w-[110px] object-contain bg-transparent"
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
            Padlr Is Built To Power Modern Digital Ecosystems. From Fragmented
            Data To Unified Intelligence, Every Interaction Is Transformed Into
            Actionable Insight.
          </p>
        </div>

        {/* Players silhouettes (video or img) */}
        <div
          className="relative overflow-hidden flex-1"
          style={{ borderLeft: "1px solid white" }}
        >
          <video
            src={aboutVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
