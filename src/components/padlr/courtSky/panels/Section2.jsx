import batlogo from "../../../../assets/client/padlr/img/batIcon.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";
import rightImg from "../../../../assets/client/padlr/img/courtPanelImg.png";

export default function Panel2() {
  return (
    <section
      className="w-full min-h-screen flex justify-center relative overflow-visible bg-[#8FC4E9]"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      {/* CENTER CONTAINER (FIX FOR LARGE SCREENS) */}
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] flex">

        {/* LEFT SIDE */}
        <div className="
          w-1/2 
          h-screen 
          flex flex-col justify-center 
          px-6 md:px-10 xl:px-14
        ">

          <p
            className="
              jost text-start
              font-[400] 
              capitalize 
              text-white/90 
              leading-[120%] 
              tracking-tight 
              max-w-[550px]
              text-[16px] 
              md:text-[22px] 
              xl:text-[28px] 
              2xl:text-[34px]
            "
          >
            Padlr is a modern destination built around the fast-growing culture of
            padel—where sport, community, and lifestyle come together.
            Designed for both Performance and Experience, it offers premium courts, vibrant social energy, and a space that goes beyond
            just playing the game
          </p>

          <img
            src={batlogo}
            alt="logo"
            className="
              mt-6 xl:mt-8
              w-[140px] 
              md:w-[160px] 
              xl:w-[180px] 
              2xl:w-[200px]
              object-contain
            "
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 relative h-screen overflow-visible">

          {/* IMAGE (BLEEDS TO NEXT PANEL) */}
          <img
            src={rightImg}
            alt="energy"
            className="
              absolute 
              top-0 
              right-[-5%] 
              h-full 
              w-auto 
              max-w-none 
              object-cover
            "
          />

        </div>

      </div>
    </section>
  );
}