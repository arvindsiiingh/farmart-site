import { useState } from 'react';
import farmartLogo from '../assets/Farmart Logo.svg';

const navLinks = [
  { label: 'Solutions', href: '#segments' },
  { label: 'Our Network', href: '#products' },
  { label: 'Impact', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
];

export default function Navbar({ className = 'fixed top-0 inset-x-0' }) {
  const isFixed = className.includes('fixed');
  const [mobileOpen, setMobileOpen] = useState(false);

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className={`${className} z-50`}>
      <nav className={`mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 ${isFixed ? 'mt-5' : 'mt-0'}`}>
        <div className="border border-brand-mint/40 bg-white/90 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <a href={baseUrl} className="flex items-center">
              <img src={farmartLogo} alt="FarMart" className="h-8 w-auto" />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
              >
                Talk to us
              </button>

              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((o) => !o)}
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded hover:bg-slate-100 transition-colors"
              >
                <span className={`block h-0.5 w-5 bg-brand-ink transition-transform duration-200 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-brand-ink transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-brand-ink transition-transform duration-200 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileOpen && (
            <div className="md:hidden border-t border-brand-mint/30 bg-white/95 px-4 pb-4 pt-3">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 px-2 text-sm font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
