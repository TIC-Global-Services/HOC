import Footer from "../Footer";
import RaksHero from "../../components/raks/RaksHero";
import RaksInstitutionVideo from "../../components/raks/RaksInstituionVideo";
import RaksLearning from "../../components/raks/RaksLearning";
import RaksOwnTheCourt from "../../components/raks/RaksOwnTheCourt";
import RaksVideoSec from "../../components/raks/RaksVideoSec";
import RaksWannaKnow from "../../components/raks/RaksWannaKnow";
import RaksInstaImg from "../../components/raks/RaksInstaImg";
import Navbar from "../../components/Navbar";

const Raks = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      <RaksHero />
      <RaksInstitutionVideo />
      <RaksLearning />
      <RaksVideoSec />
      <RaksWannaKnow />
      <RaksInstaImg />
      <RaksOwnTheCourt />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Raks;
