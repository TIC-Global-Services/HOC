import Footer from "../Footer";
import GopalanHero from "../../components/gopalanEnterprises/GopalanHero";
import GopalanFutureSection from "../../components/gopalanEnterprises/GopalanFutureSection";
import GopalanEvolution from "../../components/gopalanEnterprises/GopalanEvolution";
import GopalanWannaKnow from "../../components/gopalanEnterprises/GopalanWannaKnow";
import Navbar from "../../components/Navbar";
import MobGopalanHero from "../../components/gopalanEnterprises/mobLayout/MobGopalanHero";
import MobEvolution from "../../components/gopalanEnterprises/mobLayout/MobEvolution";
import MobFuture from "../../components/gopalanEnterprises/mobLayout/MobFuture";


const GopalanEnterprises = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      {/* Mob */}
      <div className="block md:hidden">
      <MobGopalanHero />
      <MobFuture />
      <MobEvolution />
      </div>

      {/* Desktop */}
      <div className="md:block hidden">
      <GopalanHero />
      <GopalanFutureSection />
      <GopalanEvolution />
      </div>

      <GopalanWannaKnow />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default GopalanEnterprises;
