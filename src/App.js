import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}