import refinedImg from "../../../../assets/client/qatamaran/refinedImg.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

export default function Section() {
  return (
    <section
      className="h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundColor: "#8FC4E9",
      }}
    >
      <div className="relative w-full h-full">
        <img
          src={refinedImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}