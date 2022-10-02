import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/aboutus/AboutUs";
import Availability from "./pages/availability/Availability";
import ContactUs from "./pages/contactus/ContactUs";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import Lineage from "./pages/lineage/Lineage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="availability" element={<Availability />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="lineage" element={<Lineage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
