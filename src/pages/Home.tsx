import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Star, Zap, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full text-secondary text-sm font-semibold mb-6">
                <Zap size={14} className="fill-current" />
                <span>Empowering the Next Generation of African AI Talent</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-authority leading-[1.1] mb-6">
                Master the Future of <span className="text-primary italic">Artificial</span> <span className="text-secondary">Intelligence</span>.
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
                Join Digital Loop to bridge the gap between technical knowledge and real-world AI applications. Practical training, expert consulting, and a thriving community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/academy" className="btn-primary px-8 py-4 flex items-center justify-center gap-2 group">
                  Explore AI Academy <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/masterclass" className="btn-secondary px-8 py-4 flex items-center justify-center gap-2 group">
                  Free Masterclass <Play size={20} className="group-hover:scale-110 transition-transform" />
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200">
                      <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Student" className="w-full h-full rounded-full" />
                    </div>
                  ))}
                </div>
                <p>Join <span className="font-bold text-authority">2,500+ professionals</span> already learning</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-bg aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center">
                 {/* Imagine a high-quality African professional using AI tools */}
                 <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                  alt="AI Education in Africa"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-authority/40 to-transparent"></div>
              </div>
              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[240px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-bold text-authority">Verified Outcome</span>
                </div>
                <p className="text-xs text-gray-500">92% of alumni secure high-paying remote roles within 4 months.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-brand-bg border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale brightness-0">
             {/* Logo Placeholders */}
             <div className="font-display font-black text-2xl">MTN</div>
             <div className="font-display font-black text-2xl">FLUTTERWAVE</div>
             <div className="font-display font-black text-2xl">ACCESS</div>
             <div className="font-display font-black text-2xl">ANDELA</div>
          </div>
        </div>
      </section>

      {/* The Shift Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-authority mb-6">The Global AI Shift is Here</h2>
            <p className="text-lg text-gray-600">The world is changing. Digital Loop ensures you stay ahead by turning AI from a mystery into your most powerful tool.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               {
                 title: "Professional Skills",
                 desc: "Moving from general AI curiosity to professional-grade implementation.",
                 icon: <Zap className="text-primary" size={32} />
               },
               {
                 title: "African Context",
                 desc: "Solving unique challenges with AI tailored for the African market dynamics.",
                 icon: <Globe className="text-secondary" size={32} />
               },
               {
                 title: "Career Growth",
                 desc: "Unlocking global opportunities through deep technical and strategic competence.",
                 icon: <Users className="text-authority" size={32} />
               }
             ].map((item, idx) => (
               <motion.div
                 key={idx}
                 whileHover={{ y: -10 }}
                 className="p-8 bg-brand-bg rounded-2xl border border-gray-100"
               >
                 <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                   {item.icon}
                 </div>
                 <h3 className="text-2xl font-display font-bold text-authority mb-4">{item.title}</h3>
                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Featured CTA Strip */}
      <section className="bg-authority py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">Ready to start your journey?</h2>
            <p className="text-gray-400">Join our next Masterclass and learn the fundamentals of AI for free.</p>
          </div>
          <Link to="/masterclass" className="btn-primary whitespace-nowrap">
            Register for Free
          </Link>
        </div>
      </section>
    </div>
  );
}
