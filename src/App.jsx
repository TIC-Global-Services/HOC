import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing";
import Ethos from "./pages/Ethos";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import ClientPage from "./pages/ClientPage";

import { ScrollTrigger } from "gsap/ScrollTrigger";

/* SCROLL RESET */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill(true));
    window.scrollTo(0, 0);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Landing />} />

        {/* CLIENT SLUG ROUTING */}
        <Route path="/client" element={<ClientPage />} />
        <Route path="/client/:slug" element={<ClientPage />} />

        {/* OTHER PAGES */}
        <Route path="/Ethos" element={<Ethos />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
