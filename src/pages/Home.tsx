import { motion } from 'motion/react';
import Hero from '../components/Hero';
import { ROOMS } from '../constants';
import { ArrowRight, Star, Wind, Wifi, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <Hero />

      {/* Feature Section: The Art of Living */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" 
                alt="Hotel Dining" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 bg-gold p-12 hidden lg:block">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-dark">Since 1924</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A Legacy of <br />
              <span className="italic">Timeless Refinement</span>
            </h2>
            <p className="text-sm leading-loose tracking-wide opacity-70">
              Lumière is more than a hotel; it is a testament to the Parisian art of living. Located in the heart of the Golden Triangle, we offer an intimate sanctuary where modern luxury meets historical grandeur. Our dedicated staff is here to anticipate your every desire, ensuring your stay is nothing short of extraordinary.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div className="flex flex-col gap-2">
                <span className="font-serif text-3xl">120+</span>
                <span className="text-[8px] uppercase tracking-widest opacity-50">Exquisite Suites</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-serif text-3xl">MICHELIN</span>
                <span className="text-[8px] uppercase tracking-widest opacity-50">Dining Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Suites Marquee/Grid */}
      <section className="bg-surface text-light py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 block">Accommodations</span>
            <h2 className="text-4xl md:text-5xl font-serif">Curated Suites</h2>
          </div>
          <Link to="/rooms" className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-gold transition-colors flex items-center gap-2">
            View All Rooms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/10">
          {ROOMS.map((room) => (
            <motion.div 
              key={room.id}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-10 flex flex-col gap-6"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-serif">{room.name}</h3>
                <span className="text-gold font-serif">${room.price}</span>
              </div>
              <p className="text-[11px] leading-relaxed opacity-50 line-clamp-2">
                {room.description}
              </p>
              <div className="flex gap-4 opacity-30 mt-auto">
                <Wifi className="w-4 h-4" />
                <Wind className="w-4 h-4" />
                <Coffee className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 block">Services</span>
          <h2 className="text-4xl md:text-5xl font-serif">A World of Indulgence</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
           {[
             { name: 'Wellness Spa', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000' },
             { name: 'Rooftop Bar', img: 'https://images.unsplash.com/photo-1541512416146-3cf58d6b27cc?auto=format&fit=crop&q=80&w=1000' },
             { name: 'Fitness Center', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000' },
             { name: 'Valet Service', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000' }
           ].map((item, idx) => (
             <div key={idx} className="relative aspect-square overflow-hidden group">
               <img 
                 src={item.img} 
                 alt={item.name} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-all flex items-center justify-center">
                 <span className="text-light text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                   {item.name}
                 </span>
               </div>
             </div>
           ))}
        </div>
      </section>
    </motion.div>
  );
}
