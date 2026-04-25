import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with zoom effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "alternate" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-dark/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Hotel Exterior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-light/80 text-[10px] uppercase tracking-[0.4em] font-semibold mb-6 block"
        >
          Welcome to the Pinnacle of Luxury
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-6xl md:text-8xl text-light font-serif italic leading-tight mb-8"
        >
          A Sanctuary <br /> 
          <span className="not-italic text-gold">for the Soul</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link 
            to="/rooms"
            className="group flex items-center gap-3 text-light hover:text-gold transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium border-b border-light/30 group-hover:border-gold pb-1 transition-all">
              Explore Suites
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <div className="hidden md:block w-px h-10 bg-light/20 mx-4" />

          <Link 
            to="/book"
            className="bg-gold text-dark px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-light transition-all hover:scale-105"
          >
            Reservation
          </Link>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-light/10 hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-light/10 hidden lg:block" />
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"
      >
        <span className="text-[8px] uppercase tracking-[0.3em] vertical-rl text-light">Scroll</span>
        <div className="w-[1px] h-10 bg-light" />
      </motion.div>
    </section>
  );
}
