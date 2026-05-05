import video from "../../assets/client/padlr/vdo/Padlr_Animation1.mp4";

const PadlrMotionVideoSec = () => {
  return (
    <section className="w-full h-screen md:h-screen bg-white relative overflow-hidden">

      {/* VIDEO */}
      <video
        src={video}
        autoPlay
        loop
        muted
        controls={false}
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="
        absolute inset-0
        w-full h-full
        object-contain scale-105 md:object-contain md:scale-140
        "
      />

    </section>
  );
};

export default PadlrMotionVideoSec;