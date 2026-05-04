import React from "react";
import raksVideo from "../../../../assets/client/raks/vdo/raks.mp4";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const Section10 = () => {
  return (
    <section
      className="relative h-screen flex overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundPosition: "center",
        backgroundColor: "white",
      }}
    >
      {/* ─── LEFT TEXT (30vw) ─── */}
      <div
        className="h-full flex items-center justify-center"
        style={{
          width: "30vw",
          padding: "0 clamp(20px,4vw,80px)",
        }}
      >
        <div
          className="text-start"
          style={{
            maxWidth: "20vw",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(10px,2vw,30px)",
          }}
        >
          <h2
            className="salo uppercase text-[#000085] leading-none tracking-tight"
            style={{
              fontSize: "clamp(30px,20vh,150px)",
            }}
          >
            Learn <br /> Bold <br /> Build
          </h2>
        </div>
      </div>

      {/* ─── RIGHT VIDEO (70vw) ─── */}
      <div className="relative h-full" style={{ width: "70vw" }}>
        <video
          src={raksVideo}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          controls={false}
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Section10;
