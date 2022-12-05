import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./sections/Navigation/Navigation";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route element={<Home />} exact path="/" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
