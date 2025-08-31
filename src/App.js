import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Internship from "./components/Internship";
import Verification from "./components/Verification";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Policies from "./components/Policies";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import InternshipForm from "./components/InternshipForm";   
import ScrollToTop from "./components/ScrollToTop"; // ✅ new helper
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ensures top scroll on route change */}

      <div className="App">
        <Navbar />

        <Routes>
          {/* Default home page with all sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Internship />
                <Contact />
              </>
            }
          />

          {/* Separate pages */}
          <Route path="/home" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/internships" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/policies" element={<Policies />} />
           <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
           <Route path="/terms" element={<TermsAndConditions />} />
           <Route path="/apply" element={<InternshipForm />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
