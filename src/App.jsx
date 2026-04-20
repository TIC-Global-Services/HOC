import React ,{useEffect}from "react";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
// import Home from "./pages/Home";
// import CursorHover from "./utils/Hover";
import Ethos from "./pages/Ethos";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import ClientPage from "./pages/ClientPage";
import Qatamaran from "./pages/client/Qatamaran";
import Padlr from "./pages/client/Padlr";
import GopalanEnterprises from "./pages/client/GopalanEnterprises";
import SyedBawkher from "./pages/client/SyedBawkher";
import Raks from "./pages/client/Raks";
 
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}
function App() {
  return (
    <Router>
      {/* Global CursorHover component */}
      {/*  <CursorHover />*/}
      <ScrollToTop />
      <Routes> 
        <Route path="/" element={<Landing />} />

        {/* Clients Routing */}
        <Route path='/client' element={<ClientPage />} />
        <Route path="/client/qatamaran" element={<Qatamaran />} />
        <Route path="/client/padlr" element={<Padlr />} />
        <Route path="/client/gopalan-enterprises" element={<GopalanEnterprises />} />
        <Route path="/client/syed" element={<SyedBawkher />} />
        <Route path="/client/raks" element={<Raks />} />


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
