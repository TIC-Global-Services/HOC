import img1 from "../../assets/client/qatamaran/heroFloat1.png";
import img2 from "../../assets/client/qatamaran/heroFloat2.png";
import img3 from "../../assets/client/qatamaran/heroFloat3.png";
import img4 from "../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const QatamaranHero = () => {
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
        <img src={img1} className="absolute top-[10%] left-[10%] w-[60px] md:w-[100px]" />
        <img src={img2} className="absolute top-[15%] right-[15%] w-[80px] md:w-[120px]" />
        <img src={img3} className="absolute bottom-[10%] left-[10%] w-[120px] md:w-[180px]" />
        <img src={img4} className="absolute bottom-[10%] right-[10%] w-[120px] md:w-[180px]" />

        {/* Center content with flexbox, no inner absolute */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <h1 className="font-[1000] alinsa text-[#060EBB] text-[80px] md:text-[120px] lg:text-[160px] leading-none tracking-tight">
            Qatamaran
          </h1>

          <button
            className="w-[220px] h-[70px] rounded-full border-2 bg-[#060EBB]
              text-white flex items-center justify-center
              text-sm md:text-base font-medium"
          >
            FASHION & LIFESTYLE
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full flex items-center text-start px-6 md:px-10 py-10 md:py-0">
        <p className="jost capitalize text-[14px] md:text-[26px] md:leading-[140%] font-[500] tracking-tight text-black max-w-[656px]">
          Qatamaran is a prêt-à-porter menswear label rooted in Chennai’s rich tailoring heritage, 
          designed for the modern gentleman who <span className="text-[] text-[40px] font-[500] salo">balances luxury with simplicity.</span> 
          Haus of Chaos crafted a visual identity inspired by its tropical roots, along with an 
          intimate packaging experience that reflects the refined sensibilities of its patrons.
        </p>
      </div>

    </section>
  );
};

export default QatamaranHero;
