import computerImg from "../../../../assets/client/padlr/img/Group.png";
import paddleLogoImg from "../../../../assets/client/padlr/img/heroImg2.png";
import aboutVideo from "../../../../assets/client/padlr/vdo/Padlr_Animation 2.mp4";

const BLUE = "#0606BC";

export default function GrowthEngine() {
  return (
    <section
      className="w-full min-h-screen flex justify-center"
      style={{ backgroundColor: BLUE }}
    >
      {/* CENTER CONTAINER */}
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex flex-col h-screen">

        {/* ── TOP BAR ── */}
        <div
          className="flex items-start justify-between px-6 md:px-10 xl:px-14"
          style={{ borderBottom: "1px solid white" }}
        >
          <h1
            className="salo text-white uppercase leading-none"
            style={{
              fontSize: "clamp(60px, 10vw, 150px)",
            }}
          >
            GROWTH ENGINE
          </h1>

          <img
            src={computerImg}
            alt="retro computer"
            className="object-contain pt-2"
            style={{ width: "clamp(110px, 12vw, 210px)" }}
          />
        </div>

        {/* ── BOTTOM GRID ── */}
        <div className="flex flex-1">

          {/* LEFT BLOCK */}
          <div
            className="flex flex-col justify-between"
            style={{ flex: 1.2, borderRight: "1px solid white" }}
          >

            {/* TEXT ROWS */}
            {["TRACKED.", "ANALYZED.", "OPTIMIZED."].map((text, i) => (
              <div
                key={i}
                className="flex items-center px-6 md:px-10 flex-1"
                style={{ borderBottom: "1px solid white" }}
              >
                <span
                  className="salo text-white uppercase leading-none"
                  style={{
                    fontSize: "clamp(40px, 7vw, 110px)",
                  }}
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
                className="
                  w-[80px] 
                  md:w-[100px] 
                  xl:w-[120px]
                  object-contain
                "
              />
            </div>

          </div>

          {/* MIDDLE TEXT */}
          <div
            className="flex flex-col justify-center px-6 md:px-10 xl:px-12"
            style={{ flex: 1 }}
          >
            <p
              className="salo text-white uppercase tracking-tight mb-4"
              style={{
                fontSize: "clamp(28px, 4vw, 60px)",
              }}
            >
              ABOUT
            </p>

            <p
              className="jost text-white leading-[140%] tracking-tight border-t border-b border-white py-4"
              style={{
                fontSize: "clamp(14px, 1.6vw, 24px)",
              }}
            >
              Padlr Is Built To Power Modern Digital Ecosystems. From Fragmented
              Data To Unified Intelligence, Every Interaction Is Transformed Into
              Actionable Insight.
            </p>
          </div>

          {/* RIGHT VIDEO */}
          <div
            className="relative overflow-visible flex-1"
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
      </div>
    </section>
  );
}