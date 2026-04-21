import rakathonImg from "../../assets/client/raks/img/rightImg.png";
import raksLearnImg from "../../assets/client/raks/img/raksLearn.png"; // circular badge/logo
import raksImg from "../../assets/client/syedBawkher/img/heroImg2.png"; // swap your video

const NAVY_BLUE = "#000085"; 

export default function RaksLearning() {
  return (
    <section className="w-full min-h-screen" style={{ backgroundColor: NAVY_BLUE }}>
      {/* ── TOP BAR ── */}
      <div
        className="flex items-center justify-between px-6 xl:px-10"
        style={{ borderBottom: "2px solid white" }}
      >
        <h1 className="salo font-[400] md:text-[150px] text-[#FFCEC8] uppercase leading-none">
          LEARNING REIMAGINED
        </h1>

        <img
          src={raksLearnImg}
          alt="raksLearnImage"
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
            <span className="salo md:text-[120px] text-[#FFCEC8] font-[400] uppercase leading-none">
              Class.
            </span>
          </div>

          {/* ANALYZED */}
          <div
            className="flex items-center px-6 xl:px-8 flex-1"
            style={{ borderBottom: "2px solid white" }}
          >
            <span className="salo md:text-[120px] text-[#FFCEC8] font-[400] uppercase leading-none">
              Kids.
            </span>
          </div>

          {/* OPTIMIZED  */}
          <div
            className="flex items-center px-6 xl:px-8 flex-1"
            style={{ borderBottom: "2px solid white" }}
          >
            <span className="salo md:text-[120px] text-[#FFCEC8] font-[400] uppercase leading-none">
                Perfected.
            </span>
          </div>

          {/* bat */}
          <div className="flex items-end justify-center py-6 xl:py-8">
            <img
              src={raksImg}
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
          <p className="salo md:text-[60px] font-[400] text-[#FFCEC8] text-start uppercase tracking-tight mb-5">
            ABOUT
          </p>
          <p className="jost capitalize font-regular md:text-[26px] text-start font-[400] text-[#FFCEC8] leading-[140%] tracking-tight border-t-2 border-b-2 border-white py-4">
            RaK’s Institutions is a forward-thinking school rooted in the Reggio-Emilia philosophy, 
            where children lead their own learning journeys. Through experiential, sports-integrated, and problem-based approaches.
          </p>
        </div>

        {/* Image */}
        <div
          className="relative flex-1"
          style={{ borderLeft: "2px solid white" }}
        >
          <img
            src={rakathonImg}
            alt="silkImg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
