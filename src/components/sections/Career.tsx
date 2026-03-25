import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FadeUp } from '../ui/FadeUp';
import { careerData } from '../../data/career';
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

const projectMeta: Record<string, { summary: string; image: string }> = {
  'CRM Integration Platform': {
    summary: 'Built an enterprise integration platform processing 500 leads/min with real-time monitoring.',
    image: '/images/career/crm.jpg',
  },
  'Email Notification System': {
    summary: 'Architected a scalable bulk email workflow with Pinpoint templates and customer data injection.',
    image: '/images/career/email.jpg',
  },
  'Dealer Recommendation Engine': {
    summary: 'Redesigned the recommendation engine for multi-dealer support with data-driven analytics pipelines.',
    image: '/images/career/dealer.jpg',
  },
  'Cargo Claim System': {
    summary: 'Built a full-stack claims management system with Kafka stream processing and integration tests.',
    image: '/images/career/cargo.jpg',
  },
  'Internal Train Policy Portal': {
    summary: 'Shipped a searchable policy portal replacing scattered PDFs with role-based access and live search.',
    image: '/images/career/train.jpg',
  },
};

// ── Company marker ─────────────────────────────────────────
function CompanyMarker({ company, role, index }: { company: string; role: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="text-center mb-6"
    >
      <p className="text-4xl md:text-5xl font-bold text-text-main">
        {company.split('—')[0].trim()}
      </p>
      <p className="text-base text-muted mt-1">{role}</p>
      {/* Big accent dot */}
      <div className="flex justify-center mt-6">
        <div
          className="w-5 h-5 rounded-full bg-accent border-4 border-bg z-10"
          style={{ boxShadow: '0 0 0 6px color-mix(in srgb, var(--color-accent) 15%, transparent)' }}
        />
      </div>
    </motion.div>
  );
}

// ── Project row ────────────────────────────────────────────
function ProjectRow({
  proj,
}: {
  proj: { name: string; description: string; bullets: string[]; stack: string[] };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });
  const meta = projectMeta[proj.name];

  return (
    <div ref={ref} className="relative mb-28">
      {/* Small dot on center line */}
      <div className="hidden md:block absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/50 border-2 border-bg z-10" />

      {/* Desktop: 2-col grid */}
      <div className="hidden md:grid grid-cols-2 items-start">

        {/* LEFT: title + image + description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="pr-12 flex flex-col gap-5"
        >
          <h4 className="text-3xl font-black tracking-tight text-text-main leading-tight">
            {proj.name}
          </h4>
          <div className="rounded-2xl overflow-hidden h-52 bg-[var(--color-bg-alt)] flex-shrink-0">
            {meta?.image && (
              <img src={meta.image} alt={proj.name} className="w-full h-full object-cover" />
            )}
          </div>
          <p className="text-base text-muted leading-relaxed">
            {meta?.summary ?? proj.description}
          </p>
        </motion.div>

        {/* RIGHT: bullets + skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="pl-12 flex flex-col gap-5"
        >
          {/* Invisible title placeholder to align vertically with left title */}
          <div className="text-3xl font-black leading-tight invisible select-none">‎</div>

          <ul className="space-y-4">
            {proj.bullets.map((b, bi) => (
              <li key={bi} className="flex items-start gap-3 text-base text-muted leading-snug">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {proj.stack.map((tech, ti) => (
              <span
                key={tech}
                className={`px-4 py-1.5 text-sm font-semibold rounded-full border ${chipColor(tech, ti)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile: stacked */}
      <div className="md:hidden flex flex-col gap-4">
        <h4 className="text-2xl font-black tracking-tight text-text-main">{proj.name}</h4>
        {meta?.image && (
          <div className="rounded-2xl overflow-hidden h-48 bg-[var(--color-bg-alt)]">
            <img src={meta.image} alt={proj.name} className="w-full h-full object-cover" />
          </div>
        )}
        <p className="text-base text-muted leading-relaxed">{meta?.summary ?? proj.description}</p>
        <ul className="space-y-3">
          {proj.bullets.map((b, bi) => (
            <li key={bi} className="flex items-start gap-3 text-base text-muted leading-snug">
              <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5" />
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {proj.stack.map((tech, ti) => (
            <span key={tech} className={`px-4 py-1.5 text-sm font-semibold rounded-full border ${chipColor(tech, ti)}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main section ───────────────────────────────────────────
export function Career() {
  const sorted = [...careerData].reverse();

  return (
    <section id="career" className="bg-bg border-t border-black/5">
      {/* Heading */}
      <div className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Career</h2>
              <div className="h-[1px] flex-1 bg-black/8 mt-1" />
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative px-6 pb-32 max-w-5xl mx-auto">
        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-px hidden md:block" />

        {sorted.map((item, ci) => (
          <div key={item.company} className="mb-32">
            <CompanyMarker company={item.company} role={item.role} index={ci} />
            <div className="h-10" />
            {item.projects.map((proj) => (
              <ProjectRow key={proj.name} proj={proj} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
