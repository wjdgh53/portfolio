import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Menu, ArrowRight, Code2, Terminal, Cpu, Search } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="font-heading font-bold text-2xl tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white">
            <span className="font-serif italic text-lg leading-none">J</span>
          </div>
          Noh.
        </a>
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden bg-bg">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight mb-6 leading-[1.1] text-text-main">
            Engineering <br/>
            <span className="font-serif italic font-normal text-accent">intelligent</span> systems.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted max-w-lg mb-10 leading-relaxed">
            Hi, I'm Jeongho Noh. I build scalable backend architectures and explore the intersection of artificial intelligence and modern product engineering.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-xl bg-text-main text-white font-medium hover:bg-text-main/90 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl border border-black/10 text-text-main font-medium hover:bg-black/5 transition-colors flex items-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-black/5 w-full max-w-md">
            <p className="text-sm font-medium text-muted mb-4">Core Focus Areas</p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-text-main font-medium">
                <Code2 className="w-5 h-5 text-accent" /> Full-Stack
              </div>
              <div className="flex items-center gap-2 text-text-main font-medium">
                <Cpu className="w-5 h-5 text-accent-secondary" /> AI Integration
              </div>
              <div className="flex items-center gap-2 text-text-main font-medium">
                <Terminal className="w-5 h-5 text-muted" /> Systems
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Decorative background block */}
          <div className="absolute top-8 -right-8 w-full h-full bg-accent/5 rounded-3xl -z-10" />
          
          <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/5 border border-white">
            <img 
              src="https://picsum.photos/seed/dennis-tech/800/1000" 
              alt="Jeongho (Dennis) Noh"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const MY_SKILLS = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "Python", "Go", "Java", "C++", "SQL", "PostgreSQL", "Redis", 
  "MongoDB", "AWS", "GCP", "Docker", "Kubernetes", "GraphQL", 
  "REST API", "Tailwind CSS", "Machine Learning", "TensorFlow",
  "PyTorch", "Git", "CI/CD", "WebSockets", "Microservices"
];

