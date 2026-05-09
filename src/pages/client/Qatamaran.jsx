import QatamaranHero from "../../components/qatamaran/QatamaranHero";
import QataWannaKnow from "../../components/qatamaran/QataWannaKnow";
import QataImageSec from "../../components/qatamaran/QataImageSec";
import QataRefinedTailoring from "../../components/qatamaran/qataRefinedTailoring/QataRefinedTailoring";
import QataSaltSilk from "../../components/qatamaran/qataSaltSilk/QataSaltSilk";
import Footer from "../Footer";
import Navbar from "../../components/Navbar";
import MobQataSalt from "../../components/qatamaran/mobLayout/qataSaltSilk/MobQataSalt";
import MobQataHero from "../../components/qatamaran/mobLayout/mobQataHero.jsx/MobQataHero";
import MobQataRefined from "../../components/qatamaran/mobLayout/qataRefinedTailoring/MobQataRefined";
import MobQataOwnTheCourt from "../../components/qatamaran/mobLayout/mobQataOwnCourt/MobQataOwnTheCourt";
import QataCoastal from "../../components/qatamaran/QataCoastal";
import ViewNext from "../../components/ViewNext";

const Qatamaran = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      {/* Mob */}
      <div className="md:hidden">
        <MobQataHero />
      </div>

      {/* Desktop */}
      <div className="md:block hidden">
        <QatamaranHero />
      </div>
      {/* MobileLayout */}
      <div className="md:hidden">
        <MobQataSalt />
        <MobQataRefined />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <QataSaltSilk />
        <QataRefinedTailoring />
      </div>
      <QataWannaKnow />
      <QataImageSec />

      {/* Mobile */}

      <div className="md:hidden">
        <MobQataOwnTheCourt />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <QataCoastal />
      </div>

      {/* View Next */}
      <ViewNext
        activeClient="qatamaran"
        titleColor="#1E382D"
        heading="VIEW NEXT?"
      />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Qatamaran;
