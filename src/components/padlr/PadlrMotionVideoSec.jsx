import video from "../../assets/client/padlr/vdo/Padlr_Animation1.mp4";

const PadlrMotionVideoSec = () => {
  return (
    <section className="w-full h-screen md:h-screen relative overflow-hidden">

      {/* VIDEO */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
          absolute inset-0
          w-full h-full
         object-contain scale-105 md:scale-0 md:object-contain
        "
      />

    </section>
  );
};

export default PadlrMotionVideoSec;