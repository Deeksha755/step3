import StockfishPanel from '../../components/StockfishPanel';

export default function AnalysisPage() {
    return (
        <section className="page-container py-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr]">
                <div className="glass-card p-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-accent">Analysis Studio</p>
                    <h1 className="mt-4 text-4xl font-semibold text-white">Stockfish-powered position insights</h1>
                    <p className="mt-4 text-slate-300">Run live analysis on openings, tactics, and training games with a polished interface for coaches and ambitious players.</p>
                    <StockfishPanel />
                </div>

                <aside className="space-y-6">
                    <div className="glass-card p-6">
                        <h2 className="text-xl font-semibold text-white">Quick insights</h2>
                        <ul className="mt-4 space-y-3 text-slate-300">
                            <li>Real-time centipawn evaluation</li>
                            <li>Best move suggestions</li>
                            <li>Opening context and statistics</li>
                            <li>Exportable analysis reports</li>
                        </ul>
                    </div>
                    <div className="glass-card p-6">
                        <h2 className="text-xl font-semibold text-white">Enterprise ready</h2>
                        <p className="mt-3 text-slate-300">Built for teams with secure session handling, efficient caching, and a responsive interface for tournament directors and coaching squads.</p>
                    </div>
                </aside>
            </div>
        </section>
    );
}
