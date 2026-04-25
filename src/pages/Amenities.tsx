import { motion } from 'motion/react';
import { Wind, Coffee, Smartphone, Utensils, Waves, Dumbbell, Car, ShieldCheck } from 'lucide-react';

const AMENITIES = [
  {
    title: "Le Spa Lumière",
    description: "A sanctuary of peace in the heart of Paris. Featuring a heated infinity pool, steam rooms, and signature treatments by world-renowned therapists.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Gastronomy",
    description: "Experience culinary excellence at our Michelin-starred restaurant, where seasonal flavors meet avant-garde techniques.",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Wellness Center",
    description: "State-of-the-art fitness equipment and personal training sessions tailored to your individual wellness goals.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Concierge 24/7",
    description: "Our multilingual concierge team is dedicated to fulfilling your every request, from private tours to exclusive event access.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Amenities() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 block">The Experience</span>
        <h1 className="text-5xl md:text-6xl font-serif italic mb-6">Exceptional Amenities</h1>
        <p className="text-sm opacity-60 max-w-2xl mx-auto leading-loose tracking-wide">
          At Lumière, we believe luxury lies in the details. Every service we offer is designed to elevate your stay beyond the ordinary.
        </p>
      </div>

      <div className="flex flex-col gap-32">
        {AMENITIES.map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
          >
            <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-full mb-2">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif">{item.title}</h2>
              <p className="text-sm leading-relaxed tracking-wide text-light/70">
                {item.description}
              </p>
              <div className="mt-4 flex flex-col gap-4">
                 <div className="flex items-center gap-3">
                   <ShieldCheck className="w-4 h-4 text-gold" />
                   <span className="text-[10px] uppercase tracking-widest font-bold">Complimentary for guests</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <Wind className="w-4 h-4 text-gold" />
                   <span className="text-[10px] uppercase tracking-widest font-bold">Priority booking available</span>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
