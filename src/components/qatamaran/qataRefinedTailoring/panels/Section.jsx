
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const refinedImg = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/refinedImg.png";

export default function Section() {
  return (
    <section
      className="h-screen w-full overflow-hidden"
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