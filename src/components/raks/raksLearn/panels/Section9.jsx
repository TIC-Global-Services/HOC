import rightImg from "../../../../assets/client/raks/img/panel10.png";
import topRightIcon from "../../../../assets/client/raks/img/heroImg1.png";
import bottomLeftIcon from "../../../../assets/client/raks/img/heroImg3.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section9 = () => {
  return (
    <section
      className="relative h-screen overflow-hidden flex"
      style={{
        width: "90vw",
        backgroundImage: `url(${grid})`,
        backgroundPosition: "center",
        backgroundColor: "white",
      }}
    >

      {/* ───────── LEFT SIDE ───────── */}
      <div
        className="relative h-full flex items-center"
        style={{
          width: "50vw",
          padding: "0 6vw",
        }}
      >

        {/* TEXT */}
        <div
          className="text-start"
          style={{
            maxWidth: "40vw",
          }}
        >
          <h2
            className="salo uppercase text-[#000085] leading-none"
            style={{ fontSize: "clamp(40px,8vw,140px)" }}
          >
            The RAKS Framework
          </h2>

          <p
            className="jost text-black mt-4"
            style={{
              fontSize: "clamp(14px,1.5vw,25px)",
              lineHeight: "140%",
            }}
          >
            A thoughtful approach to shaping young minds through purpose,
            rhythm, and meaningful learning.
          </p>
        </div>

        {/* TOP RIGHT ICON */}
        <img
          src={topRightIcon}
          alt=""
          className="absolute"
          style={{
            top: "6vh",
            right: "4vw",
            width: "clamp(50px,10vw,150px)",
          }}
        />

        {/* BOTTOM LEFT ICON */}
        <img
          src={bottomLeftIcon}
          alt=""
          className="absolute"
          style={{
            bottom: "6vh",
            left: "4vw",
            width: "clamp(50px,10vw,150px)",
          }}
        />

      </div>

      {/* ───────── RIGHT SIDE ───────── */}
      <div
        className="relative h-full"
        style={{
          width: "40vw",
        }}
      >
        <img
          src={rightImg}
          alt=""
          className="absolute -right-10 inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

    </section>
  );
};

export default Section9;