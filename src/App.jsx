import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

import About from "./pages/About";
import ServicesPage from "./pages/Services";



function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />

    </>
  );
}
