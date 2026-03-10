import { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

function PolicyBlock({ block }) {
  if (block.type === 'list') {
    const ListTag = block.ordered ? 'ol' : 'ul';
    const listStyleClass = block.listStyleClass ?? (block.ordered ? 'list-decimal' : 'list-disc');

    return (
      <ListTag
        type={block.typeAttribute}
        className={`space-y-4 pl-6 text-[clamp(1.1rem,1.4vw,1.25rem)] leading-[1.7] text-brand-ink/80 marker:text-brand-600 ${listStyleClass} ${block.className ?? ''}`}
      >
        {block.items.map((item) => (
          <li key={item} className="pl-2">{item}</li>
        ))}
      </ListTag>
    );
  }

  if (block.type === 'email') {
    return (
      <p className="text-[clamp(1.1rem,1.4vw,1.3rem)] leading-[1.7] text-brand-ink">
        <a
          href={`mailto:${block.text}`}
          className="font-sans text-base font-semibold tracking-[0.08em] text-brand-600 underline decoration-brand-harvest underline-offset-4 transition-colors hover:text-brand-700"
        >
          {block.text}
        </a>
      </p>
    );
  }

  if (block.type === 'subheading') {
    return (
      <h3 className="font-sans text-[clamp(1rem,1.2vw,1.1rem)] font-bold uppercase tracking-[0.14em] text-brand-600/90">
        {block.text}
      </h3>
    );
  }

  return (
    <p className="text-[clamp(1.1rem,1.4vw,1.25rem)] leading-[1.74] text-brand-ink/85">
      {block.text}
    </p>
  );
}

export default function LegalPolicyPage({ meta, sections, activeLegalLink }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink selection:bg-brand-600/10 selection:text-brand-600">
      <Navbar className="relative pt-8" />

      {/* Dynamic Header */}
      <header className="relative overflow-hidden border-b border-brand-600/5 bg-[radial-gradient(circle_at_top_left,_rgba(174,210,192,0.2),_transparent_60%),white]">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/20 to-transparent" />

        <div className="relative mx-auto max-w-[1240px] px-6 pb-[4.5rem] pt-8 sm:px-8 sm:pb-20 sm:pt-10">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl"
              >
                <div className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-3">
                  {meta.kicker ?? 'Legal'}
                </div>
                <h1 className="text-[clamp(2.75rem,8vw,6rem)] font-extrabold text-brand-ink tracking-tight leading-[0.95] text-balance mb-10">
                  {meta.title}
                </h1>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-2.5 rounded-full text-brand-ink font-medium text-sm mb-12">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mint opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
                    </span>
                    {meta.lastUpdated}
                  </div>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative border-l border-brand-600/10 pl-8"
              >
                <p className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-3">
                  {meta.scopeLabel ?? 'Summary of Scope'}
                </p>
                <p className="mt-4 font-display text-lg font-medium leading-[1.6] text-brand-ink/70">
                  &ldquo;{meta.scopeText}&rdquo;
                </p>
              </Motion.div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-12 space-y-8">
              <div className="glass overflow-hidden border border-brand-600/5 bg-white/40 p-6 backdrop-blur-xl">
                <p className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-3">
                  Navigation
                </p>
                <nav className="mt-6">
                  <ul className="space-y-1">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={`group relative flex items-start gap-4 py-2.5 transition-all ${activeSection === section.id
                              ? 'text-brand-ink'
                              : 'text-brand-ink/40 hover:text-brand-ink/70'
                            }`}
                        >
                          {activeSection === section.id && (
                            <Motion.div
                              layoutId="active-indicator"
                              className="absolute -left-6 top-1/2 h-4 w-1 -translate-y-1/2 rounded-r bg-brand-600"
                            />
                          )}
                          <span className={`mt-0.5 font-sans text-[9px] font-bold tracking-[0.1em] ${activeSection === section.id ? 'text-brand-600' : 'text-brand-ink/20'
                            }`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="font-sans text-[13px] font-semibold leading-tight tracking-tight">
                            {section.navTitle ?? section.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="bg-brand-ink px-6 py-8 text-brand-cream shadow-2xl shadow-brand-600/20">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
                  Need Help?
                </p>
                <p className="mt-3 font-display text-lg font-medium leading-tight">
                  For legal inquiries, contact our grievance officer.
                </p>
                <a
                  href="mailto:legal@farmart.co"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.1em] underline decoration-brand-harvest decoration-2 underline-offset-4"
                >
                  Email Legal Team
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-12 sm:space-y-20">
            {sections.map((section, idx) => (
              <Motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                key={section.id}
                id={section.id}
                className="scroll-mt-32 group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-sans text-[10px] font-bold tabular-nums tracking-[0.2em] text-brand-600/30">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-brand-600/5 group-hover:bg-brand-600/10 transition-colors" />
                </div>

                <h2 className="mt-8 font-sans text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight text-brand-ink leading-tight">
                  {section.title}
                </h2>

                <div className="mt-8 space-y-6">
                  {section.blocks.map((block, index) => (
                    <PolicyBlock key={`${section.id}-${block.type}-${index}`} block={block} />
                  ))}
                </div>
              </Motion.section>
            ))}
          </div>
        </div>
      </main>

      <Footer activeLegalLink={activeLegalLink} />
    </div>
  );
}
