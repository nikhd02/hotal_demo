import { motion } from 'motion/react';
import { useState } from 'react';
import { ROOMS } from '../constants';
import { Calendar, Users, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { format, addDays } from 'date-fns';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [dates, setDates] = useState({
    checkIn: format(new Date(), 'yyyy-MM-dd'),
    checkOut: format(addDays(new Date(), 2), 'yyyy-MM-dd'),
  });
  const [guests, setGuests] = useState(2);

  const room = ROOMS.find(r => r.id === selectedRoom);

  const nights = Math.max(1, Math.ceil((new Date(dates.checkOut).getTime() - new Date(dates.checkIn).getTime()) / (1000 * 60 * 60 * 24)));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-5xl mx-auto"
    >
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 block">Reservation</span>
        <h1 className="text-5xl md:text-6xl font-serif italic mb-10 text-light">Plan Your Stay</h1>
        
        {/* Step Progress */}
        <div className="flex justify-center items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold">
          <span className={step >= 1 ? 'text-gold' : 'text-light/20'}>01. Select Room</span>
          <ChevronRight className="w-3 h-3 text-light/10" />
          <span className={step >= 2 ? 'text-gold' : 'text-light/20'}>02. Stay Details</span>
          <ChevronRight className="w-3 h-3 text-light/10" />
          <span className={step >= 3 ? 'text-gold' : 'text-light/20'}>03. Confirmation</span>
        </div>
      </div>

      <div className="bg-surface border border-white/5 p-8 md:p-12 shadow-2xl">
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((r) => (
              <div 
                key={r.id}
                onClick={() => {
                  setSelectedRoom(r.id);
                  setStep(2);
                }}
                className="group cursor-pointer border border-white/5 p-4 hover:border-gold transition-all"
              >
                <div className="aspect-square overflow-hidden mb-6">
                  <img 
                    src={r.image} 
                    alt={r.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-serif mb-2 text-light">{r.name}</h3>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">${r.price} / Night</span>
              </div>
            ))}
          </motion.div>
        )}

        {step === 2 && room && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                 <h2 className="text-2xl font-serif mb-8 text-light">Stay Information</h2>
                 <div className="flex flex-col gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Check In</label>
                     <div className="relative">
                       <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                       <input 
                         type="date" 
                         value={dates.checkIn}
                         onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
                         className="w-full bg-white/5 border border-white/10 p-4 pl-12 text-xs outline-none focus:border-gold text-light" 
                       />
                     </div>
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Check Out</label>
                     <div className="relative">
                       <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                       <input 
                         type="date" 
                         value={dates.checkOut}
                         onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
                         className="w-full bg-white/5 border border-white/10 p-4 pl-12 text-xs outline-none focus:border-gold text-light" 
                       />
                     </div>
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Guests</label>
                     <div className="relative">
                       <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                       <select 
                         value={guests}
                         onChange={(e) => setGuests(parseInt(e.target.value))}
                         className="w-full bg-white/5 border border-white/10 p-4 pl-12 text-xs outline-none focus:border-gold appearance-none text-light"
                       >
                         {[1, 2, 3, 4, 5].map(n => <option key={n} value={n} className="bg-surface text-light">{n} Guests</option>)}
                       </select>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="bg-white/5 p-8 border border-white/5">
                 <h2 className="text-2xl font-serif mb-8 text-light">Summary</h2>
                 <div className="flex flex-col gap-4 border-b border-white/10 pb-6 mb-6">
                   <div className="flex justify-between items-center text-xs">
                     <span className="opacity-50">Room</span>
                     <span className="font-semibold uppercase tracking-widest text-light">{room.name}</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="opacity-50">Rate</span>
                     <span className="font-semibold text-light">${room.price} / Night</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="opacity-50">Stay</span>
                     <span className="font-semibold text-light">
                       {nights} Nights
                     </span>
                   </div>
                 </div>
                 <div className="flex justify-between items-center mb-8">
                   <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Total</span>
                   <span className="text-3xl font-serif font-bold text-gold">
                     ${room.price * nights}
                   </span>
                 </div>
                 <button 
                  onClick={() => setStep(3)}
                  className="w-full bg-gold text-dark py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-light transition-colors flex items-center justify-center gap-2"
                >
                   Finalize Reservation <ArrowRight className="w-4 h-4" />
                 </button>
               </div>
             </div>
          </motion.div>
        )}

        {step === 3 && room && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-3xl font-serif mb-4 text-light">Reservation Successful</h2>
            <p className="text-sm opacity-60 max-w-md mx-auto mb-10 leading-loose text-light">
              Thank you for choosing Lumière Grand Hotel. A confirmation email has been sent to your address. We look forward to welcoming you soon.
            </p>
            <div className="bg-white/5 border border-white/5 p-6 mb-10 text-left max-w-sm mx-auto">
              <div className="flex justify-between py-2 border-b border-white/10 text-[10px] uppercase tracking-widest">
                <span className="opacity-50">Booking Ref</span>
                <span className="font-bold text-light">#LUM-82931</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10 text-[10px] uppercase tracking-widest">
                <span className="opacity-50">Check In</span>
                <span className="font-bold text-light">{dates.checkIn}</span>
              </div>
              <div className="flex justify-between py-2 text-[10px] uppercase tracking-widest">
                <span className="opacity-50">Room</span>
                <span className="font-bold text-light">{room.name}</span>
              </div>
            </div>
            <button 
              onClick={() => setStep(1)}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold hover:text-light transition-colors"
            >
              Back to Home
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
