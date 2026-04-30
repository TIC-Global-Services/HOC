import Footer from "../Footer";
import RaksHero from "../../components/raks/RaksHero";
import RaksInstitutionVideo from "../../components/raks/RaksInstituionVideo";
import RaksLearning from "../../components/raks/raksLearn/RaksLearning";
import RaksOwnTheCourt from "../../components/raks/RaksOwnTheCourt";
import RaksVideoSec from "../../components/raks/RaksVideoSec";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import MobRaksLearn from "../../components/raks/mobRaksLearn/MobRaksLearn";
import MobRaksHero from "../../components/raks/mobLayout/mobRaksHero/MobRaksHero";
import MobRaksWanna from "../../components/raks/RaksWannaKnow";
import RaksInstaImg from "../../components/raks/RaksInstaImg";
import MobRaksOwnTheCourt from "../../components/raks/mobLayout/mobRaksOwnCourt/MobRaksOwnTheCourt";

const Raks = () => {
  const location = useLocation();

  return (
    <div key={location.pathname}>
      <Navbar />
      {/* Mob */}
      <div className="md:hidden">
        <MobRaksHero />
      </div>

      {/* Desktop */}
      <div className="md:block hidden">
        <RaksHero />
      </div>
      <RaksInstitutionVideo />
      {/* Mob Layout */}
      <div className="md:hidden">
        <MobRaksLearn />
      </div>
      {/* Desktop Layout */}
      <div className="md:block hidden">
        <RaksLearning />
      </div>
      <RaksVideoSec />

      <div className="md:hidden block">
        <MobRaksWanna />
      </div>

      <div className="md:hidden">
      <RaksInstaImg />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <MobRaksOwnTheCourt />
      </div>
      {/* Desktop */}
      <div className="hidden md:block">
      <RaksOwnTheCourt />
      </div>
      <Footer />
    </div>
  );
};

export default Raks;
