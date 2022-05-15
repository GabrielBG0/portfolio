import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";


export default function App() {
  return (
    <div className="App">
      <Header />
      <ParallaxProvider>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ParallaxProvider>
      <Footer />
    </div>
  );
}