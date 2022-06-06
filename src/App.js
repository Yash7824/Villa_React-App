import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Room from "./Components/Room";
import Footer from "./Components/Footer";
import Activities from "./Components/Activities";
import Amenities from "./Components/Amenities";
import Reviews from "./Components/Reviews";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import BookNow from "./Components/BookNow";




function App() {
  return (
    <>
      <Router>
        <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={(<Room />)} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="/Amenities" element={<Amenities />} />
      <Route path="/Reviews" element={<Reviews />} />
      {/* <Route path="/About" element={<About />} /> */}
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Booknow" element={<BookNow />} />
      </Routes>
      <Footer />
      </Router>

      

      
    </>
  );
}

export default App;



