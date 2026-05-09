import PadlrHero from "../../components/padlr/PadlrHeroSection";
import PadlrMotionVideoSec from "../../components/padlr/PadlrMotionVideoSec";
import OwnTheCourt from "../../components/padlr/OwnTheCourt";
import CourtSky from "../../components/padlr/courtSky/CourtSky";
import GrowthEngine from "../../components/padlr/growthEngine/GrowthEngine";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
import MobGrowthEngine from "../../components/padlr/mobileLayout/growthEngine/MobGrowthEngine";
import MobCourtSky from "../../components/padlr/mobileLayout/courtSky/MobCourtSky";
import MobPadlrHero from "../../components/padlr/mobileLayout/padlrHero.jsx/MobPadlrHero";
import MobWannaKnowMore from "../../components/padlr/WannaKnowMore";
import MobPadlrInstaImg from "../../components/padlr/MobPadlrInstaImg";
import MobOwnTheCourt from "../../components/padlr/mobileLayout/padlrOwnTheCourt/MobOwnTheCourt";
// import PadlrImageSec from "../../components/padlr/PadlrImageSec";
import PadlrVideoSec2 from "../../components/padlr/PadlrVideoSec2";
import ViewNext from "../../components/ViewNext";

const Padlr = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="md:hidden">
        <MobPadlrHero />
      </div>
      <div className="md:block hidden">
        <PadlrHero />
      </div>

      {/* Growth Engine */}
      <div className="hidden md:block">
        <GrowthEngine />
      </div>
      <div className="md:hidden">
        <MobGrowthEngine />
      </div>

      {/* Videos grouped — no gap between them */}
      <div className="flex flex-col">
        <PadlrMotionVideoSec />
        <PadlrVideoSec2 />
      </div>

      {/* Court Sky */}
      <div className="hidden md:block">
        <CourtSky />
      </div>

      {/* All mobile-only sections in ONE wrapper */}
      <div className="md:hidden">
        <MobCourtSky />
        <MobWannaKnowMore />
        <MobPadlrInstaImg />
        <MobOwnTheCourt />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <OwnTheCourt />
      </div>

      <ViewNext
        activeClient="padlr"
        titleColor="#8FC4E9"
        heading="VIEW NEXT?"
      />

      <Footer />
    </>
  );
};

export default Padlr;
