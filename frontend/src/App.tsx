import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import PartnerWithUs from "./pages/PartnerWithUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
