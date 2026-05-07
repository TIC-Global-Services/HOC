import leftImg from "../../../../assets/client/raks/img/panel4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import GridOverlay from "../../../GridOverlay";

const Section5 = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundColor: "#FFCEC8",
      }}>

        {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full h-full">

      {/* LEFT IMAGE */}
      <div
        className="absolute top-0 left-0 h-full"
        style={{
          width: "30vw", 
        }}
      >
        <img
          src={leftImg}
          alt=""
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center",
          }}
        />
      </div>

      {/* RIGHT TEXT */}
      <div
        className="absolute text-start"
        style={{
          top: "50%",
          right: "10%",              
          transform: "translateY(-50%)",
          maxWidth: "30vw",
        }}
      >
        <h2
          className="salo uppercase text-white leading-none"
          style={{
            fontSize: "clamp(40px,20vh,200px)",
          }}
        >
          Play <br /> Bold <br /> Win.
        </h2>
      </div>

      </div>

    </section>
  );
};

export default Section5;