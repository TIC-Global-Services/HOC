import computerImg from "../../../../assets/client/padlr/img/Group.png";
import paddleLogoImg from "../../../../assets/client/padlr/img/heroImg2.png";
import aboutVideo from "../../../../assets/client/padlr/vdo/Padlr_Animation 2.mp4";

const BLUE = "#0606BC";

export default function GrowthEngine() {
  return (
    <section className="w-[120vw] h-screen flex-shrink-0 bg-[#0606BC] overflow-hidden">
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full h-full flex flex-col">
        {/* ── TOP BAR ── */}
        <div className="relative flex items-start px-6 md:px-10 xl:px-16 border-b border-white">
          <h1
            className="salo text-white uppercase leading-none"
            style={{ fontSize: "clamp(60px, 12vw, 200px)" }}
          >
            GROWTH ENGINE
          </h1>

          <div className="md:absolute md:top-0 md:right-[15%] z-10">
            <img
              src={computerImg}
              alt="retro computer"
              className="object-contain pt-2 w-[100px] md:w-[150px] xl:w-[200px]"
            />
          </div>
        </div>

        {/* ── BOTTOM GRID ── */}
        <div className="flex flex-1">
          {/* LEFT BLOCK */}
          <div className="flex flex-col justify-between flex-[1.2] border-r border-white">
            {["TRACKED.", "ANALYZED.", "OPTIMIZED."].map((text, i) => (
              <div
                key={i}
                className="flex items-center px-6 md:px-10 flex-1 border-b border-white"
              >
                <span
                  className="salo text-white uppercase leading-none"
                  style={{ fontSize: "clamp(40px, 6vw, 100px)" }}
                >
                  {text}
                </span>
              </div>
            ))}

            {/* LOGO */}
            <div className="flex items-center justify-end px-6 py-6">
              <img
                src={paddleLogoImg}
                alt="padlr logo"
                className="w-[80px] md:w-[100px] xl:w-[120px]"
              />
            </div>
          </div>

          {/* MIDDLE TEXT */}
          <div className="flex flex-col justify-center px-6 md:px-10 xl:px-12 flex-1">
            <p
              className="salo text-white uppercase tracking-tight mb-4"
              style={{ fontSize: "clamp(28px, 3vw, 56px)" }}
            >
              ABOUT
            </p>

            <p
              className="jost text-white leading-[140%] tracking-tight border-y border-white py-4"
              style={{ fontSize: "clamp(14px, 1.4vw, 22px)" }}
            >
              Padlr Is Built To Power Modern Digital Ecosystems. From Fragmented
              Data To Unified Intelligence, Every Interaction Is Transformed
              Into Actionable Insight.
            </p>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative flex-1 border-l border-white overflow-hidden">
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
      </div>
    </section>
  );
}
