import { HugeiconsIcon } from '@hugeicons/react';
import { InstagramIcon, Linkedin01Icon, NewTwitterIcon, YoutubeIcon } from '@hugeicons/core-free-icons';
import { motion as Motion } from 'framer-motion';
import farmartLightLogo from '../assets/farmart logo light.png';

export default function Footer({ activeLegalLink }) {
  const baseUrl = import.meta.env.BASE_URL;
  const footerGroups = [
    {
      title: 'Platform',
      links: [
        { label: 'Logistics Engine', href: '#' },
        { label: 'Inventory Sync', href: '#' },
        { label: 'Financial Settlements', href: '#' },
        { label: 'Yield Forecasting', href: '#' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'For Co-ops', href: '#' },
        { label: 'For Processors', href: '#' },
        { label: 'For Enterprise Retail', href: '#' },
        { label: 'Case Studies', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '/life-at-farmart' },
        { label: 'Impact', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://in.linkedin.com/company/farmart-app-os', icon: Linkedin01Icon },
    { label: 'Instagram', href: '#', icon: InstagramIcon },
    { label: 'X', href: '#', icon: NewTwitterIcon },
  ];

  const legalLinks = [
    { key: 'privacy', label: 'Privacy Policy', href: `${baseUrl}privacy-policy.html` },
    { key: 'terms', label: 'Terms & Conditions', href: `${baseUrl}privacy-policy.html` },
    { key: 'csr', label: 'CSR Policy', href: `${baseUrl}csr-policy.html` },
  ];

  return (
    <footer className="relative bg-brand-ink text-brand-cream overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 pb-12 pt-20 sm:px-8 sm:pt-24">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl text-white">
            Stay informed on food sourcing &amp; supply chain trends
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-brand-cream/50 font-light">
            Get expert tips, market insights, and sourcing updates — free, straight to your inbox.
          </p>

          <form className="mx-auto mt-10 p-1.5 flex w-full max-w-xl flex-col gap-2 sm:flex-row bg-white/5 border border-white/10 backdrop-blur-sm group focus-within:border-brand-harvest/30 transition-colors" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              Work email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Work email address"
              className="h-12 w-full bg-transparent px-4 text-base text-brand-cream placeholder:text-brand-cream/20 focus:outline-none transition-all font-light"
            />
            <button
              type="submit"
              className="h-12 px-8 btn-premium text-brand-white font-bold text-sm whitespace-nowrap flex items-center justify-center sm:w-auto w-full group-hover:scale-[1.02] transition-transform"
            >
              Subscribe
            </button>
          </form>
        </Motion.div>

        <div className="mt-16 border-t border-white/5 pt-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
            <div className="sm:col-span-2 lg:col-span-2">
              <a href={baseUrl} className="inline-block transition-opacity hover:opacity-80">
                <Motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  src={farmartLightLogo}
                  alt="FarMart"
                  className="h-9 w-auto opacity-90"
                />
              </a>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-brand-cream/50 font-light">
                India&apos;s most trusted food sourcing network, connecting the supply chain with enterprise-grade
                visibility and speed.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href === '#' ? undefined : '_blank'}
                    rel={link.href === '#' ? undefined : 'noreferrer'}
                    aria-label={link.label}
                    className="group/social inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] text-brand-cream/55 transition-all duration-300 hover:border-brand-harvest/35 hover:bg-white/[0.06] hover:text-white"
                  >
                    <HugeiconsIcon
                      icon={link.icon}
                      size={16}
                      className="text-brand-harvest/75 transition-transform duration-300 group-hover/social:-translate-y-0.5"
                    />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-12 group/address transition-transform duration-300">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-harvest/90 mb-5">
                  Registered Office
                </h4>
                <a
                  href="https://share.google/4CNX20wKRioQfkShy"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[14px] leading-relaxed text-brand-cream/40 font-light hover:text-white transition-colors"
                >
                  3rd floor, AIHP Cyber Greens, <br />
                  Plot 491, opposite Airbnb office, <br />
                  DLF Phase 3, Sector 19, <br />
                  Gurugram, Haryana 122016
                </a>
              </div>
            </div>

            {footerGroups.map((group, idx) => (
              <Motion.div
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="group/col transition-transform duration-300"
              >
                <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-harvest/90 mb-6">{group.title}</h4>
                <ul className="space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="relative text-[14px] text-brand-cream/40 transition-colors duration-300 hover:text-white font-light group/link inline-block"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-harvest/50 transition-all duration-300 group-hover/link:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-white/5 pt-8 text-[13px] text-brand-cream/30 md:flex-row md:items-center md:justify-between font-light">
          <p>© {new Date().getFullYear()} FarMart Services Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={activeLegalLink === link.key ? 'page' : undefined}
                className={`transition-colors duration-200 hover:text-white ${activeLegalLink === link.key ? 'pointer-events-none text-white' : ''
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
