import Footer from "../Footer";
import SyedHero from "../../components/syedBawkher/SyedHero";
import SyedSignatureCraft from "../../components/syedBawkher/SyedSignatureCraft";
import SyedWannaKnow from "../../components/syedBawkher/SyedWannaKnow";
import SyedOwnTheCourt from "../../components/syedBawkher/SyedOwnTheCourt";
import SyedCraftmanShip from "../../components/syedBawkher/SyedCraftmanShip";
import SyedDesignVideo from "../../components/syedBawkher/SyedDesignVideo";
import SyedTailorHeritage from "../../components/syedBawkher/SyedTailorHeritage";
import Navbar from "../../components/Navbar";
import MobSyedSignature from "../../components/syedBawkher/mobSyedLayout/MobSyedSignature";
import MobSyedHero from "../../components/syedBawkher/mobLayout/mobSyedHero/MobSyedHero";

const SyedBawkher = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      {/* Mob */}
      <div className="md:hidden">
      <MobSyedHero />
      </div>

      {/* Desktop */}
      <div className="md:block hidden">
      <SyedHero />
      </div>
      {/* Mob */}
      <div className="md:hidden">
      <MobSyedSignature />
      </div>

      {/* Desktop */}
      <div className="md:block hidden">
      <SyedSignatureCraft />
      </div>
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
