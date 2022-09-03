import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          {/* <Route path={"gallery"} element={<Gallery />} /> */}
        </Routes>
      </Router>
    </div>
  );
};
