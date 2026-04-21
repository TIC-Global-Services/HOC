import Footer from "../Footer";
import GopalanHero from "../../components/gopalanEnterprises/GopalanHero";
import GopalanFutureSection from "../../components/gopalanEnterprises/GopalanFutureSection";
import GopalanEvolution from "../../components/gopalanEnterprises/GopalanEvolution";
import GopalanWannaKnow from "../../components/gopalanEnterprises/GopalanWannaKnow";
import Navbar from "../../components/Navbar";

const GopalanEnterprises = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      <GopalanHero />
      <GopalanFutureSection />
      <GopalanEvolution />
      <GopalanWannaKnow />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default GopalanEnterprises;
