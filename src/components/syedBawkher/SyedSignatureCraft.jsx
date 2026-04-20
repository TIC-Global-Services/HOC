import craftImg from "../../assets/client/syedBawkher/img/signatureRightImg.png";
import elegantLogoImg from "../../assets/client/syedBawkher/img/signatureImg.png"; // circular badge/logo
import circleLogoImg from "../../assets/client/syedBawkher/img/heroImg1.png"; // swap your video

const BEIGE = "#EBE2CE"; 

export default function SyedSignatureCraft() {
  return (
    <section className="w-full" style={{ backgroundColor: BEIGE }}>
      {/* ── TOP BAR ── */}
      <div
        className="flex items-center justify-between px-6 xl:px-10"
        style={{ borderBottom: "2px solid white" }}
      >
        <h1 className="salo font-[400] md:text-[150px] text-[#262666] uppercase leading-none">
          SIGNATURE CRAFT
        </h1>

        <img
          src={circleLogoImg}
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
          style={{ width: "38%", borderRight: "2px solid white" }}
        >
          {/* TRACKED */}
          <div
            className="flex items-center px-6 xl:px-10 flex-1"
            style={{ borderBottom: "2px solid white" }}
          >
            <span className="salo md:text-[120px] text-[#262666] font-[400] uppercase leading-none">
              Measured.
            </span>
          </div>

          {/* ANALYZED */}
          <div
            className="flex items-center px-6 xl:px-8 flex-1"
            style={{ borderBottom: "2px solid white" }}
          >
            <span className="salo md:text-[120px] text-[#262666] font-[400] uppercase leading-none">
              Crafted.
            </span>
          </div>

          {/* OPTIMIZED  */}
          <div
            className="flex items-center px-6 xl:px-8 flex-1"
            style={{ borderBottom: "2px solid white" }}
          >
            <span className="salo md:text-[120px] text-[#262666] font-[400] uppercase leading-none">
                Perfected.
            </span>
          </div>

          {/* bat */}
          <div className="flex items-end justify-center py-6 xl:py-8">
            <img
              src={elegantLogoImg}
              alt="qata tree logo"
              className="md:w-[200px] object-contain bottom-0 bg-transparent"
            />
          </div>
        </div>

        {/*  ABOUT text */}
        <div
          className="flex flex-col justify-center"
          style={{ width: "30%" }}
        >
          <p className="salo md:text-[60px] font-[400] text-[#262666] text-start uppercase tracking-tight mb-5">
            ABOUT
          </p>
          <p className="jost capitalize font-regular md:text-[26px] text-start font-[400] text-[#262666] leading-[140%] tracking-tight border-t-2 border-b-2 border-white py-4">
            Syed Bawkher is built on a legacy of precision tailoring and enduring craftsmanship.
            From the first measurement to the final stitch, every garment is shaped with intent—transforming fine materials into expressions of timeless elegance.
          </p>
        </div>

        {/* Players silhouettes (video or img) */}
        <div
          className="relative overflow-hidden flex-1"
          style={{ borderLeft: "2px solid white" }}
        >
          <img
            src={craftImg}
            alt="silkImg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
