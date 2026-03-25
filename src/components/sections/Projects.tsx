import { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeUp } from '../ui/FadeUp';
import { projectsData, type Project } from '../../data/projects';

function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  function go(next: number) {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  }

  return (
    <div className="relative w-full h-full bg-white">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.img
          key={idx}
          src={images[idx]}
          alt={`${title} ${idx + 1}`}
          custom={dir}
          initial={{ opacity: 0, x: dir * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-contain"
        />
      </AnimatePresence>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => go((idx - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go((idx + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-white w-4' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  const allImages = project.images ?? (project.image ? [project.image] : null);
  const isMobileApp = !!project.images;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <FadeUp>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-black/5 bg-white">
            {allImages ? (
              allImages.length > 1 ? (
                <ImageSlider images={allImages} title={project.title} />
              ) : (
                <img src={allImages[0]} alt={project.title} className="w-full h-full object-contain" />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl opacity-20 font-bold font-serif italic text-accent">{project.title[0]}</span>
              </div>
            )}
          </div>
        </FadeUp>
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <FadeUp delay={0.1}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="font-heading font-bold text-accent tracking-widest uppercase text-sm">
              Project 0{index + 1}
            </span>
            {project.status === "live" && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                LIVE
              </span>
            )}
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{project.title}</h3>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-lg text-muted mb-8 leading-relaxed">{project.description}</p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mb-8 p-5 bg-[var(--color-bg-alt)] rounded-2xl border border-black/6 shadow-[inset_2px_0_0_0_var(--color-accent-secondary)]">
            <h4 className="font-bold mb-2 text-xs uppercase tracking-widest text-muted">Key Takeaways</h4>
            <p className="text-muted leading-relaxed text-sm">{project.learned}</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-black/5 text-xs font-semibold text-text-main rounded-full border border-black/8 hover:border-accent/30 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </FadeUp>

        {(project.githubUrl || project.liveUrl) && (
          <FadeUp delay={0.6}>
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-black/10 text-sm font-medium hover:border-accent hover:text-accent transition-all"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-bg py-32 px-6 relative border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Side <span style={{ fontFamily: 'var(--font-handwriting)', fontWeight: 700 }} className="text-accent-secondary">Projects</span>
            </h2>
            <p className="text-lg text-muted max-w-xl">
              A collection of projects exploring AI, scalable architecture, and modern product design.
            </p>
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
