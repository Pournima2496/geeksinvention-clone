import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Navbar from "./layouts/navbar/Navbar";
import Home from "./pages/home/Home";
import Particles from "./components/particles/Particles";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    // <Particles />
  );
}

export default App;
