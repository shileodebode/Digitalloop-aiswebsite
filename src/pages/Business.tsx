import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Users, Target, Rocket, Zap, Mail, ArrowRight } from 'lucide-react';

export default function Business() {
  const services = [
    {
      title: "Corporate AI Literacy",
      desc: "Upskill your entire workforce on AI fundamentals to foster an innovation-first culture.",
      icon: <Users className="text-primary" />
    },
    {
      title: "Strategic AI Integration",
      desc: "We audit your workflows and integrate custom AI solutions that automate the mundane.",
      icon: <Target className="text-secondary" />
    },
    {
      title: "Proprietary LLM Solutions",
      desc: "Building custom-trained models on your internal data for maximum security and relevance.",
      icon: <ShieldCheck className="text-authority" />
    }
  ];

  const steps = [
    "Initial AI Readiness Audit",
    "Tailored Strategy Roadmap",
    "Infrastructure & API Setup",
    "Custom Tool Development",
    "Team Training & Onboarding",
    "Ongoing Optimization & Support"
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-display font-bold text-authority leading-tight mb-8">
              Future-Proof Your Business with <span className="text-secondary italic">Strategic</span> AI.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We help African enterprises move beyond the hype and implement real, ROI-driven artificial intelligence solutions.
            </p>
            <div className="flex gap-4">
              <a href="#booking" className="btn-primary">Book Consulting Call</a>
              <a href="#" className="flex items-center gap-2 font-bold hover:text-primary transition-colors">See Case Studies <ArrowRight size={18} /></a>
            </div>
          </motion.div>
          <div className="bg-brand-bg p-8 rounded-3xl border border-gray-100 flex items-center justify-center aspect-video relative overflow-hidden group">
            <TrendingUp size={120} className="text-secondary/20 transition-transform group-hover:scale-110 duration-700" />
            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce">
               <span className="text-xs font-bold text-gray-400 block mb-1 uppercase tracking-widest">Average Efficiency Gain</span>
               <span className="text-3xl font-display font-black text-authority">340%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-8">
                  {s.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-authority mb-4">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-authority text-center mb-20 text-balance">Our 6-Step Integration Methodology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-5xl font-display font-black text-gray-100">{i + 1}</span>
                <div>
                  <h4 className="font-bold text-authority mb-2">{step}</h4>
                  <p className="text-sm text-gray-500">Rigorous and scientific approach to ensuring every dollar spent on AI returns value.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Row */}
      <section className="py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale brightness-0">
          <div className="font-display font-bold text-2xl">ZENEKA</div>
          <div className="font-display font-bold text-2xl">FIRST BANK</div>
          <div className="font-display font-bold text-2xl">ETISALAT</div>
          <div className="font-display font-bold text-2xl">INTERSWITCH</div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 bg-authority text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block px-3 py-1 bg-primary rounded text-xs font-bold uppercase">Case Study</span>
            <h2 className="text-4xl font-display font-bold">How we saved a Fintech Giant $1.2M annually.</h2>
            <p className="text-white/60 leading-relaxed">
              By implementing a custom RAG-based customer support engine, we handled 85% of queries without human intervention while improving CSAT scores.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div>
                  <span className="text-3xl font-display font-bold text-primary">85%</span>
                  <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">Automation Rate</p>
               </div>
               <div>
                  <span className="text-3xl font-display font-bold text-secondary">2 sec</span>
                  <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">Avg Response Time</p>
               </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 aspect-video flex items-center justify-center">
             <Rocket size={80} className="text-white/10" />
          </div>
        </div>
      </section>

      {/* Final CTA with Calendly Placeholder */}
      <section id="booking" className="py-24 bg-brand-bg">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-authority mb-8">Ready to deploy AI?</h2>
          <p className="text-gray-500 mb-12">Book a high-level strategic audit with our founder or lead architect.</p>
          
          <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 min-h-[600px] flex items-center justify-center flex-col gap-4">
             {/* Calendly Integration Note */}
             <Mail size={48} className="text-gray-200" />
             <p className="text-sm font-medium text-gray-400">Calendly Widget Embed Area</p>
             <button className="btn-primary">Connect Calendly Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
