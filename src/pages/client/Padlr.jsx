import PadlrHero from "../../components/padlr/PadlrHeroSection";
import PadlrMotionVideoSec from "../../components/padlr/PadlrMotionVideoSec";
import WannaKnowMore from "../../components/padlr/WannaKnowMore";
import PadlrImageSec from "../../components/padlr/PadlrImageSec";
import OwnTheCourt from "../../components/padlr/OwnTheCourt";
import CourtSky from "../../components/padlr/courtSky/CourtSky";
import GrowthEngine from "../../components/padlr/growthEngine/GrowthEngine";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
import MobGrowthEngine from "../../components/padlr/mobileLayout/growthEngine/MobGrowthEngine";
import MobCourtSky from "../../components/padlr/mobileLayout/courtSky/MobCourtSky";
import PadlrVideoSec2 from "../../components/padlr/PadlrVideoSec2";

const Padlr = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      <PadlrHero />

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

      <WannaKnowMore />
      <PadlrImageSec />
      <OwnTheCourt />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Padlr;
