import { HugeiconsIcon } from '@hugeicons/react';
import { LineChart, Lightning, ShieldCheck, MapPin } from '@hugeicons/core-free-icons';

export default function PlatformCapabilities() {
    return (
        <section className="py-24 bg-white border-t border-slate-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 md:flex justify-between items-end">
                    <div className="max-w-2xl">
                        <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Platform Capabilities</h2>
                        <h3 className="text-[clamp(1.875rem,5.5vw,3.75rem)] font-extrabold text-brand-ink mb-6 tracking-tight leading-[1.05]">
                            End-to-end tools built for food &amp; agri businesses.
                        </h3>
                        <p className="text-lg text-slate-700">
                            A comprehensive suite of tools designed specifically for the complexities of the food and agriculture supply chain.
                        </p>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 auto-rows-[minmax(250px,auto)] md:auto-rows-[300px]">

                    {/* Large Card 1 */}
                    <div className="md:col-span-2 relative bg-brand-ink border border-brand-mint/60 overflow-hidden group p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
                        <div className="relative z-10 w-full md:w-2/3">
                            <div className="bg-brand-cream w-12 h-12 flex items-center justify-center mb-4 sm:mb-6 border border-brand-mint/50">
                                <HugeiconsIcon icon={MapPin} size={24} className="text-brand-600" />
                            </div>
                            <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-cream mb-3 sm:mb-4 tracking-tight">Real-time Logistics Visibility</h4>
                            <p className="text-brand-cream/80 text-base sm:text-lg leading-relaxed">Track shipments from farm gate to factory floor with GPS integration, temperature monitoring, and predictive ETAs.</p>
                        </div>
                    </div>

                    {/* Small Card 1 */}
                    <div className="relative bg-brand-ink border border-brand-mint/60 overflow-hidden p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
                        <div className="bg-brand-cream w-12 h-12 flex items-center justify-center mb-4 sm:mb-6 border border-brand-mint/50">
                            <HugeiconsIcon icon={Lightning} size={24} className="text-brand-600" />
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-brand-cream mb-3">Instant Settlements</h4>
                        <p className="text-brand-cream/80 text-sm sm:text-base">Automate grower payments and financial reconciliation instantly via integrated clearing networks.</p>
                    </div>

                    {/* Small Card 2 */}
                    <div className="relative bg-brand-ink border border-brand-600/60 overflow-hidden p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
                        <div className="relative z-10">
                            <div className="bg-brand-cream w-12 h-12 flex items-center justify-center mb-4 sm:mb-6 border border-brand-mint/50">
                                <HugeiconsIcon icon={ShieldCheck} size={24} className="text-brand-600" />
                            </div>
                            <h4 className="text-xl sm:text-2xl font-bold text-brand-cream mb-3">Quality Assurance</h4>
                            <p className="text-brand-cream/80 text-sm sm:text-base">Digitize grading standards, generate quality certificates, and meet food safety requirements with ease.</p>
                        </div>
                    </div>

                    {/* Large Card 2 */}
                    <div className="md:col-span-2 relative bg-brand-ink border border-brand-harvest/70 overflow-hidden p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
                        <div className="bg-brand-cream w-12 h-12 flex items-center justify-center mb-4 sm:mb-6 border border-brand-mint/50">
                            <HugeiconsIcon icon={LineChart} size={24} className="text-brand-600" />
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-cream mb-3 sm:mb-4 tracking-tight">AI-Powered Demand Forecasting</h4>
                        <p className="text-brand-cream/80 text-base sm:text-lg leading-relaxed">Use historical data and market signals to plan smarter procurement, cut waste, and negotiate pricing with confidence.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
