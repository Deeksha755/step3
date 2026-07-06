export default function LearnPage() {
    return (
        <section className="page-container py-16 lg:py-24">
            <div className="glass-card p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-brand-accent">Learning Center</p>
                <h1 className="mt-4 text-4xl font-semibold text-white">Comprehensive chess education for every level</h1>
                <p className="mt-4 text-slate-300">Deliver curated lessons, opening drills, master class videos, and progression paths for students and members.</p>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <article className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <h2 className="text-xl font-semibold text-white">Opening explorer</h2>
                        <p className="mt-3">Visualize opening trees with master statistics and interactive filters.</p>
                    </article>
                    <article className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <h2 className="text-xl font-semibold text-white">Tactical drills</h2>
                        <p className="mt-3">Build pattern recognition through adaptive puzzles and review feedback.</p>
                    </article>
                    <article className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <h2 className="text-xl font-semibold text-white">Video curriculum</h2>
                        <p className="mt-3">Structured paths for beginners to advanced players with coach-led sessions.</p>
                    </article>
                    <article className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <h2 className="text-xl font-semibold text-white">Performance reports</h2>
                        <p className="mt-3">Track learning progress, strengths, and areas that need reinforcement.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
