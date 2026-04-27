import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Landing from "./pages/Landing";
import Ethos from "./pages/Ethos";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import ClientPage from "./pages/ClientPage";
import Padlr from "./pages/client/Padlr";
import Raks from "./pages/client/Raks";
import SyedBawkher from "./pages/client/SyedBawkher";
import GopalanEnterprises from "./pages/client/GopalanEnterprises";
import Qatamaran from "./pages/client/Qatamaran";

/* SCROLL RESET */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [pathname]);

  return null;
}

/* BACK BUTTON REFRESH */
function BackRefreshHandler() {
  useEffect(() => {
    const handlePopState = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill(true));
      gsap.killTweensOf("*");

      window.location.reload();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}

/* INNER APP */
function AppContent() {
  return (
    <>
      <ScrollToTop />
      <BackRefreshHandler />

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/client" element={<ClientPage />} />
        <Route path="/client/qatamaran" element={<Qatamaran />} />
        <Route path="/client/padlr" element={<Padlr />} />
        <Route
          path="/client/gopalan-enterprises"
          element={<GopalanEnterprises />}
        />
        <Route path="/client/syed" element={<SyedBawkher />} />
        <Route path="/client/raks" element={<Raks />} />

        <Route path="/ethos" element={<Ethos />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

/* MAIN APP */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;