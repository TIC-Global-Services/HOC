import computerImg from "../../../../assets/client/padlr/img/Group.png";
import paddleLogoImg from "../../../../assets/client/padlr/img/heroImg2.png";
import aboutVideo from "../../../../assets/client/padlr/vdo/Padlr_Animation 2.mp4";

export default function Section1() {
  return (
    <section className="w-full h-screen bg-[#0606BC] overflow-hidden flex">
      {/* ───────── LEFT CONTENT ───────── */}
      <div className="w-[60%] h-full flex flex-col relative z-10 bg-[#0606BC]">
        {/* TOP HEADING */}
        <div className="border-b border-white px-6 py-5">
          <h1
            className="salo text-start text-white uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(36px, 9vw, 190px)" }}
          >
            GROWTH ENGINE
          </h1>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="flex flex-1 min-h-0">
          {/* LEFT COLUMN */}
          <div className="w-[50%] border-r border-white flex flex-col">
            {["TRACKED.", "ANALYZED.", "OPTIMIZED."].map((text, i) => (
              <div
                key={i}
                className="flex items-center px-6 border-b border-white flex-1"
              >
                <span
                  className="salo text-white uppercase leading-none"
                  style={{ fontSize: "clamp(18px, 6vw, 120px)" }}
                >
                  {text}
                </span>
              </div>
            ))}

            {/* LOGO */}
            <div className="flex items-center justify-end px-4 py-4">
              <img
                src={paddleLogoImg}
                alt="padlr logo"
                className="object-contain"
                style={{ width: "clamp(50px, 7vw, 120px)" }}
              />
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div className="w-[50%] flex flex-col justify-center text-start">
            <div className="flex flex-col gap-2">
              {/* ABOUT TITLE */}
              <p
                className="salo text-white uppercase pt-40 px-5"
                style={{ fontSize: "clamp(18px, 3vw, 60px)" }}
              >
                ABOUT
              </p>

              {/* ABOUT TEXT */}
              <p
                className="jost capitalize text-white leading-[140%] border-t border-b border-white px-5 py-10"
                style={{ fontSize: "clamp(11px, 1.5vw, 24px)" }}
              >
                Padlr is built to power modern digital ecosystems. From
                fragmented data to unified intelligence, every interaction is
                transformed into actionable insight.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── RIGHT VIDEO ───────── */}
      <div className="w-[40%] h-screen overflow-hidden relative">
        <video
          src={aboutVideo}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
