import PadlrHero from "../../components/padlr/PadlrHeroSection";
import PadlrMotionVideoSec from "../../components/padlr/PadlrMotionVideoSec";
import WannaKnowMore from "../../components/padlr/WannaKnowMore";
import PadlrImageSec from "../../components/padlr/PadlrImageSec";
import OwnTheCourt from "../../components/padlr/OwnTheCourt";
import CourtSky from "../../components/padlr/courtSky/CourtSky";
import GrowthEngine from "../../components/padlr/growthEngine/GrowthEngine";
import Navbar from '../../components/Navbar'
import Footer from "../Footer";

const Padlr = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      <PadlrHero />
      <GrowthEngine />
      <PadlrMotionVideoSec />
      <CourtSky />
      <WannaKnowMore />
      <PadlrImageSec />
      <OwnTheCourt />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Padlr;
