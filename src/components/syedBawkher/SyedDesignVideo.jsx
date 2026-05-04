import { motion } from "framer-motion";
import video from "../../assets/client/syedBawkher/vdo/SB Animation 1.mp4";

const SyedDesignVideo = () => {
  return (
    <>
      {/* First Video */}
      <section className="w-full h-auto md:min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          controls={false}
          preload="auto"
          className="w-full max-h-[80vh] object-contain"
        />
      </section>
    </>
  );
};

export default SyedDesignVideo;
