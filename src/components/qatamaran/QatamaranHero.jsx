import img1 from "../../assets/client/qatamaran/heroFloat1.png";
import img2 from "../../assets/client/qatamaran/heroFloat2.png";
import img3 from "../../assets/client/qatamaran/heroFloat3.png";
import img4 from "../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../assets/client/padlr/img/checkBg.png";

const QatamaranHero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center">

      {/* ✅ CENTER CONTAINER */}
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex flex-col md:flex-row">

        {/* ── LEFT SIDE ── */}
        <div
          className="
            relative 
            w-full 
            h-[500px] 
            md:h-screen 
            md:w-1/2
            overflow-hidden
            flex-shrink-0
            border-2
          "
          style={{
            backgroundImage: `url(${grid})`,
            backgroundSize: "cover",
          }}
        >
          {/* FLOATING IMAGES */}
          <img
            src={img1}
            className="
              absolute top-[10%] left-[10%]
              w-[50px] md:w-[80px] xl:w-[100px]
            "
          />
          <img
            src={img2}
            className="
              absolute top-[15%] right-[15%]
              w-[60px] md:w-[100px] xl:w-[120px]
            "
          />
          <img
            src={img3}
            className="
              absolute bottom-[10%] left-[10%]
              w-[100px] md:w-[140px] xl:w-[180px]
            "
          />
          <img
            src={img4}
            className="
              absolute bottom-[10%] right-[10%]
              w-[100px] md:w-[140px] xl:w-[180px]
            "
          />

          {/* CENTER CONTENT */}
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 px-4">

            <h1
              className="font-[1000] alinsa text-[#060EBB] leading-none tracking-tight text-center"
              style={{
                fontSize: "clamp(48px, 8vw, 140px)",
              }}
            >
              Qatamaran
            </h1>

            <button
              className="
                rounded-full border-2 bg-[#060EBB] text-white 
                flex items-center justify-center
                font-medium
                w-[160px] h-[45px]
                md:w-[200px] md:h-[60px]
                xl:w-[220px] xl:h-[70px]
                text-sm md:text-base
              "
            >
              FASHION & LIFESTYLE
            </button>

          </div>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div
          className="
            w-full 
            md:w-1/2
            flex items-center 
            px-6 md:px-10 xl:px-14 
            py-10 md:py-0
          "
        >
          <p
            className="
              jost capitalize text-start
              font-[500] tracking-tight 
              text-black 
              max-w-[656px]
              leading-[150%]
              text-[14px] 
              md:text-[18px] 
              xl:text-[22px] 
              2xl:text-[26px]
            "
          >
            Qatamaran is a prêt-à-porter menswear label rooted in Chennai’s rich tailoring heritage, 
            designed for the modern gentleman who{" "}
            <span className="salo font-[500] text-[#1E382D] text-[18px] md:text-[26px] xl:text-[32px] 2xl:text-[40px]">
              balances luxury with simplicity.
            </span>{" "}
            Haus of Chaos crafted a visual identity inspired by its tropical roots, along with an 
            intimate packaging experience that reflects the refined sensibilities of its patrons.
          </p>
        </div>

      </div>
    </section>
  );
};

export default QatamaranHero;