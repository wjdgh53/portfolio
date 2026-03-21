import { motion } from 'motion/react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { personal } from '../../data/personal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-20 px-6 relative overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-16">

        {/* Left — Personal intro */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Status badge */}
          {personal.available && (
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-accent" />
              </span>
              Open to new opportunities
            </motion.div>
          )}

          {/* Name */}
          <motion.p variants={itemVariants} className="text-base font-semibold text-muted tracking-widest uppercase mb-2">
            Hi, I'm
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-3 leading-none text-text-main">
            Jeongho
          </motion.h1>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-none">
            <span style={{ fontFamily: 'var(--font-handwriting)', fontWeight: 700 }} className="text-accent-secondary">
              Noh.
            </span>
          </motion.h1>

          {/* Title + Location */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xl md:text-2xl font-semibold text-text-main">{personal.title}</span>
            <span className="h-5 w-[1px] bg-black/15 hidden sm:block" />
            <span className="flex items-center gap-1.5 text-muted text-sm">
              <MapPin className="w-4 h-4" />
              {personal.location}
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants} className="text-lg text-muted max-w-lg mb-10 leading-relaxed">
            {personal.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-2xl bg-accent text-white font-semibold hover:bg-accent/90 active:scale-[0.98] transition-all flex items-center gap-2 group shadow-md shadow-accent/20"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={personal.resumeUrl}
              download="Resume_Jeongho_Noh.pdf"
              className="px-7 py-3.5 rounded-2xl border-2 border-accent text-accent font-semibold hover:bg-accent/5 active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div variants={itemVariants} className="mt-12 flex gap-8 border-t border-black/6 pt-8">
            <div>
              <p className="text-3xl font-bold tracking-tighter text-text-main">7+</p>
              <p className="text-xs text-muted mt-0.5 uppercase tracking-wider">Years Exp.</p>
            </div>
            <div className="w-[1px] bg-black/8" />
            <div>
              <p className="text-3xl font-bold tracking-tighter text-text-main">2</p>
              <p className="text-xs text-muted mt-0.5 uppercase tracking-wider">Enterprise Co.</p>
            </div>
            <div className="w-[1px] bg-black/8" />
            <div>
              <p className="text-3xl font-bold tracking-tighter text-text-main">AWS</p>
              <p className="text-xs text-muted mt-0.5 uppercase tracking-wider">Certified</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Green accent block behind photo */}
          <div className="absolute top-6 right-0 w-[88%] h-[92%] bg-accent/8 rounded-3xl -z-10" />

          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-black/8 ring-inset">
            <img
              src="/images/dennis-profile.jpg"
              alt="Jeongho Noh"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = 'none';
                const p = t.parentElement;
                if (p) {
                  p.classList.add('bg-gradient-to-br', 'from-accent/10', 'to-accent-secondary/10', 'flex', 'items-center', 'justify-center');
                  p.innerHTML = '<span style="font-size:7rem;opacity:0.15;font-weight:700;color:#16A34A;font-family:Caveat,cursive">JN</span>';
                }
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
