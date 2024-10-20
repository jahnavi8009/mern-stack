import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import Login from "./components/Login"; 
//import HeroSection from "./components/HeroSection"; 
//import Carousel from "./components/Carousel"; 
import Slide from "./components/Slide";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Slide />
      <Services />
      <About />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
