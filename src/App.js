import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Home from "./components/Home";
import Contact from "./components/contact";
import "./App.css";
import User from "./components/User";
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="user/*" element={<User />} />
      </Routes>
    </div>
  );
}
 
export default App;