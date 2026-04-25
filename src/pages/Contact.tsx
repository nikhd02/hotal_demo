import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 block">Get In Touch</span>
        <h1 className="text-5xl md:text-6xl font-serif italic text-light">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info */}
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-2xl font-serif mb-8 border-b border-white/10 pb-4 text-light">Our Location</h2>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6 text-light">
                <div className="w-10 h-10 shrink-0 bg-gold text-dark flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Address</h4>
                  <p className="text-sm opacity-70 leading-loose">
                    124 Avenue de l'Élégance,<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 text-light">
                <div className="w-10 h-10 shrink-0 bg-gold text-dark flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Phone</h4>
                  <p className="text-sm opacity-70">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex gap-6 text-light">
                <div className="w-10 h-10 shrink-0 bg-gold text-dark flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Email</h4>
                  <p className="text-sm opacity-70">concierge@lumieregrand.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface p-10 border border-white/5 text-light">
            <h3 className="font-serif text-xl mb-6">Concierge Hours</h3>
            <div className="flex justify-between text-xs tracking-widest mb-4">
              <span>MONDAY - SUNDAY</span>
              <span className="font-bold text-gold">24 HOURS</span>
            </div>
            <div className="flex justify-between text-xs tracking-widest opacity-50">
              <span>ADMINISTRATION</span>
              <span>09:00 - 18:00</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface p-12 border border-white/5 shadow-xl">
          <h2 className="text-2xl font-serif mb-8 text-light">Send a Message</h2>
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8 text-light">
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">First Name</label>
                <input type="text" className="bg-transparent border-b border-white/20 py-2 text-xs outline-none focus:border-gold transition-colors text-light" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Last Name</label>
                <input type="text" className="bg-transparent border-b border-white/20 py-2 text-xs outline-none focus:border-gold transition-colors text-light" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 text-light">
              <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Email Address</label>
              <input type="email" className="bg-transparent border-b border-white/20 py-2 text-xs outline-none focus:border-gold transition-colors text-light" />
            </div>

            <div className="flex flex-col gap-2 text-light">
              <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Subject</label>
              <select className="bg-transparent border-b border-white/20 py-2 text-xs outline-none focus:border-gold transition-colors appearance-none text-light">
                <option className="bg-surface">General Inquiry</option>
                <option className="bg-surface">Room Reservation</option>
                <option className="bg-surface">Spa Appointment</option>
                <option className="bg-surface">Event Planning</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 text-light">
              <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">Message</label>
              <textarea rows={4} className="bg-transparent border-b border-white/20 py-2 text-xs outline-none focus:border-gold transition-colors resize-none text-light"></textarea>
            </div>

            <button className="bg-gold text-dark py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-light transition-all mt-4 flex items-center justify-center gap-3">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
