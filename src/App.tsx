import "tailwindcss";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import { Route, Routes } from "react-router";
import FooterPage from "./components/layout/FooterPage";
import Navbar from "./components/layout/NavbarPage";
import ContactPage from "./components/contact/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
