import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  outcome: string;
  fullStory: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Omni-Channel Support AI",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?q=80&w=2070&auto=format&fit=crop",
      outcome: "Automated 80% of support queries for a Nigerian Neobank",
      fullStory: "We designed a multi-modal support bot that handles WhatsApp, Mobile App, and Web queries synchronously using Vector Databases for hyper-accurate internal documentation retrieval."
    },
    {
      id: 2,
      title: "Predictive Agritech Model",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=2072&auto=format&fit=crop",
      outcome: "Increased smallholder crop yield by 22% using satellite data",
      fullStory: "A computer vision project that analyzes satellite photography to predict early signs of pest infestation and soil nutrient deficiency in Lagos and Ogun state farmlands."
    },
    {
      id: 3,
      title: "Supply Chain Optimizer",
      category: "Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      outcome: "Reduced last-mile fuel costs by 15% across 12 African cities",
      fullStory: "Constraint-based optimization algorithms developed for a leading Pan-African courier to dynamic route planning and fleet management."
    },
    {
       id: 4,
       title: "AI Resume & Career Engine",
       category: "HR Tech",
       image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1740&auto=format&fit=crop",
       outcome: "Assisted 500+ Nigerian students in landing remote tech jobs",
       fullStory: "An LLM-driven platform that scores resumes against UK/US job descriptions and provides personalized gap analysis for Nigerian engineering graduates."
    },
    {
       id: 5,
       title: "Fraud Detection Neural Net",
       category: "Financial Services",
       image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1740&auto=format&fit=crop",
       outcome: "Identified $2M in fraudulent transaction patterns in real-time",
       fullStory: "Anomaly detection models trained on millions of transaction records to spot early signals of card-not-present fraud."
    },
    {
       id: 6,
       title: "Medical Diagnostic Assistant",
       category: "HealthTech",
       image: "https://images.unsplash.com/photo-1576091160550-2173599211d0?q=80&w=2070&auto=format&fit=crop",
       outcome: "Assisted rural health workers with screening for 40+ conditions",
       fullStory: "An offline-first AI application that runs on low-power Android devices to provide diagnostic guidance to health clinics with limited internet connectivity."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-authority mb-6">Real Problems, <span className="text-primary italic">AI</span> Solutions.</h1>
          <p className="text-lg text-gray-500">Explore how Digital Loop is building the future of Africa's digital economy through practical, high-impact AI implementation.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-authority/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                   <span className="bg-primary px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">{project.category}</span>
                </div>
              </div>
              <div className="p-8">
                 <h3 className="text-xl font-display font-bold text-authority mb-2">{project.title}</h3>
                 <p className="text-sm text-primary font-bold mb-4">{project.outcome}</p>
                 <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-authority group-hover:text-primary transition-colors">
                   View Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[60] bg-authority/90 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="fixed inset-4 md:inset-20 z-[70] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 h-48 md:h-full relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 left-6 p-2 bg-white rounded-full shadow-lg md:hidden"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="hidden md:block absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={32} />
                </button>
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">{selectedProject.category}</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-authority mb-6">{selectedProject.title}</h2>
                <div className="p-6 bg-brand-bg rounded-2xl mb-8">
                   <p className="text-authority font-bold text-lg mb-2">Impact Highlight</p>
                   <p className="text-gray-600">{selectedProject.outcome}</p>
                </div>
                <div className="prose prose-slate max-w-none">
                  <h4 className="text-authority font-bold border-b pb-4 mb-4">Challenge & Implementation</h4>
                  <p className="text-gray-500 leading-relaxed text-lg">
                    {selectedProject.fullStory}
                    <br /><br />
                    At Digital Loop, our approach to projects like this centers on "Context-First AI." We don't just import generic models from the west; we fine-tune architecture for the specific hardware constraints, bandwidth availability, and behavioral patterns of the African user base.
                  </p>
                </div>
                <button className="mt-12 btn-primary w-full flex items-center justify-center gap-4">
                   Discuss Similar Project <ExternalLink size={20} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
