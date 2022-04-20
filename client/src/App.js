import { useState, Fragment } from "react";
import "./App.css";
/* import "../node_modules/nes.css/css/nes.css"; */

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="allContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
