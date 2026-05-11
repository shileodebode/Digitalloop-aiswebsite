import { motion } from 'motion/react';
import { CheckCircle2, Clock, Calendar, Users, Mail, Phone, MapPin, Send, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Masterclass() {
  const [timeLeft, setTimeLeft] = useState(
    { days: 12, hours: 14, minutes: 22, seconds: 43 }
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-[0.2em] mb-8"
          >
            Live Online Training
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-authority mb-6 leading-tight max-w-4xl mx-auto">
             How to Leverage AI to <span className="text-secondary italic">Double</span> Your Productivity in 2026.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
            A free 90-minute live session for professionals, entrepreneurs, and students across Africa. Real strategies. Zero jargon.
          </p>

          <div className="flex justify-center gap-4 md:gap-8 mb-16">
            {[
              { label: 'Days', val: timeLeft.days },
              { label: 'Hours', val: timeLeft.hours },
              { label: 'Min', val: timeLeft.minutes },
              { label: 'Sec', val: timeLeft.seconds },
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-2xl md:text-3xl font-black text-authority mb-2 transition-transform hover:scale-105">
                  {t.val.toString().padStart(2, '0')}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content & Form Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-authority mb-8">What You'll Learn</h2>
              <ul className="space-y-6">
                {[
                  "The 3 AI tools that are making junior staff obsolete in 2026.",
                  "How to prompt like an architect, not like a typist.",
                  "Automating your mundane emails, reports, and data analysis tasks.",
                  "The 'AI-First' mental framework for high-level decision making."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-600 font-medium leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-authority mb-8">Who This Is For</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Working Professionals', 'Business Owners', 'Recent Graduates', 'Startup Teams'].map((role, i) => (
                  <div key={i} className="p-4 bg-brand-bg rounded-xl border border-gray-100 flex items-center gap-3">
                    <Zap size={20} className="text-secondary" />
                    <span className="font-bold text-authority">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 h-fit sticky top-28">
            <h3 className="text-2xl font-display font-bold text-authority mb-2">Secure Your Free Seat</h3>
            <p className="text-gray-400 text-sm mb-10">Limited to 500 digital seats for Nigeria/Kenya timezone sync.</p>
            
            <form className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-brand-bg rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-primary transition-colors text-authority" placeholder="e.g. John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-brand-bg rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-primary transition-colors text-authority" placeholder="john@company.com" />
                  </div>
               </div>
               <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">WhatsApp Number</label>
                  <input type="tel" className="w-full bg-brand-bg rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-primary transition-colors text-authority" placeholder="+234..." />
               </div>
               <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Primary Goal</label>
                  <select className="w-full bg-brand-bg rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-primary transition-colors text-authority appearance-none">
                     <option>Automate my workflow</option>
                     <option>Switch to a tech career</option>
                     <option>Build an AI product</option>
                     <option>Corporate upskilling</option>
                  </select>
               </div>
               <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-2 group">
                  Confirm My Attendance <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <p className="text-center text-[10px] text-gray-400">By registering, you agree to receive training reminders via email and WhatsApp.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Instructor Bio */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-gray-100">
             <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <img src="https://i.pravatar.cc/300?u=instructor" alt="Instructor" className="w-full h-full object-cover" />
             </div>
             <div>
                <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Meet Your Instructor</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-authority mb-6">Dr. Shile Odebode</h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8 italic">
                  "Artificial Intelligence is the single greatest opportunity for Africa to leapfrog traditional industrial barriers. My mission is to ensure we have the talent ready to catch that wave."
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-authority/60 font-medium">
                   <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg"><CheckCircle2 size={16} className="text-green-500" /> 10+ Years in Tech</div>
                   <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg"><CheckCircle2 size={16} className="text-green-500" /> 5,000+ Students Trained</div>
                   <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg"><CheckCircle2 size={16} className="text-green-500" /> AI Strategic Advisor</div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function About() {
  return (
    <div className="bg-white">
      {/* Short & Punchy About Page */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <h1 className="text-5xl font-display font-bold text-authority mb-8">Our Belief.</h1>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                 <p>We believe that proximity to innovation shouldn't be defined by geography. In the age of AI, a talented developer in Lagos has the same potential as one in Palo Alto—if they have the right mental models and tools.</p>
                 <p className="font-bold text-authority">Digital Loop is that bridge.</p>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-2xl p-8 aspect-square flex flex-col justify-end">
                 <span className="text-4xl font-display font-black text-primary">2.5k</span>
                 <p className="text-sm font-bold text-authority/60 uppercase">Students</p>
              </div>
              <div className="bg-secondary/5 rounded-2xl p-8 aspect-square flex flex-col justify-end mt-12">
                 <span className="text-4xl font-display font-black text-secondary">50+</span>
                 <p className="text-sm font-bold text-authority/60 uppercase">Projects</p>
              </div>
              <div className="bg-authority/5 rounded-2xl p-8 aspect-square flex flex-col justify-end -mt-12">
                 <span className="text-4xl font-display font-black text-authority">12</span>
                 <p className="text-sm font-bold text-authority/60 uppercase">Partners</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

export function Contact() {
  return (
    <div className="bg-brand-bg py-24 min-h-screen">
       <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
          <div>
             <h1 className="text-5xl font-display font-bold text-authority mb-8">Get in Touch.</h1>
             <p className="text-gray-500 text-lg mb-12">Whether you're a curious individual or a scaling enterprise, our team is ready to talk loop.</p>
             
             <div className="space-y-8">
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={24} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-xl font-bold text-authority">hello@digitalloop.ai</p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary flex-shrink-0">
                      <Phone size={24} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Support</p>
                      <p className="text-xl font-bold text-authority">+234 (0) 800 DIGITAL</p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-authority flex-shrink-0">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Office</p>
                      <p className="text-xl font-bold text-authority">Victoria Island, Lagos</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <input type="text" className="w-full bg-brand-bg rounded-xl px-4 py-4 outline-none focus:ring-2 ring-primary/20" placeholder="Name" />
                   <input type="email" className="w-full bg-brand-bg rounded-xl px-4 py-4 outline-none focus:ring-2 ring-primary/20" placeholder="Email" />
                </div>
                <textarea className="w-full bg-brand-bg rounded-xl px-4 py-4 outline-none focus:ring-2 ring-primary/20 h-40" placeholder="Your Message..."></textarea>
                <button type="submit" className="w-full btn-primary py-5 flex items-center justify-center gap-3">
                   Send Message <Send size={20} />
                </button>
             </form>
          </div>
       </div>
    </div>
  );
}
