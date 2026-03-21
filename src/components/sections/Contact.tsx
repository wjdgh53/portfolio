import { ArrowUpRight } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';
import { personal } from '../../data/personal';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-bg border-t border-black/5 relative overflow-hidden">
      {/* Subtle dot texture background */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">

          {/* Left — CTA copy */}
          <div>
            <FadeUp>
              <p className="text-xs font-bold text-muted uppercase tracking-widest mb-6">Get in touch</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-6">
                Ready to build<br />
                the{' '}
                <span style={{ fontFamily: 'var(--font-handwriting)', fontWeight: 700 }} className="text-accent">
                  next big<br />thing?
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-muted max-w-md leading-relaxed">
                I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi — I'll get back to you.
              </p>
            </FadeUp>
          </div>

          {/* Right — buttons + info */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.25}>
              <a
                href={`mailto:${personal.email}`}
                className="group w-full flex items-center justify-between px-7 py-5 rounded-2xl bg-accent text-white font-bold text-lg hover:bg-accent/90 active:scale-[0.98] transition-all shadow-lg shadow-accent/20"
              >
                Get In Touch
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </FadeUp>
            <FadeUp delay={0.3}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between px-7 py-5 rounded-2xl border border-black/10 text-text-main font-semibold text-lg hover:border-accent/40 hover:text-accent active:scale-[0.98] transition-all"
              >
                View LinkedIn
                <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </FadeUp>
            <FadeUp delay={0.35}>
              <p className="text-sm text-muted px-1">
                {personal.email}
              </p>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
