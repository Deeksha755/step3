import Link from 'next/link';
import FeatureGrid from '../components/FeatureGrid';
import Hero from '../components/Hero';

export default function HomePage() {
    return (
        <div className="pb-20">
            <Hero />

            <section className="page-container mt-8 lg:mt-16">
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_90px_rgba(2,6,23,0.4)] backdrop-blur-xl">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">Why players stay</p>
                            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                                Everything you need to learn faster and play smarter.
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                From AI-powered analysis to live rooms and premium lessons, XLChess gives your game a serious upgrade.
                            </p>
                        </div>

                        <Link
                            href="/puzzles"
                            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/15"
                        >
                            Explore the experience
                        </Link>
                    </div>

                    <div className="mt-10">
                        <FeatureGrid />
                    </div>
                </div>
            </section>
        </div>
    );
}
