import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import Error from "./pages/Error";
import Navbar from "./layouts/navbar/Navbar";
import ParticleEffect from "./components/particles/ParticleEffect";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Navbar />
        <ParticleEffect />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
