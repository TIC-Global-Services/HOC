import courtImg1 from "../../../../assets/client/padlr/img/courtImg1.png";
import courtImg2 from "../../../../assets/client/padlr/img/courtImg2.png";
import courtImg3 from "../../../../assets/client/padlr/img/courtImg3.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

export default function Section1() {
  return (
    <section
      className="w-full min-h-screen flex justify-center"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundColor: "#8FC4E9",
      }}
    >
      {/* CENTER CONTAINER */}
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex">
        {/* ── LEFT PANEL ── */}
        <div className="relative w-1/2 h-screen overflow-hidden">
          <img
            src={courtImg1}
            alt="court"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* ── RIGHT PANEL ── */}
        <div
          className="
          relative 
          w-1/2 
          h-screen 
          flex flex-col justify-between 
          px-6 md:px-10 xl:px-14 
          py-8 xl:py-12
        "
        >
          {/* TOP ROW */}
          <div className="flex justify-between items-start gap-6">
            {/* LEFT — SWATCH */}
            <div className="absolute top-0 left-0">
              <img
                src={courtImg2}
                alt="swatches"
                className="
        w-[140px] 
        md:w-[220px] 
        xl:w-[340px] 
        2xl:w-[360px]
        object-contain
      "
              />
            </div>

            {/* RIGHT — TITLE */}
            <div className="text-start translate-x-[55%] z-10">
              <h2
                className="salo font-[400] leading-none text-white text-start"
                style={{
                  fontSize: "clamp(64px, 14vw, 200px)",
                }}
              >
                COURT
                <br />
                SKY
              </h2>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="flex items-center justify-between">
            {/* TEXT */}
            <div>
              <p
                className="salo font-[400] leading-none text-start text-white"
                style={{
                  fontSize: "clamp(22px, 4vw, 50px)",
                }}
              >
                BOLD,
                <br />
                RICH, AND
                <br />
                UNAPOLOGETIC.
              </p>

              <p className="jost text-[13px] text-start md:text-[16px] xl:text-[24px] text-white/80 mt-3">
                Hex Precision
              </p>
              <p className="jost text-[13px] text-start md:text-[16px] xl:text-[24px] text-white/80">
                RGB Consistency
              </p>
            </div>

            {/* BAG IMAGE */}
            <img
              src={courtImg3}
              alt="product bag"
              className="
                object-contain 
                rotate-[-10deg]
                w-[120px] 
                md:w-[160px] 
                xl:w-[200px] 
                2xl:w-[240px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
