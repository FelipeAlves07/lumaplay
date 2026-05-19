import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Benefits from "./pages/Benefits";
import Testimonials from "./pages/Testimonials";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/conheca" element={<About />} />
          <Route path="/planos" element={<Plans />} />
          <Route path="/beneficios" element={<Benefits />} />
          <Route path="/avaliacoes" element={<Testimonials />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}