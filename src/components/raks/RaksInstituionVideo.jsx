import { motion } from "framer-motion";
import video from "../../assets/client/raks/vdo/Raks Animation 1.mp4";


const RaksInstitutionVideo = () => {
  return (
    <>
    {/* Second Video */}
    <section className="w-full min-h-screen relative overflow-hidden">

      <motion.video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

    </section>
    </>
  );
};

export default RaksInstitutionVideo;