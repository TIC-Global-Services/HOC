import computerImg from "../../../../assets/client/padlr/img/Group.png";
import paddleLogoImg from "../../../../assets/client/padlr/img/heroImg2.png";
import aboutVideo from "../../../../assets/client/padlr/vdo/Padlr_Animation 2.mp4";

export default function GrowthEngine() {
  return (
    <section className="w-[100%] h-screen bg-[#0606BC] overflow-hidden flex flex-col">

      {/* ── TOP BAR ── */}
      <div
        className="relative flex items-center px-6 border-b border-white flex-shrink-0"
        style={{ height: "28%" }}
      >
        <h1
          className="salo text-white uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(36px, 12vw, 190px)" }}
        >
          GROWTH ENGINE
        </h1>

        <div className="absolute top-0 right-[30%] h-full flex items-center z-10">
          <img
            src={computerImg}
            alt="retro computer"
            className="object-contain h-[90%] w-auto"
          />
        </div>
      </div>

      {/* ── BOTTOM GRID ── */}
      <div className="flex flex-1 min-h-0 w-full">

        {/* LEFT COLUMN */}
        <div className="flex flex-col border-r border-white" style={{ width: "30%" }}>

          {["TRACKED.", "ANALYZED.", "OPTIMIZED."].map((text, i) => (
            <div
              key={i}
              className="flex items-center px-4 border-b border-white flex-1 min-h-0"
            >
              <span
                className="salo text-white uppercase leading-none"
                style={{ fontSize: "clamp(18px, 6vw, 120px)" }}
              >
                {text}
              </span>
            </div>
          ))}

          {/* LOGO ROW */}
          <div className="flex items-center justify-end px-4 py-3 flex-shrink-0">
            <img
              src={paddleLogoImg}
              alt="padlr logo"
              className="object-contain"
              style={{ width: "clamp(50px, 7vw, 120px)" }}
            />
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="flex flex-1 min-w-0 min-h-0">

          {/* TEXT */}
          <div className="flex flex-col justify-center text-start pt-[10%] w-[40%] min-w-0 flex-shrink-0">
            <p
              className="salo text-white uppercase mb-3 px-5"
              style={{ fontSize: "clamp(18px, 3.8vw, 60px)" }}
            >
              ABOUT
            </p>
            <p
              className="jost text-white leading-[140%] border-t-2 border-b-2 border-white py-3 px-5"
              style={{ fontSize: "clamp(11px, 1.4vw, 26px)" }}
            >
             Padlr is built to power modern digital ecosystems. From fragmented data to unified intelligence, every interaction is transformed into actionable insight.
            </p>
          </div>

          {/* VIDEO */}
          <div className="flex-1 min-w-0 min-h-0 w-full flex items-center justify-center overflow-hidden">
            <video
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-[20%_30%]"
            />
          </div>

        </div>
      </div>

    </section>
  );
}