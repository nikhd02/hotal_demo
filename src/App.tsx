import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import ConciergeChat from './components/ConciergeChat';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark text-light">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Booking />} />
            </Routes>
          </AnimatePresence>
        </main>
        <ConciergeChat />
        <Footer />
      </div>
    </Router>
  );
}
