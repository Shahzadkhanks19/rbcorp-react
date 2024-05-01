import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Beyonist from "./Pages/Beyonist/Beyonist";
import Finance from "./Pages/Finance/Finance";
import Charity from "./Pages/Charity/Charity";
import Service from "./Pages/Service/Service";
import Buffet from "./Pages/Buffet/Buffet";
import Contact from "./Pages/Contact/Contact";
import Career from "./Pages/Career/Career";
import Blog from "./Pages/Blog/Blog";
import Gallery from "./Pages/Gallery/Gallery";
import Careerform from "./Pages/Careerform/Careerform";
import SigninSignup from "./Pages/SigninSignup/SigninSignup";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/beyonist" element={<Beyonist />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/service" element={<Service />} />
            <Route path="/buffet" element={<Buffet />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/career" element={<Career />} />
            <Route path="/careerform" element={<Careerform />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<SigninSignup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
