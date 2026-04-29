import video from "../../assets/client/syedBawkher/vdo/Brochure_animation.mp4";

const SyedCraftmanShip = () => {
  return (
    <>
      {/* ─── DESKTOP ─── */}
      <section className="hidden md:block w-full h-screen relative overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </section>

      {/* ─── MOBILE ─── */}
      <section className="block md:hidden w-full h-[30vh] relative overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </section>
    </>
  );
};

export default SyedCraftmanShip;