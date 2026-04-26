import craftWaterImg from "../../../../assets/client/qatamaran/block4Right.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

export default function Section() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#8FC4E9",
      }}
    >
      {/* IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={craftWaterImg}
          alt=""
          className="w-full h-full"
          style={{
            objectFit: "cover",       
            objectPosition: "center",
          }}
        />
      </div>
    </section>
  );
}