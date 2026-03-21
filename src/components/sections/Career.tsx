import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';
import { careerData, type CareerItem } from '../../data/career';
import { skills, categoryColors } from '../../data/skills';

const techColorMap = new Map(
  skills.map((s) => [s.name.toLowerCase(), categoryColors[s.category]])
);
const fallback = [
  'bg-amber-50 text-amber-800 border-amber-200',
  'bg-sky-50 text-sky-800 border-sky-200',
  'bg-teal-50 text-teal-800 border-teal-200',
  'bg-green-50 text-green-800 border-green-200',
  'bg-orange-50 text-orange-800 border-orange-200',
];
function chipColor(tech: string, i: number) {
  return techColorMap.get(tech.toLowerCase()) ?? fallback[i % fallback.length];
}

function CompanySlider({ item }: { item: CareerItem }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const projects = item.projects;

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }

  const proj = projects[index];

  return (
    <FadeUp>
      <div className="bg-[var(--color-bg-alt)] border border-black/8 rounded-3xl overflow-hidden">

        {/* 회사 헤더 */}
        <div className="flex items-center gap-4 px-8 pt-8 pb-6 border-b border-black/6">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-black/8 flex items-center justify-center flex-shrink-0 shadow-sm">
            <img
              src={item.logo}
              alt={item.company}
              className="w-8 h-8 object-contain"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-text-main text-lg leading-tight">{item.company}</p>
            <p className="text-sm font-medium text-accent">{item.role}</p>
          </div>
          {/* 페이지 네이터 */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => go(index - 1)}
              disabled={index === 0}
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-muted hover:border-accent/40 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-muted tabular-nums w-10 text-center">
              {index + 1} / {projects.length}
            </span>
            <button
              onClick={() => go(index + 1)}
              disabled={index === projects.length - 1}
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-muted hover:border-accent/40 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 슬라이드 카드 */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={proj.name}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d * -60, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="px-8 py-7"
            >
              {/* 프로젝트명 */}
              <p className="text-xs font-bold text-muted uppercase tracking-widest mb-2">Project</p>
              <h4 className="text-2xl font-bold tracking-tight text-text-main mb-3">{proj.name}</h4>
              <p className="text-base text-muted leading-relaxed mb-6">{proj.description}</p>

              {/* 불렛 */}
              <div className="mb-6 p-5 bg-bg rounded-2xl border border-black/6 shadow-[inset_2px_0_0_0_var(--color-accent-secondary)]">
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-3">What I did</p>
                <ul className="space-y-2">
                  {proj.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-[0.4rem]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 스택 */}
              <div className="flex flex-wrap gap-1.5">
                {proj.stack.map((tech, ti) => (
                  <span key={tech} className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${chipColor(tech, ti)}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 하단 인디케이터 dots */}
          <div className="flex justify-center gap-1.5 pb-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === index
                    ? 'w-5 h-1.5 bg-accent'
                    : 'w-1.5 h-1.5 bg-black/15 hover:bg-black/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export function Career() {
  return (
    <section id="career" className="py-32 px-6 bg-bg border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Career</h2>
            <div className="h-[1px] flex-1 bg-black/8 mt-1" />
          </div>
        </FadeUp>

        <div className="flex flex-col gap-10">
          {careerData.map((item, i) => (
            <CompanySlider key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
