import Link from 'next/link';

export default function AICoachPage() {
    return (
        <section className="page-container py-16 lg:py-24">
            <div className="glass-card p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-brand-accent">AI Coach</p>
                <h1 className="mt-4 text-4xl font-semibold text-white">Personalized coaching with machine intelligence</h1>
                <p className="mt-4 text-slate-300">Provide AI-assisted recommendations, opening suggestions, training reminders, and adaptive feedback tailored to each player.</p>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <h2 className="text-xl font-semibold text-white">Insights</h2>
                        <p className="mt-3">Automated game summaries show growth, mistakes, and tactical themes.</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <h2 className="text-xl font-semibold text-white">Goals</h2>
                        <p className="mt-3">Set training targets, track metrics, and unlock achievement milestones.</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <h2 className="text-xl font-semibold text-white">Personal plans</h2>
                        <p className="mt-3">Support coaches with data-driven lesson planning and follow-up.</p>
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link href="/learn" className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500">
                        Explore learning paths
                    </Link>
                    <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100">
                        Open coach dashboard
                    </Link>
                </div>
            </div>
        </section>
    );
}
