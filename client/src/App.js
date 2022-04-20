import { useState, Fragment } from "react";
import "./App.css";
/* import "../node_modules/nes.css/css/nes.css"; */

import NavBar from "./components/NavBar/NavBar.jsx"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="allContainer">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
