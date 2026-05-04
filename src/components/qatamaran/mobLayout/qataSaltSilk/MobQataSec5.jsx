import centerVideo from "../../../../assets/client/qatamaran/Qatamaran_HOC_Website.mov";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobQataSec5 = () => {
  return (
    <section className="w-full"
    style={{ backgroundImage: `url(${grid})` }}>

      {/* VIDEO */}
      <div className="w-full h-[40vh] overflow-hidden">
        <video
          src={centerVideo}
          autoPlay
          loop
          controls={false}
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* HEADING */}
      <div className="w-full flex items-center justify-center px-5 py-12">
        <h1 className="salo uppercase text-start text-[#1E382D] text-[50px] leading-[90%]">
          Tidal <br /> Salt <br /> Stitch
        </h1>
      </div>

    </section>
  );
};

export default MobQataSec5;