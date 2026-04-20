import img1 from "../../assets/client/padlr/img/heroImg1.png";
import img2 from "../../assets/client/padlr/img/heroImg2.png";
import img3 from "../../assets/client/padlr/img/heroImg3.png";
import img4 from "../../assets/client/padlr/img/heroImg4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const PadlrHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">

      {/* LEFT SIDE */}
      <div
        className="relative w-full h-[500px] md:h-screen md:max-w-[700px] flex-shrink-0 overflow-hidden"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
        }}
      >
        {/* Floating images — positioned relative to this box */}
        <img src={img2} className="absolute top-[10%] left-[10%] w-[60px] md:w-[100px]" />
        <img src={img1} className="absolute top-[15%] right-[15%] w-[80px] md:w-[120px]" />
        <img src={img4} className="absolute bottom-[10%] left-[10%] w-[120px] md:w-[180px]" />
        <img src={img3} className="absolute bottom-[10%] right-[10%] w-[120px] md:w-[180px]" />

        {/* Center content with flexbox, no inner absolute */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <h1 className="font-[1000] alinsa text-[#060EBB] text-[80px] md:text-[120px] lg:text-[160px] leading-none tracking-tight">
            PADLR
          </h1>

          <button
            className="w-[220px] h-[70px] rounded-full border-2 bg-[#060EBB]
              text-white flex items-center justify-center
              text-sm md:text-base font-medium"
          >
            SPORTS & LIFESTYLE
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full flex items-center text-start px-6 md:px-10 py-10 md:py-0">
        <p className="jost text-[14px] md:text-[26px] md:leading-[1.5] font-[500] text-black max-w-[656px]">
          Established In 2025, Padlr Is Set To Be Chennai's Premier Padel And{" "}
          <span className="text-blue-600 font-semibold">Pickleball</span>{" "}
          Destination. As A High-Performance, Tech-Forward Arena, Padlr Takes
          The Demands Of These Racquet Sports Seriously, With Ultra-Panoramic
          Padel Courts Licensed By{" "}
          <span className="text-blue-600 font-semibold">SkyPadel</span>, Spain,
          Outfitted With Mondo Turf The First Of Its Kind In Chennai And
          Semi-Indoor Pickleball Courts Engineered To IPA Standards.<br />
          When Haus Of Chaos Partnered With Padlr, It Was Game, Set And A Match
          Like No Other. The Score? One Suave, Bold Identity In The Spirit Of
          All Things{" "}
          <span className="text-blue-600 font-semibold">"Seriously Playful"</span>.
        </p>
      </div>

    </section>
  );
};

export default PadlrHero;
