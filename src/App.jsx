import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import Navbar from "./layouts/navbar/Navbar";
import ParticleEffect from "./components/particles/ParticleEffect";
import Loading from "./layouts/loading/Loading";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <BrowserRouter>
            <Navbar />
            <ParticleEffect />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
