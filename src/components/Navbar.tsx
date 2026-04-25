import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Hotel } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Contact', path: '/contact' },
    { name: 'Reservations', path: '/book' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-dark/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Hotel className="w-8 h-8 text-gold" />
          <span className="font-serif text-2xl tracking-widest uppercase text-light">Lumière</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-gold relative py-2",
                location.pathname === link.path ? "text-gold" : "text-light"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                />
              )}
            </Link>
          ))}
          <Link 
            to="/book" 
            className="bg-gold text-dark px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-light transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-white/10 md:hidden p-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest font-medium text-light"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-dark text-center py-4 text-xs uppercase tracking-widest font-bold"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
