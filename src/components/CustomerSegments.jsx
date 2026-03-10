import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Factory, KitchenUtensilsIcon, Tag, Home, ArrowRight, CheckCircle } from '@hugeicons/core-free-icons';
import { motion as Motion } from 'framer-motion';

// Import buyer logos
import buyer1 from '../assets/buyers/buyer names-1.png';
import buyer3 from '../assets/buyers/buyer names-3.png';
import buyer4 from '../assets/buyers/buyer names-4.png';
import buyer5 from '../assets/buyers/buyer names-5.png';
import buyer6 from '../assets/buyers/buyer names-6.png';
import buyer7 from '../assets/buyers/buyer names-7.png';
import buyerMain from '../assets/buyers/buyer names.png';

// Import segment images
import rawMaterialImg from '../assets/customer/raw material.png';
import horecaImg from '../assets/customer/horeca.png';
import privateLabelImg from '../assets/customer/white label.png';
import householdImg from '../assets/customer/cpg.png';

const segments = [
    {
        id: 'food-companies',
        label: 'Food Companies',
        icon: Factory,
        summaryTitle: 'Raw materials sourced ethically with traceability',
        summaryBody:
            'Trusted sourcing rails for multinational and regional food brands, with transparency from farm gate to factory gate.',
        bullets: [
            'Trusted by A-rated buyers in India and overseas',
            'Source 20+ commodities from a network of 10,000+ suppliers',
            'Complete transparency and traceability at every step',
        ],
        rightLabel: 'Raw Materials',
        image: rawMaterialImg,
        tickerLabel: 'Trusted by leading buyers',
        tickerLogos: [buyer1, buyer3, buyer4, buyer5, buyer6, buyer7, buyerMain],
        tickerItems: ['Adani', 'Patanjali', 'Globus', 'ITC', 'Cargill', 'Marico', 'Olam'],
    },
    {
        id: 'horeca',
        label: 'HoReCa',
        icon: KitchenUtensilsIcon,
        summaryTitle: 'Never miss a service — reliable supply for hotels, restaurants & caterers',
        summaryBody:
            'Precision fulfilment infrastructure for hotels, restaurants, and caterers that can’t afford to miss a service.',
        bullets: [
            'Daily scheduled deliveries across key metro clusters',
            'Menu-level consistency with spec-locked SKUs',
            'Unified invoicing and simplified reconciliation',
        ],
        rightLabel: 'HoReCa Supply',
        image: horecaImg,
        tickerLabel: 'Key HoReCa partners',
        tickerItems: ['Flagship Hotels', 'Cloud Kitchens', 'Quick Service Brands', 'Institutional Caterers'],
    },
    {
        id: 'private-labels',
        label: 'Private Labels',
        icon: Tag,
        summaryTitle: 'Private label programs with true upstream control',
        summaryBody:
            'Build and scale your own brands with transparent sourcing, compliant manufacturing, and packaging at scale.',
        bullets: [
            'End-to-end traceability for every batch',
            'Custom packaging and brand-ready presentation',
            'Dedicated account and quality teams',
        ],
        rightLabel: 'Private Label Programs',
        image: privateLabelImg,
        tickerLabel: 'Private label collaborations',
        tickerItems: ['Retail Chains', 'D2C Brands', 'Export Labels', 'Regional Brands'],
    },
    {
        id: 'households',
        label: 'Households',
        icon: Home,
        summaryTitle: 'Fresh, traceable groceries delivered to your door',
        summaryBody:
            'Consumer-ready packs that bring the same supply chain discipline to everyday kitchens.',
        bullets: [
            'Farm-to-table freshness with cold-chain logistics',
            'Curated seasonal and regional selections',
            'Flexible subscription and on-demand models',
        ],
        rightLabel: 'Household SKUs',
        image: householdImg,
        tickerLabel: 'Our SKUs',
        tickerItems: ['Staples', 'Fresh Produce', 'Ready-to-Cook', 'Healthy Snacking'],
    },
];

