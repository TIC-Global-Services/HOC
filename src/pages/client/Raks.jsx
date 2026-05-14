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
// import MobRaksWanna from "../../components/raks/RaksWannaKnow";
import RaksInstaImg from "../../components/raks/RaksInstaImg";
import MobRaksOwnTheCourt from "../../components/raks/mobLayout/mobRaksOwnCourt/MobRaksOwnTheCourt";
import ViewNext from "../../components/ViewNext";

const Raks = () => {
  const location = useLocation();

  return (
    <div key={location.pathname}>
      <Navbar />

      {/* Hero */}
      <div className="md:hidden">
        <MobRaksHero />
      </div>
      <div className="md:block hidden">
        <RaksHero />
      </div>

      <RaksInstitutionVideo />

      {/* Learning */}
      <div className="md:hidden">
        <MobRaksLearn />
      </div>
      <div className="md:block hidden">
        <RaksLearning />
      </div>

      <RaksVideoSec />

      {/*  mobile-only sections grouped in one wrapper */}
      <div className="md:hidden">
        {/* <MobRaksWanna /> */}
        <RaksInstaImg />
        <MobRaksOwnTheCourt />
      </div>

      {/* Desktop section pulled up to close gap after video */}
      <div className="hidden md:block -mt-[3px]">
        <RaksOwnTheCourt />
      </div>

      {/* View Next */}
      <ViewNext activeClient="raks" titleColor="#000085"  />

      <Footer />
    </div>
  );
};

export default Raks;
