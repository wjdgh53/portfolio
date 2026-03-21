import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';
import { skills, categoryColors, categoryDot, type Skill, type SkillCategory } from '../../data/skills';

function SkillPill({
  skill,
  selected,
  onSelect,
}: {
  skill: Skill;
  selected: Skill | null;
  onSelect: (skill: Skill) => void;
}) {
  const isActive = selected?.name === skill.name;
  return (
    <button
      onClick={() => skill.context && onSelect(skill)}
      className={`px-3.5 py-1.5 border font-medium rounded-full text-sm transition-all
        ${categoryColors[skill.category]}
        ${skill.context ? 'cursor-pointer hover:scale-[1.03]' : 'cursor-default opacity-50'}
        ${isActive ? 'ring-2 ring-offset-1 ring-accent shadow-sm scale-[1.03]' : ''}
      `}
    >
      {skill.name}
    </button>
  );
}

function CategoryBlock({
  cat,
  selected,
  onSelect,
}: {
  cat: SkillCategory;
  selected: Skill | null;
  onSelect: (skill: Skill) => void;
}) {
  const catSkills = skills.filter((s) => s.category === cat);
  const activeSkill = selected && catSkills.find((s) => s.name === selected.name) ? selected : null;

  return (
    <div className="bg-[var(--color-bg-alt)] border border-black/8 rounded-2xl overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`w-1.5 h-1.5 rounded-full ${categoryDot[cat]}`} />
          <p className="text-xs font-bold text-muted uppercase tracking-widest">{cat}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {catSkills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} selected={selected} onSelect={onSelect} />
          ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {activeSkill && (
          <motion.div
            key="desc"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-black/8 mx-5 mb-5 pt-4">
              <p className="font-bold text-text-main text-base mb-2">{activeSkill.name}</p>
              <p className="text-base text-muted leading-relaxed">{activeSkill.context}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SkillSearch() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Skill | null>(null);

  const filteredSkills = skills.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  const categories = Array.from(new Set(skills.map((s) => s.category))) as SkillCategory[];

  function handleSelect(skill: Skill) {
    setSelected((prev) => (prev?.name === skill.name ? null : skill));
  }

  return (
    <section className="py-24 px-6 bg-bg border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tighter">
            Looking for a specific{' '}
            <span style={{ fontFamily: 'var(--font-handwriting)', fontWeight: 700 }} className="text-accent">skill</span>?
          </h2>
          <p className="text-muted mb-8">Click any skill to see where I picked it up.</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative max-w-sm mb-10">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-muted" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelected(null); }}
              placeholder="e.g. React, Python, AWS..."
              className="w-full pl-11 pr-5 py-3 rounded-xl border border-black/10 bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/60 transition-all text-sm placeholder:text-muted/50"
            />
          </div>
        </FadeUp>

        {query && filteredSkills.length === 0 ? (
          <div className="text-base text-text-main bg-[var(--color-bg-alt)] border border-black/8 px-6 py-5 rounded-2xl">
            <span className="font-bold text-accent">"{query}"</span>는 아직 깊게 다뤄보지 않았지만 — 빠르게 익힐 수 있어요!
          </div>
        ) : query ? (
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {filteredSkills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} selected={selected} onSelect={handleSelect} />
              ))}
            </div>
            <AnimatePresence initial={false}>
              {selected && filteredSkills.find((s) => s.name === selected.name) && (
                <motion.div
                  key="search-desc"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="bg-[var(--color-bg-alt)] border border-black/8 rounded-2xl p-5">
                    <p className="font-bold text-text-main text-base mb-2">{selected.name}</p>
                    <p className="text-base text-muted leading-relaxed">{selected.context}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="space-y-4">
            {categories.map((cat, i) => (
              <FadeUp key={cat} delay={i * 0.04}>
                <CategoryBlock cat={cat} selected={selected} onSelect={handleSelect} />
              </FadeUp>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
