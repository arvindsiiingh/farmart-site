import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight, Play } from '@hugeicons/core-free-icons';
import { motion as Motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-brand-cream min-h-screen flex flex-col justify-center pt-[140px] pb-12">
            {/* Minimalist, precise background gradients (Sarvam/Stripe style) */}
            <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full">
                    <div className="absolute -top-40 right-0 w-[600px] h-[600px] opacity-30 mix-blend-multiply filter blur-[100px] bg-brand-mint rounded-full" />
                    <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] opacity-25 mix-blend-multiply filter blur-[100px] bg-brand-harvest rounded-full" />
                </div>
                {/* Subtle structural grid */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6bTAgMHY0MGgxVjB6IiBmaWxsPSJyZ2JhKDAsMCwwLDAuMDMpIi8+Cjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            </div>

            <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center justify-center text-center">

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-[clamp(2.75rem,8vw,5rem)] font-extrabold text-brand-ink tracking-tight leading-[0.95] text-balance mb-6 sm:mb-10">
                        India’s Most Trusted Food Sourcing Network
                    </h1>
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-lg md:text-[1.35rem] lg:text-[1.2rem] text-slate-700 mb-8 sm:mb-16 max-w-2xl mx-auto text-pretty leading-[1.6] font-light opacity-90">
                        From farm to factory - FarMart connects buyers, suppliers, and logistics in one trusted platform.
                    </p>
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <button className="w-full sm:w-auto px-8 py-3.5 sm:py-4 btn-premium text-white font-bold transition-all flex items-center justify-center gap-3 group text-base sm:text-lg">
                        Start sourcing
                    </button>
                    <button className="w-full sm:w-auto px-9 py-3.5 sm:py-4 bg-white/80 text-brand-ink border-2 border-slate-200/50 backdrop-blur-sm font-bold transition-all flex items-center justify-center gap-3 group text-base sm:text-lg hover:border-brand-mint/50">
                        See how it works
                        <HugeiconsIcon icon={ArrowRight} size={20} />
                    </button>
                </Motion.div>

            </div>
        </section>
    );
}
