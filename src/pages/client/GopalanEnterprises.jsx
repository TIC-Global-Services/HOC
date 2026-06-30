import Footer from "../Footer";
import GopalanHero from "../../components/gopalanEnterprises/GopalanHero";
import Navbar from "../../components/Navbar";
import MobGopalanHero from "../../components/gopalanEnterprises/mobLayout/MobGopalanHero";
import GopalanGroupVideo from "../../components/gopalanEnterprises/GopalanGroupVideo";
import GopalanLegacy from "../../components/gopalanEnterprises/gopalanLegacy/GopalanLegacy";
import GopalanModernLegacy from "../../components/gopalanEnterprises/GopalanModernLegacy";
import MobGopalanLegacy from "../../components/gopalanEnterprises/mobGopalanLegacy/MobGopalanLegacy";
import MobModernLegacy from "../../components/gopalanEnterprises/mobLayout/MobModernLegacy";
import ViewNext from "../../components/ViewNext";

const GopalanEnterprises = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* MOBILE HERO */}
      <div className="block lg:hidden">
        <MobGopalanHero />
      </div>

      {/* DESKTOP HERO */}
      <div className="hidden lg:block">
        <GopalanHero />
      </div>

      {/* BOTH MOBILE + DESKTOP */}
      <GopalanGroupVideo />

      {/* Mob */}

      <div className="block lg:hidden">
        <MobGopalanLegacy />
      </div>

      {/* DESKTOP ONLY */}
      <div className="hidden lg:block">
        <GopalanLegacy />
        <GopalanModernLegacy />
      </div>

      {/* Mobile */}
      <div className="block lg:hidden">
        <MobModernLegacy />
      </div>

      {/* View Next */}
      <ViewNext
        activeClient="gopalan"
        titleColor="#E96428"
      />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default GopalanEnterprises;
