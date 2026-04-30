import leftImg from "../../../../assets/client/raks/img/panel4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section5 = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        
        backgroundPosition: "center",
        backgroundColor: "#FFCEC8",
      }}
    >

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

    </section>
  );
};

export default Section5;