import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import PartnerWithUs from "./pages/PartnerWithUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
