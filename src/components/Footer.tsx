import { Smartphone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-8 group">
            <span className="font-serif text-3xl tracking-widest uppercase">Lumière</span>
          </Link>
          <p className="text-xs text-light/60 leading-loose tracking-wider font-light max-w-xs">
            Experience the art of living in our meticulously crafted spaces. Where every detail tells a story of elegance and every moment is a memory in the making.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-8">Navigation</h4>
          <ul className="flex flex-col gap-4">
            {['Home', 'Rooms', 'Dining', 'Spa', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="text-xs uppercase tracking-widest font-medium hover:text-gold transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-8">Contact Us</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span className="text-[11px] leading-relaxed tracking-wider">
                124 Avenue de l'Élégance, <br />
                75008 Paris, France
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Smartphone className="w-4 h-4 text-gold shrink-0" />
              <span className="text-[11px] tracking-wider">+33 1 23 45 67 89</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span className="text-[11px] tracking-wider">concierge@lumieregrand.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-8">Follow Our Story</h4>
          <div className="flex gap-6 mb-10">
            <Instagram className="w-5 h-5 hover:text-gold cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 hover:text-gold cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-gold cursor-pointer transition-colors" />
          </div>
          <div className="border border-white/20 p-6 flex flex-col gap-4">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold italic">Subscribe to Newsletter</span>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-light/30 flex-1 py-1 text-[10px] outline-none focus:border-gold transition-all"
              />
              <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Join</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[9px] uppercase tracking-[0.4em] text-light/40 opacity-70">
          &copy; 2026 Lumière Grand Hotel. All Rights Reserved.
        </span>
        <div className="flex gap-10">
          <span className="text-[9px] uppercase tracking-[0.4em] text-light/40 hover:text-gold cursor-pointer">Privacy Policy</span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-light/40 hover:text-gold cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
