import grid from "../../../../assets/client/padlr/img/checkBg.png";
import mainImg from "../../../../assets/client/padlr/img/courtPanelImg2.png"; // your left image
import circleLogo from "../../../../assets/client/padlr/img/heroImg1.png";  // circular logo

export default function Panel4() {
  return (
    <div
      className="w-screen h-screen flex bg-white"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >

      {/* LEFT SIDE (spill from Panel3 shows here) */}
      <div className="w-1/2 h-screen flex items-center justify-between px-10">
      {/* LEFT IMAGE CARD */}
        <div className="w-[280px] md:w-[640px]">
          <img
            src={mainImg}
            alt="brand"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* CENTER CIRCLE LOGO */}
        <div className="flex items-end justify-end">
          <img
            src={circleLogo}
            alt="logo"
            className="w-[80px] md:w-[110px] object-contain"
          />
        </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 h-screen flex items-center justify-between px-10">

        {/* RIGHT BLUE STRIP */}
        <div className="absolute translate-x-[14%] flex items-end justify-end">
            <h2 className="salo text-white text-start text-[40px] md:text-[200px] leading-none tracking-wide">
            <span className="text-[#8FC4E9]">B</span>RAND <span className="text-[#8FC4E9]">V</span>OICE
          </h2>
        </div>
      </div>
      <div className="h-screen w-[120px] md:w-[1400px] bg-[#8FC4E9]" />
    </div>
  );
}