export default function CustomerSegments() {
    const [activeId, setActiveId] = useState(segments[0].id);
    const active = segments.find((s) => s.id === activeId) ?? segments[0];

    return (
        <section className="py-24 md:py-32 bg-brand-cream border-t border-brand-mint/40 relative overflow-hidden text-balance" id="segments">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-[-12%] w-[620px] h-[620px] opacity-[0.08] mix-blend-multiply bg-brand-mint rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-12%] left-[-12%] w-[540px] h-[540px] opacity-[0.08] mix-blend-multiply bg-brand-harvest rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="text-brand-600 font-semibold tracking-wide uppercase text-xs mb-3">
                        What we do
                    </div>
                    <h2 className="text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold text-brand-ink mb-6 tracking-tight leading-[1.05]">
                        Solutions for every part of the food chain
                    </h2>
                    <p className="text-base md:text-lg text-slate-700 font-light leading-relaxed text-pretty">
                        Whether you are a multinational food company or a neighborhood household, FarMart delivers
                        quality, transparency, and speed across the supply chain.
                    </p>
                </Motion.div>

                {/* Segment tabs */}
                <div
                    className="flex flex-nowrap overflow-x-auto justify-start sm:justify-center gap-3 mb-8 md:mb-10 pb-1 scrollbar-none"
                    role="tablist"
                    aria-label="Customer segments"
                >
                    {segments.map((segment) => {
                        const isActive = segment.id === activeId;
                        return (
                            <button
                                key={segment.id}
                                type="button"
                                onClick={() => setActiveId(segment.id)}
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`segment-panel-${segment.id}`}
                                id={`segment-tab-${segment.id}`}
                                className={
                                    isActive
                                        ? 'inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-2 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50'
                                        : 'inline-flex items-center gap-2 bg-white text-slate-700 px-5 py-2 text-sm font-bold border border-slate-200 opacity-50 hover:opacity-100 hover:border-brand-mint/70 hover:text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all'
                                }
                            >
                                <span className={`flex h-6 w-6 items-center justify-center ${isActive ? 'bg-brand-600' : 'bg-white'}`}>
                                    <HugeiconsIcon icon={segment.icon} size={18} />
                                </span>
                                {segment.label}
                            </button>
                        );
                    })}
                </div>

                {/* Main card + right pane */}
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="bg-white border border-slate-200 overflow-hidden0"
                    role="tabpanel"
                    id={`segment-panel-${active.id}`}
                    aria-labelledby={`segment-tab-${active.id}`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                        {/* Left content */}
                        <div className="px-6 sm:px-8 lg:px-10 py-8 md:py-10 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-slate-100 bg-white">
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-[1.6rem] font-semibold text-brand-ink leading-snug mb-3">
                                    {active.summaryTitle}
                                </h3>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                    {active.summaryBody}
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {active.bullets.map((bullet) => (
                                    <li key={bullet} className="flex items-start text-sm text-slate-700">
                                        <HugeiconsIcon
                                            icon={CheckCircle}
                                            size={16}
                                            className="mr-3 mt-0.5 shrink-0 text-brand-600"
                                            strokeWidth={1.6}
                                        />
                                        <span className="font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    className="btn-premium text-white text-sm font-bold px-8 py-3.5 flex items-center justify-center gap-2"
                                >
                                    Learn more
                                    <HugeiconsIcon icon={ArrowRight} size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Right visual */}
                        <div className="relative h-[300px] md:h-full overflow-hidden">
                            <img
                                src={active.image}
                                alt={active.label}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Ticker */}
                    <div className="border-t border-slate-200 bg-brand-cream/60">
                        <div className="px-6 sm:px-8 lg:px-10 py-3 flex flex-col md:flex-row md:items-center gap-3">
                            <div className="text-xs font-semibold tracking-wide text-slate-500 uppercase whitespace-nowrap">
                                {active.tickerLabel}
                            </div>
                            <div className="relative overflow-hidden flex-1">
                                <div className="ticker flex items-center gap-12 text-sm text-slate-700">
                                    {active.id === 'food-companies' && active.tickerLogos ? (
                                        // Specific logo ticker for food companies
                                        [...active.tickerLogos, ...active.tickerLogos].map((logo, idx) => (
                                            <div
                                                key={`logo-${idx}`}
                                                className="flex items-center justify-center h-12 min-w-[120px]"
                                            >
                                                <img
                                                    src={logo}
                                                    alt={active.tickerItems?.[idx % active.tickerItems.length] ?? 'Buyer'}
                                                    className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        // Default text ticker for other segments
                                        [...active.tickerItems, ...active.tickerItems].map((name, idx) => (
                                            <div
                                                key={`${name}-${idx}`}
                                                className="flex items-center gap-3 whitespace-nowrap"
                                            >
                                                <div className="h-2 w-2 rounded-full bg-brand-harvest/80" />
                                                <span className="font-semibold text-slate-600">{name}</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Motion.div>

            </div>
        </section>
    );
}
