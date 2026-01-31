import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AboutUS from "./pages/Aboutus";
import Services from "./pages/Services";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
       <Route path="/services" element={<Services />} />
        {/*  <Route path="/portfolio" element={<Portfolio />} />*/}
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}
