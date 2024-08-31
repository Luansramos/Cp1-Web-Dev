import React from "react";
import Home from "./pages/Home";
import Header from "./componentes/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
