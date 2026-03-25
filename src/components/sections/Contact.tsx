import { ArrowUpRight, Download } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';
import { personal } from '../../data/personal';

const terminalLines = [
  { type: 'cmd',  text: '$ git status --check' },
  { type: 'info', text: `>> ${personal.email}` },
  { type: 'info', text: ">> I'm actively looking for new opportunities." },
  { type: 'info', text: '>> Resume and profiles are linked — feel free to reach out.' },
];

/* Terminal always uses a fixed dark bg — independent of light/dark mode */
const lineClass: Record<string, string> = {
  cmd:     'text-gray-100',
  info:    'text-gray-400',
  success: 'text-emerald-400',
  error:   'text-red-400',
};

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-bg border-t border-black/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeUp>
          <p className="text-xs font-bold text-muted uppercase tracking-widest mb-10 text-center lg:text-left">
            Get in touch
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — Terminal (always dark) */}
          <FadeUp delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#111110]">
              {/* Traffic light header */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                <span
                  className="text-gray-600 text-xs ml-3"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  NEO_EMERALD — jeongho@portfolio
                </span>
              </div>

              {/* Terminal body */}
              <div
                className="px-5 py-5 space-y-1.5"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', lineHeight: '2' }}
              >
                {terminalLines.map((line, i) => (
                  <p key={i} className={lineClass[line.type]}>
                    {line.text}
                  </p>
                ))}
                {/* Blinking cursor */}
                <p className="text-gray-100 flex items-center gap-1.5 mt-1">
                  <span>$</span>
                  <span className="inline-block w-2 h-[1em] bg-emerald-400 animate-pulse rounded-[1px]" />
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right — Transmission channels */}
          <div className="flex flex-col gap-5">
            <FadeUp delay={0.15}>
              <p className="text-xs font-bold text-muted uppercase tracking-widest">
                Transmission Channels
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <a
                href={personal.resumeUrl}
                download
                className="group w-full flex items-center justify-between px-7 py-5 rounded-2xl bg-accent text-white font-bold text-lg hover:bg-accent/90 active:scale-[0.98] transition-all shadow-lg shadow-accent/20"
              >
                Download Resume
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </FadeUp>

            <FadeUp delay={0.25}>
              <a
                href={`mailto:${personal.email}`}
                className="group w-full flex items-center justify-between px-7 py-5 rounded-2xl border border-black/10 text-text-main font-semibold text-lg hover:border-accent/40 hover:text-accent active:scale-[0.98] transition-all"
              >
                Send an Email
                <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </FadeUp>

            <FadeUp delay={0.3}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between px-7 py-5 rounded-2xl border border-black/10 text-text-main font-semibold text-lg hover:border-accent/40 hover:text-accent active:scale-[0.98] transition-all"
              >
                LinkedIn Profile
                <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p className="text-sm text-muted px-1">{personal.email}</p>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
