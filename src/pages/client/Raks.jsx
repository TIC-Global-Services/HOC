import Footer from "../Footer";
import RaksHero from "../../components/raks/RaksHero";
import RaksInstitutionVideo from "../../components/raks/RaksInstituionVideo";
import RaksLearning from "../../components/raks/raksLearn/RaksLearning";
import RaksOwnTheCourt from "../../components/raks/RaksOwnTheCourt";
import RaksVideoSec from "../../components/raks/RaksVideoSec";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
// import RaksWannaKnow from "../../components/raks/RaksWannaKnow";
// import RaksInstaImg from "../../components/raks/RaksInstaImg";

const Raks = () => {
  const location = useLocation();

  return (
    <div key={location.pathname}>
      <Navbar />
      <RaksHero />
      <RaksInstitutionVideo />
      <RaksLearning />
      <RaksVideoSec />
    {/*  <RaksWannaKnow /> */}
      {/* <RaksInstaImg /> */}
      <RaksOwnTheCourt />
      <Footer />
    </div>
  );
};

export default Raks;
