import batlogo from "../../../../assets/client/padlr/img/batIcon.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import rightImg from "../../../../assets/client/padlr/img/courtPanelImg.png"; // add this

export default function Panel2() {
  return (
    <div
      className="w-screen h-screen flex bg-[#8FC4E9] relative overflow-visible"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >

      {/* LEFT SIDE */}
      <div className="w-1/2 h-full flex flex-col justify-center px-12">

        <p className="jost text-white/90 text-[18px] md:text-[40px] leading-[140%] max-w-[420px]">
          Padlr is a modern destination built around the fast-growing culture of
          padel—where sport, community, and lifestyle come together.
        </p>

        <img
          src={batlogo}
          alt="logo"
          className="mt-8 w-[180px] object-contain"
        />

      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 relative overflow-visible">

        {/* IMAGE CONTINUES TO NEXT PANEL */}
        <img
          src={rightImg}
          alt="energy"
          className="
            absolute
            top-0
            h-full
            w-[100%]   /*key for 20% spill */
            max-w-none
            object-cover
          "
          style={{ right: "-20%" }}
        />

      </div>

    </div>
  );
}