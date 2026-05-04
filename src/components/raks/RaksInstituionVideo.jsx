import { motion } from "framer-motion";
import video from "../../assets/client/raks/vdo/Raks Animation 1.mp4";

const RaksInstitutionVideo = () => {
  return (
    <section className="w-full relative overflow-hidden">

      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        controls={false}
        preload="auto"
        className="
          w-full 
          h-[30vh]        
          md:absolute 
          md:top-0 
          md:left-0 
          md:w-full 
          md:h-full 
          md:object-cover
          object-cover
        "
      />

      {/* Desktop height */}
      <div className="hidden md:block h-screen" />

    </section>
  );
};

export default RaksInstitutionVideo;