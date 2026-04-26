import QatamaranHero from "../../components/qatamaran/QatamaranHero";
import QataWannaKnow from "../../components/qatamaran/QataWannaKnow";
import QataImageSec from "../../components/qatamaran/QataImageSec";
import QataOwnTheCourt from "../../components/qatamaran/QataOwnTheCourt";
import QataRefinedTailoring from "../../components/qatamaran/qataRefinedTailoring/QataRefinedTailoring";
import QataSaltSilk from "../../components/qatamaran/qataSaltSilk/QataSaltSilk";
import Footer from "../Footer";
import Navbar from "../../components/Navbar";

const Qatamaran = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      <QatamaranHero />
      <QataSaltSilk />
      <QataRefinedTailoring />
      <QataWannaKnow />
      <QataImageSec />
      <QataOwnTheCourt />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Qatamaran;
