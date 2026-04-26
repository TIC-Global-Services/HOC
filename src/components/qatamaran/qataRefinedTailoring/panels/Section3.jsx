import grid from "../../../../assets/client/padlr/img/checkBg.png";
import refinedImg3 from "../../../../assets/client/qatamaran/block3Img.png";

const Section3 = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundColor: "#8FC4E9",
      }}
    >
      {/* IMAGE */}
      <img
        src={refinedImg3}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: "cover",  
          objectPosition: "center", 
        }}
      />
    </section>
  );
};

export default Section3;