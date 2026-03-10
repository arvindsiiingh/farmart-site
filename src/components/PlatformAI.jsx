import { motion as Motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Network, UserCheck, FileText, Scan } from '@hugeicons/core-free-icons';

const pillars = [
  {
    title: 'Connected to India’s digital infrastructure',
    description:
      'Native rails for India’s compliance and identity ecosystem-so onboarding and documentation move at software speed, not paperwork speed.',
    icon: Network,
    tone: 'brand',
  },
  {
    title: 'Automated KYC',
    description:
      'Programmatic verification workflows that reduce drop-offs and accelerate supplier onboarding-with audit trails built in.',
    icon: UserCheck,
    tone: 'emerald',
  },
  {
    title: 'Auto invoicing and e-way bills',
    description:
      'Generate compliant invoices and e-way bills automatically at dispatch-minimizing errors, delays, and reconciliation overhead.',
    icon: FileText,
    tone: 'blue',
  },
  {
    title: 'AI-based dispatch verification',
    description:
      'Computer-vision checks on quantities, labeling, and condition at handoff-flagging exceptions before they turn into claims.',
    icon: Scan,
    tone: 'slate',
  },
];

function toneStyles(tone) {
  switch (tone) {
    case 'brand':
      return {
        iconWrap: 'bg-brand-harvest/35 border-brand-harvest/70 text-brand-700',
        accent: 'from-brand-harvest/65 via-brand-cream/55 to-transparent',
      };
    case 'emerald':
      return {
        iconWrap: 'bg-brand-harvest/35 border-brand-harvest/70 text-brand-700',
        accent: 'from-brand-harvest/65 via-brand-cream/55 to-transparent',
      };
    case 'blue':
      return {
        iconWrap: 'bg-brand-harvest/35 border-brand-harvest/70 text-brand-700',
        accent: 'from-brand-harvest/65 via-brand-cream/55 to-transparent',
      };
    default:
      return {
        iconWrap: 'bg-brand-harvest/35 border-brand-harvest/70 text-brand-700',
        accent: 'from-brand-harvest/65 via-brand-cream/55 to-transparent',
      };
  }
}

export default function PlatformAI() {
  return (
    <section id="products" className="py-32 md:py-48 bg-white border-t border-slate-100 relative overflow-hidden text-balance">
      {/* Ambient mesh + structural grid */}
      <div className="absolute top-[-25%] right-[-10%] w-[700px] h-[700px] opacity-[0.10] mix-blend-multiply bg-brand-mint rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-15%] w-[650px] h-[650px] opacity-[0.08] mix-blend-multiply bg-brand-harvest rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(circle_at_50%_25%,black,transparent_70%)] opacity-[0.35] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="text-brand-ink font-semibold tracking-wide uppercase text-xs mb-3">
              Platform Intelligence
            </div>

            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold text-brand-ink tracking-tight leading-[0.95] mb-10">
              The operating layer for modern agri-commerce.
            </h2>
            <p className="text-lg md:text-xl text-slate-700 font-light leading-relaxed max-w-xl text-pretty">
              We connect to India’s public digital infrastructure so your supply chain runs on compliance, speed, and full auditability — automatically.
            </p>

            {/* “Workflow” proof block */}
            <div className="mt-12 border-2 border-brand-mint/30 bg-white shadow-2xl shadow-brand-mint/10 overflow-hidden">
              <div className="px-6 py-5 border-b border-brand-mint/45 flex items-center justify-between">
                <div className="text-sm font-semibold text-brand-ink tracking-tight">Dispatch-ready in minutes</div>
                <div className="text-xs font-medium text-slate-600">Fully automated</div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { k: 'KYC', v: 'Auto-verified' },
                    { k: 'Invoice', v: 'Generated' },
                    { k: 'E-way bill', v: 'Issued' },
                  ].map((item) => (
                    <div key={item.k} className=" border-2 border-slate-100 bg-slate-50/50 p-5 transition-colors hover:border-brand-mint/30">
                      <div className="text-[10px] uppercase tracking-[0.1em] text-slate-500 font-bold">{item.k}</div>
                      <div className="mt-2 text-base font-bold text-brand-ink">{item.v}</div>
                      <div className="mt-4 h-2 bg-slate-200 overflow-hidden">
                        <Motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '92%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-brand-700 to-brand-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border border-brand-mint/45 bg-brand-ink p-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-ink" />
                  <div className="relative">
                    <div className="text-xs uppercase tracking-wider text-white font-medium">AI verification</div>
                    <div className="mt-2 text-base font-semibold text-white">Dispatch matched to order + docs</div>
                    <div className="mt-3 text-sm text-white/80 font-light leading-relaxed">
                      Exceptions are flagged instantly, with photo evidence and time-stamped logs for clean dispute resolution.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 auto-rows-fr">
              {pillars.map((p) => {
                const styles = toneStyles(p.tone);
                return (
                  <div
                    key={p.title}
                    className="group relative border-2 border-slate-100 bg-white transition-all duration-500 overflow-hidden hover:border-brand-mint/40 hover:shadow-2xl hover:shadow-brand-mint/5"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${styles.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative p-8 lg:p-10">
                      <div className={`w-14 h-14  flex items-center justify-center border ${styles.iconWrap} transition-transform duration-500`}>
                        <HugeiconsIcon icon={p.icon} size={26} strokeWidth={1.6} />
                      </div>
                      <h3 className="mt-8 text-2xl md:text-[1.6rem] font-bold text-brand-ink tracking-tight leading-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-slate-700 font-light leading-relaxed text-pretty">
                        {p.description}
                      </p>
                      <div className="mt-7 flex items-center gap-2 text-sm font-medium text-slate-700">
                        <span className="inline-flex h-1.5 w-1.5 bg-slate-900/60" />
                        Audit-ready at any scale
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
