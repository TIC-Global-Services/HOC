import PadlrHero from "../../components/padlr/PadlrHeroSection";
import PadlrMotionVideoSec from "../../components/padlr/PadlrMotionVideoSec";
import OwnTheCourt from "../../components/padlr/OwnTheCourt";
import CourtSky from "../../components/padlr/courtSky/CourtSky";
import GrowthEngine from "../../components/padlr/growthEngine/GrowthEngine";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
import MobGrowthEngine from "../../components/padlr/mobileLayout/growthEngine/MobGrowthEngine";
import MobCourtSky from "../../components/padlr/mobileLayout/courtSky/MobCourtSky";
import PadlrVideoSec2 from "../../components/padlr/PadlrVideoSec2";
import MobPadlrHero from "../../components/padlr/mobileLayout/padlrHero.jsx/MobPadlrHero";
import MobWannaKnowMore from "../../components/padlr/WannaKnowMore";
import MobPadlrInstaImg from "../../components/padlr/MobPadlrInstaImg";
// import PadlrImageSec from "../../components/padlr/PadlrImageSec";

const Padlr = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      {/* Mob */}
      <div className="md:hidden">
        <MobPadlrHero />
      </div>

      {/* Desktop */}
      <div className="md:block hidden">
        <PadlrHero />
      </div>

      <div className="hidden md:block">
        <GrowthEngine />
      </div>
      <div className="md:hidden">
        <MobGrowthEngine />
      </div>

      <PadlrMotionVideoSec />
      <PadlrVideoSec2 />

      <div className="hidden md:block">
        <CourtSky />
      </div>
      <div className="md:hidden">
        <MobCourtSky />
      </div>

      <div className="md:hidden block">
        <MobWannaKnowMore />
      </div>

      <div className="md:hidden block">
      <MobPadlrInstaImg />
      </div>
      <OwnTheCourt />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Padlr;
