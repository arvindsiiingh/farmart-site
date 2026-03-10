import { HugeiconsIcon } from '@hugeicons/react';
import { Clock, FileText, Activity, ShieldCheck } from '@hugeicons/core-free-icons';
import { motion as Motion } from 'framer-motion';

const trustFeatures = [
    {
        title: 'Payments 1–4 hours',
        description: 'Accelerated settlement infrastructure ensuring liquidity and cash flow stability for our supplier network.',
        icon: Clock,
    },
    {
        title: 'Instant invoicing and e-way bills',
        description: 'Automated generation and compliance routing for seamless multi-state transit and tax reconciliation.',
        icon: FileText,
    },
    {
        title: 'Real-time ledger visibility',
        description: 'See every transaction in real time on your dashboard — up-to-the-second, always accurate.',
        icon: Activity,
    },
    {
        title: 'Automated KYC within 5 mins',
        description: 'Onboard your vendors in minutes with AI-powered identity checks — no paperwork, no delays.',
        icon: ShieldCheck,
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function SupplierTrust() {
    return (
        <section className="py-24 md:py-32 bg-brand-ink text-balance">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-3xl mb-16 md:mb-24"
                >
                    <div className="text-white font-semibold tracking-wide uppercase text-xs mb-3">
                        Built for Suppliers
                    </div>
                    <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold text-white tracking-tight leading-[0.95] mb-8">
                        Why 10,000+ suppliers trust FarMart
                    </h2>
                    <p className="text-lg md:text-xl text-brand-cream/80 font-light leading-relaxed max-w-2xl text-pretty">
                        We give your business the payment speed, compliance tools, and real-time visibility it needs to run smoothly — at any scale.
                    </p>
                </Motion.div>

                <Motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {trustFeatures.map((feature, index) => {
                        return (
                            <Motion.div
                                variants={itemVariants}
                                key={index}
                                className="bg-brand-ink border p- lg:p-12 flex flex-col sm:flex-row gap-8 items-start hover:border-brand-mint/40 transition-colors " style={{ borderColor: '#323734' }}
                            >
                                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-brand-cream text-brand-ink shadow-lg">
                                    <HugeiconsIcon icon={feature.icon} size={28} strokeWidth={1.6} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-cream mb-4 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-brand-cream/70 leading-relaxed font-light text-pretty text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            </Motion.div>
                        );
                    })}
                </Motion.div>
            </div>
        </section>
    );
}
