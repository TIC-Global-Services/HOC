import topCubImage from "../../../../assets/client/qatamaran/syedCub.png";
import bottomCubImage from "../../../../assets/client/qatamaran/syedCub.png";
import tagIcon from "../../../../assets/client/qatamaran/heroFloat3.png";
import tagIcon2 from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section2 = () => {
  return (
    <section
      className="relative h-screen flex overflow-visible"
      style={{
        width: "100vw",
        flexShrink: 0,
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundColor: "white",
      }}
    >
      {/* LEFT PANEL */}
      <div className="relative h-full" style={{ width: "40vw" }}>

        {/* TOP LEFT IMAGE */}
        <div
          className="absolute"
          style={{
            top: "8%",
            left: "5%",
            width: "clamp(120px,10vw,190px)",
            height: "clamp(200px,20vw,370px)",
          }}
        >
          {/* PIN */}
          <img
            src={tagIcon}
            alt="pin"
            className="absolute z-10 -rotate-12"
            style={{
              top: "0%",
              left: "-45%",
              width: "clamp(20px,6vw,100px)",
            }}
          />

          {/* IMAGE */}
          <img
            src={topCubImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ transform: "rotate(-12deg)" }}
          />
        </div>

        {/* BOTTOM RIGHT IMAGE */}
        <div
          className="absolute"
          style={{
            bottom: "15%",
            right: "8%",
            width: "clamp(180px, 18vw, 298px)",
            height: "clamp(150px, 15vw, 255px)",
          }}
        >
          {/* PIN */}
          <img
            src={tagIcon2}
            alt="pin"
            className="absolute z-10 rotate-12"
            style={{
              top: "-12%",
              left: "48%",
              width: "clamp(22px,6vw,100px)",
            }}
          />

          {/* IMAGE */}
          <img
            src={bottomCubImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ transform: "rotate(12.19deg)" }}
          />
        </div>

      </div>
    </section>
  );
};

export default Section2;