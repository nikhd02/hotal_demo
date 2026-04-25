import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Sparkles } from 'lucide-react';
import { getConciergeResponse } from '../services/concierge';

export default function ConciergeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', content: string }[]>([
    { role: 'model', content: "Bienvenue to Lumière. I am your personal concierge. How may I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));
      
      const response = await getConciergeResponse(userMessage, history);
      setMessages(prev => [...prev, { role: 'model', content: response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "Pardon, I encountered a slight issue. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gold text-dark p-4 rounded-full shadow-2xl hover:bg-light transition-colors z-40 flex items-center gap-2 group"
      >
        <Sparkles className="w-5 h-5 text-dark" />
        <span className="text-[10px] uppercase tracking-widest font-bold pr-2 hidden md:block">Concierge</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 w-80 md:w-96 bg-surface shadow-2xl border border-white/10 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gold p-6 flex justify-between items-center text-dark">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-dark" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Lumière Concierge</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-dark/50 hover:text-dark">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="h-96 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide bg-dark/20"
            >
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <span className="text-[8px] uppercase tracking-widest font-bold mb-1 opacity-30 text-light">
                    {m.role === 'user' ? 'Guest' : 'Concierge'}
                  </span>
                  <div 
                    className={cn(
                      "p-3 text-[11px] leading-relaxed tracking-wide",
                      m.role === 'user' 
                        ? "bg-gold text-dark font-medium" 
                        : "bg-white/5 border border-white/5 shadow-sm text-light"
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex flex-col items-start max-w-[85%] text-light">
                  <span className="text-[8px] uppercase tracking-widest font-bold mb-1 opacity-30 italic">Thinking...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 flex gap-2 bg-surface">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Votre message..."
                className="flex-1 bg-white/5 border-none px-4 py-3 text-xs outline-none focus:ring-1 ring-gold/20 text-light"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gold text-dark p-3 hover:bg-light transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
