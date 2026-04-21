import Footer from "../Footer";
import SyedHero from "../../components/syedBawkher/SyedHero";
import SyedSignatureCraft from "../../components/syedBawkher/SyedSignatureCraft";
import SyedWannaKnow from "../../components/syedBawkher/SyedWannaKnow";
import SyedOwnTheCourt from "../../components/syedBawkher/SyedOwnTheCourt";
import SyedCraftmanShip from "../../components/syedBawkher/SyedCraftmanShip";
import SyedDesignVideo from "../../components/syedBawkher/SyedDesignVideo";
import SyedTailorHeritage from "../../components/syedBawkher/SyedTailorHeritage";
import Navbar from "../../components/Navbar";

const SyedBawkher = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      <SyedHero />
      <SyedSignatureCraft />
      <SyedDesignVideo />
      <SyedTailorHeritage />
      <SyedWannaKnow />
      <SyedCraftmanShip />
      <SyedOwnTheCourt />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default SyedBawkher;
