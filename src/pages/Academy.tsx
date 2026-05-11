import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Code, Brain, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function Academy() {
  const courses = [
    {
      title: "AI & Machine Learning Fundamentals",
      outcome: "Build and deploy your first predictive model in 6 weeks",
      desc: "For beginners looking to understand the mechanics behind the algorithms.",
      icon: <Brain className="text-primary" size={28} />,
      level: "Beginner"
    },
    {
      title: "Prompt Engineering for Professionals",
      outcome: "Save 15+ hours weekly with advanced LLM workflows",
      desc: "Master the art of communicating with AI to 10x your productivity.",
      icon: <BookOpen className="text-secondary" size={28} />,
      level: "Intermediate"
    },
    {
      title: "AI Product Management",
      outcome: "Manage full-cycle AI projects from ideation to launch",
      desc: "Strategic framework for leaders building AI-driven products.",
      icon: <GraduationCap className="text-authority" size={28} />,
      level: "Advanced"
    },
    {
      title: "Full-Stack AI Application Development",
      outcome: "Build production-grade SaaS apps with integrated AI APIs",
      desc: "Technical path for developers wanting to integrate OpenAI, Anthropic, and Llama.",
      icon: <Code className="text-orange-400" size={28} />,
      level: "Advanced"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-authority mb-6"
          >
            Digital <span className="text-secondary italic">Loop</span> <span className="text-primary">AI Academy</span>
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            From basic literacy to technical mastery. Choose your path and join the elite top 1% of AI professionals in Africa.
          </p>
          
          {/* Horizontal Learning Path */}
          <div className="relative mt-16 max-w-4xl mx-auto hidden md:block">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {['Literacy', 'Practical Tooling', 'Strategy & Logic', 'Expert Implementation'].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary font-bold z-10">
                    {i + 1}
                  </div>
                  <span className="text-xs font-bold text-authority uppercase tracking-wider">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/10 transition-colors">
                    {course.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-authority/5 px-2 py-1 rounded text-authority">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-authority mb-2">{course.title}</h3>
                <p className="text-primary font-semibold text-sm mb-4">Outcome: {course.outcome}</p>
                <p className="text-gray-500 mb-8">{course.desc}</p>
                <button className="flex items-center gap-2 text-authority font-bold group-hover:text-primary transition-colors">
                  View Syllabus <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-authority text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is this for non-technical people?", a: "Absolutely. Our fundamentals and prompt engineering tracks are designed specifically for business professionals, writers, and managers." },
              { q: "Do you offer certificates?", a: "Yes, every graduate receives a Digital Loop Verified Certificate that is recognized by our partner companies across Africa." },
              { q: "What is the duration of the courses?", a: "Most tracks range from 6 to 12 weeks, depending on the complexity of the technical implementation involved." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 bg-authority rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold mb-6">Invest in your most valuable asset: Your Skills.</h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">Don't wait for AI to change your industry. Be the one who drives that change.</p>
            <button className="btn-primary">Apply for Next Cohort</button>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-authority">{question}</span>
        <ChevronDown size={20} className={cn("transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { AnimatePresence } from 'motion/react';
