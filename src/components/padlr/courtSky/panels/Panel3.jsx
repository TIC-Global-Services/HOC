import grid from "../../../../assets/client/padlr/img/checkBg.png";
import delightImg from "../../../../assets/client/padlr/img/courtPanelImg4.png";
import topImg from "../../../../assets/client/padlr/img/courtPanelImg3.png";
import paddle from "../../../../assets/client/padlr/img/batIcon.png";

export default function Panel3() {
  return (
    <div
      className="w-screen h-screen flex bg-white"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >

      {/* LEFT SIDE (image from Panel2 shows here) */}
      <div className="w-[20%]" />

      {/* RIGHT SIDE */}
      <div className="w-screen h-full relative px-10 py-10 flex flex-col justify-between">

        {/* TOP SECTION */}
        <div className="relative flex justify-between items-start">

          {/* BIG TITLE */}
          <h1 className="salo text-[80px] md:text-[200px] text-[#8FC4E9] leading-none">
            TYPEFACE
          </h1>

          {/* TOP RIGHT IMAGE */}
          <div className="w-[220px] md:max-w-[370px]">
            <img
              src={topImg}
              alt="court"
              className="w-full object-cover"
            />
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="flex justify-between items-end gap-6">

          {/* LEFT IMAGE CARD */}
          <div className="w-[220px] md:max-w-[370px]">
            <img
              src={delightImg}
              alt="delight"
              className="w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-[300px] text-[14px] md:text-[16px] text-black/70 leading-[140%]">
            The typography system balances bold expression with refined clarity—
            where the primary typeface delivers a strong, modern identity, and
            the secondary typeface ensures versatility and seamless readability
            across all brand touchpoints.
          </div>

          {/* PADDLE ICON */}
          <img
            src={paddle}
            alt="paddle"
            className="w-[120px] md:w-[160px] object-contain"
          />

        </div>
      </div>
    </div>
  );
}