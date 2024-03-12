import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage.jsx";
import ContactPage from "./components/Contact Us/ContactForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeComponent, setActiveComponent] = useState("/");

  return (
    <Router>
      <NavBar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;