import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Inp from "./Components/Inp";
import Navi from "./Components/Navi";
import { useState } from "react";
import Homepg from "./pages/Homepg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalcDis from "./pages/CalcDis";
import Contact from "./pages/Contact";

const App = () => {
  const [opt, setOpt] = useState(null);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navi />
          <Routes>
            <Route path="/" element={<Homepg />} />
            <Route path="/calcDiscount" element={<CalcDis />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
