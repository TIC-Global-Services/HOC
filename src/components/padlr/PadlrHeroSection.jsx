import img1 from "../../assets/client/padlr/img/heroImg1.png";
import img2 from "../../assets/client/padlr/img/heroImg2.png";
import img3 from "../../assets/client/padlr/img/heroImg3.png";
import img4 from "../../assets/client/padlr/img/heroImg4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const PadlrHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">

      {/* LEFT SIDE */}
      <div
        className="relative border w-full lg:w-[55%] xl:w-[50%] h-[500px] sm:h-[600px] lg:h-screen overflow-hidden flex-shrink-0"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
        }}
      >
        {/* Floating Images */}
        <img src={img2} className="absolute top-[10%] left-[8%] w-[50px] sm:w-[70px] md:w-[90px] lg:w-[110px]" />
        <img src={img1} className="absolute top-[12%] right-[10%] w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]" />
        <img src={img4} className="absolute bottom-[10%] left-[8%] w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px]" />
        <img src={img3} className="absolute bottom-[10%] right-[10%] w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px]" />

        {/* Center Content */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 text-center">
          
          <h2
            className="font-[1000] alinsa text-[#060EBB] leading-none tracking-tight"
            style={{
              fontSize: "clamp(60px, 12vw, 160px)"
            }}
          >
            PADLR
          </h2>

          <button
            className="rounded-full border-2 bg-[#060EBB] text-white flex items-center justify-center font-medium"
            style={{
              width: "clamp(160px, 18vw, 240px)",
              height: "clamp(50px, 6vw, 80px)",
              fontSize: "clamp(12px, 1vw, 16px)"
            }}
          >
            SPORTS & LIFESTYLE
          </button>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[45%] xl:w-[50%] flex items-center px-6 sm:px-10 lg:px-12 py-10 lg:py-0">
        
        <p
          className="jost text-black text-start font-[500] leading-[150%]"
          style={{
            fontSize: "clamp(14px, 1.5vw, 26px)"
          }}
        >
          Established In 2025, Padlr Is Set To Be Chennai's Premier Padel And{" "}
          <span className="text-[#060EBB] font-[400] salo text-[clamp(18px,2vw,40px)]">
            Pickleball
          </span>{" "}
          Destination. As A High-Performance, Tech-Forward Arena, Padlr Takes
          The Demands Of These Racquet Sports Seriously, With Ultra-Panoramic
          Padel Courts Licensed By{" "}
          <span className="text-[#060EBB] font-[400] salo text-[clamp(18px,2vw,40px)]">
            SkyPadel
          </span>, Spain,
          Outfitted With Mondo Turf The First Of Its Kind In Chennai And
          Semi-Indoor Pickleball Courts Engineered To IPA Standards.
          <br />
          When Haus Of Chaos Partnered With Padlr, It Was Game, Set And A Match
          Like No Other. The Score? One Suave, Bold Identity In The Spirit Of
          All Things{" "}
          <span className="text-[#060EBB] font-[400] salo text-[clamp(18px,2vw,40px)]">
            "Seriously Playful"
          </span>.
        </p>

      </div>

    </section>
  );
};

export default PadlrHero;