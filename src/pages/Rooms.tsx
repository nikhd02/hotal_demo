import { motion } from 'motion/react';
import { useState } from 'react';
import { ROOMS } from '../constants';
import { Link } from 'react-router-dom';
import { Users, Maximize, Check } from 'lucide-react';

export default function Rooms() {
  const [filter, setFilter] = useState('All');

  const filteredRooms = filter === 'All' 
    ? ROOMS 
    : ROOMS.filter(r => r.type === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 block">The Collection</span>
        <h1 className="text-5xl md:text-6xl font-serif italic mb-10">Rooms & Suites</h1>
        
        <div className="flex justify-center gap-8 border-b border-white/10 pb-4">
          {['All', 'Classic', 'Suite', 'Prestige'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative py-2 ${filter === cat ? 'text-gold' : 'text-light/40'}`}
            >
              {cat}
              {filter === cat && <motion.div layoutId="filter-underline" className="absolute bottom-0 left-0 w-full h-px bg-gold" />}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-24">
        {filteredRooms.map((room, idx) => (
          <motion.div 
            key={room.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="w-full md:w-3/5 aspect-[16/10] overflow-hidden">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="w-full md:w-2/5 flex flex-col gap-6">
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-bold">{room.type} Collection</span>
              <h2 className="text-3xl md:text-4xl font-serif">{room.name}</h2>
              <p className="text-sm leading-loose tracking-wide opacity-70">
                {room.description}
              </p>
              
              <div className="flex gap-10 border-y border-white/10 py-6">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gold" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">{room.capacity} Guests</span>
                </div>
                <div className="flex items-center gap-3">
                  <Maximize className="w-4 h-4 text-gold" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">{room.size}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {room.amenities.slice(0, 4).map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-gold" />
                    <span className="text-[10px] uppercase tracking-wider opacity-60 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest opacity-40 block mb-1">Starting from</span>
                  <span className="text-3xl font-serif">${room.price}</span>
                  <span className="text-[10px] opacity-40 ml-2 italic">/ night</span>
                </div>
                <Link 
                  to="/book" 
                  className="bg-gold text-dark px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-light transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
