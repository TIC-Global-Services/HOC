import leftImg from "../../../../assets/client/raks/img/panel5.png";
import topRightImg from "../../../../assets/client/raks/img/panel6Left.png";
import centerImg from "../../../../assets/client/raks/img/pallikoodam.png";
import pinImg from "../../../../assets/client/raks/img/heroImg1.png";
import pinImg2 from "../../../../assets/client/raks/img/heroImg2.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section6 = () => {
  return (
    <section
      className="relative h-screen flex overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundPosition: "center",
        backgroundColor: "white",
      }}
    >

      {/* ───── LEFT (50vw) ───── */}
      <div className="relative h-full" style={{ width: "50vw" }}>
        <img
          src={leftImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ───── RIGHT (100vw) ───── */}
      <div className="relative h-full" style={{ width: "100vw" }}>

        {/* HEADING */}
        <div
          className="absolute"
          style={{
            top: "5vh",
            left: "8vw",
          }}
        >
          <h2
            className="salo uppercase text-black leading-none"
            style={{ fontSize: "clamp(40px,8vw,120px)" }}
          >
            Learn Beyond Limits
          </h2>
        </div>

        {/* PARAGRAPH */}
        <div
          className="absolute text-start"
          style={{
            top: "22vh",
            left: "8vw",
            maxWidth: "650px",
          }}
        >
          <p
            className="jost text-black"
            style={{
              fontSize: "clamp(14px,1.5vw,26px)",
              lineHeight: "140%",
            }}
          >
            From academics to arts and sports, every talent finds its place. A balanced approach to learning, creativity, and growth.Nurturing skills beyond the classroom for a brighter future.
          </p>
        </div>

        {/* TOP RIGHT IMAGE */}
        <div className="absolute"
        style={{
            top: "25%",
            left: "80%",
            transform: "translate(-50%, -50%) rotate(-10deg)",
          }}>
        {/* PIN */}
          <img
            src={pinImg2}
            alt=""
            className="absolute z-10"
            style={{
              top: "6%",
              left: "-30%",
              width: "clamp(40px,6vw,120px)",
              transform: "rotate(-30deg)",
            }}
          />
        <img
          src={topRightImg}
          alt=""
          className="object-contain"
          style={{
            top: "10vh",
            right: "8vw",
            width: "clamp(80px,14vw,350px)",
            transform: "rotate(-8deg)",
          }}
        />
        </div>

        {/* CENTER IMAGE */}
        <div
          className="absolute"
          style={{
            top: "70%",
            left: "40%",
            transform: "translate(-50%, -50%) rotate(-10deg)",
          }}
        >
          {/* PIN */}
          <img
            src={pinImg}
            alt=""
            className="absolute z-10"
            style={{
              top: "-8%",
              left: "-8%",
              width: "clamp(40px,6vw,120px)",
              transform: "rotate(-30deg)",
            }}
          />

          {/* MAIN */}
          <img
            src={centerImg}
            alt=""
            className="object-contain"
            style={{
              width: "clamp(200px,24vw,500px)",
            }}
          />
        </div>

        {/* BOTTOM RIGHT TEXT */}
        <h3
          className="salo uppercase tracking-tight text-start leading-none text-[#000085] absolute"
          style={{
            bottom: "8vh",
            right: "8vw",
            fontSize: "clamp(30px,8vw,150px)",
          }}
        >
          Curious <br /> Mind
        </h3>

      </div>
    </section>
  );
};

export default Section6;