function SkillSearch() {
  const [query, setQuery] = useState('');
  
  const filteredSkills = MY_SKILLS.filter(skill => 
    skill.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-24 px-6 bg-[var(--color-bg-alt)] border-b border-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Looking for a specific <span className="font-serif italic text-accent">skill</span>?
          </h2>
          <p className="text-muted mb-10">Search my tech stack to see if we're a match.</p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <div className="relative max-w-xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-muted" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. React, Python, AWS..."
              className="w-full pl-14 pr-6 py-4 rounded-2xl border border-black/10 bg-bg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-lg shadow-sm placeholder:text-muted/70"
            />
          </div>
        </FadeUp>

        <div className="min-h-[120px] flex flex-wrap justify-center gap-3">
          {query && filteredSkills.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="text-lg text-text-main bg-accent/5 px-8 py-6 rounded-2xl border border-accent/20 shadow-sm max-w-2xl"
            >
              <span className="text-2xl mr-3 inline-block animate-bounce">💡</span>
              I haven't used <span className="font-bold text-accent">"{query}"</span> extensively yet, but I'm a fast learner and can pick it up quickly! <br/>
              <span className="text-sm text-muted mt-2 block">(새로운 기술도 금방 배울 수 있습니다!)</span>
            </motion.div>
          ) : (
            filteredSkills.map((skill, index) => (
              <motion.span
                key={skill}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="px-5 py-2.5 bg-white border border-black/10 text-text-main font-medium rounded-full shadow-sm hover:border-accent hover:text-accent hover:shadow-md transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

const careerData = [
  {
    company: "Capital One",
    role: "Senior Associate Software Engineer",
    period: "2021–2025",
    description: "Architected and maintained high-throughput microservices. Led the migration of legacy systems to modern cloud infrastructure, improving system reliability and reducing latency."
  },
  {
    company: "BNSF Railway",
    role: "Senior Associate Software Engineer",
    period: "2018–2020",
    description: "Developed mission-critical applications for logistics and operations. Collaborated with cross-functional teams to deliver robust software solutions in a fast-paced environment."
  }
];

function Career() {
  return (
    <section id="career" className="py-32 px-6 bg-bg">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Experience
            </h2>
            <div className="h-[1px] flex-1 bg-black/10 mt-2" />
          </div>
        </FadeUp>

        <div className="space-y-8">
          {careerData.map((item, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="group relative bg-[var(--color-bg-alt)] p-8 md:p-10 rounded-2xl border border-black/5 hover:border-accent/30 transition-all duration-300 overflow-hidden shadow-sm">
                {/* Hover accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-text-main">{item.company}</h3>
                    <div className="text-lg font-medium text-accent mt-1">{item.role}</div>
                  </div>
                  <div className="text-sm font-bold text-muted bg-black/5 px-3 py-1 rounded-md w-fit">
                    {item.period}
                  </div>
                </div>
                <p className="text-muted leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const projectsData = [
  {
    title: "Context Checker",
    description: "An AI-powered tool that analyzes codebases to ensure contextual consistency and adherence to architectural guidelines.",
    learned: "Leveraged LLMs for static analysis, optimized prompt engineering for code understanding, and built a robust AST parsing pipeline.",
    stack: ["TypeScript", "React", "Node.js", "Gemini API"],
    image: "https://picsum.photos/seed/context-tech/1600/900"
  },
  {
    title: "FitMe",
    description: "A personalized fitness tracking application that uses machine learning to adapt workout plans based on user progress and recovery data.",
    learned: "Implemented complex state management, integrated wearable device APIs, and deployed scalable backend services.",
    stack: ["React Native", "Python", "TensorFlow", "PostgreSQL"],
    image: "https://picsum.photos/seed/fitme-tech/1600/900"
  },
  {
    title: "Project 03 — Coming Soon",
    description: "Currently in development. Exploring new paradigms in generative UI and autonomous agents.",
    learned: "Experimenting with real-time WebSocket communication and multi-agent orchestration.",
    stack: ["Next.js", "Go", "WebSockets", "Redis"],
    image: "https://picsum.photos/seed/comingsoon-tech/1600/900"
  }
];

function Projects() {
  return (
    <section id="projects" className="bg-[var(--color-bg-alt)] py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Selected <span className="font-serif italic font-normal text-accent-secondary">Works</span>
            </h2>
            <p className="text-lg text-muted max-w-xl">A collection of projects exploring AI, scalable architecture, and modern product design.</p>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-32">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projectsData[0], index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <FadeUp>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/5 group border border-black/5">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          </div>
        </FadeUp>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <FadeUp delay={0.1}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="font-heading font-bold text-accent tracking-widest uppercase text-sm">
              Project 0{index + 1}
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{project.title}</h3>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            {project.description}
          </p>
        </FadeUp>
        
        <FadeUp delay={0.4}>
          <div className="mb-8 p-6 bg-bg rounded-xl border border-black/5 border-l-4 border-l-accent-secondary">
            <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-text-main">
              Key Takeaways
            </h4>
            <p className="text-muted leading-relaxed text-sm">
              {project.learned}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-black/5 text-xs font-bold text-text-main rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-bg border-t border-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-accent">
            <ArrowRight className="w-8 h-8 -rotate-45" />
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Ready to build the <br/>
            <span className="font-serif italic font-normal text-accent">next big thing?</span>
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:nohdennis@gmail.com" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-white font-bold text-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2">
              Get In Touch
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-xl border border-black/10 font-bold text-lg hover:bg-black/5 transition-colors">
              View LinkedIn
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 bg-[var(--color-bg-alt)] border-t border-black/5 text-center">
      <p className="font-medium text-sm text-muted">
        © {new Date().getFullYear()} Jeongho (Dennis) Noh. Built with React & Tailwind.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-bg text-text-main min-h-screen selection:bg-accent/20 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <SkillSearch />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
