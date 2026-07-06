import Link from 'next/link';
import AnimatedChessboard from '../../components/AnimatedChessboard';

const puzzles = [
    { id: 'tactical-switch', title: 'Tactical Switch', theme: 'Intermediate tactics with dynamic positions' },
    { id: 'endgame-grind', title: 'Endgame Grind', theme: 'Technique-focused endings for conversion' },
    { id: 'opening-press', title: 'Opening Press', theme: 'Critical opening decisions and theory traps' }
];

export default function PuzzlesPage() {
    return (
        <section className="page-container py-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
                <div className="space-y-6">
                    <div className="glass-card p-8">
                        <p className="text-xs uppercase tracking-[0.25em] text-brand-accent">Puzzle Lab</p>
                        <h1 className="mt-4 text-4xl font-semibold text-white">Solve chess puzzles with coaching feedback</h1>
                        <p className="mt-4 text-slate-300">A puzzle system designed for engagement and progression, curated to surface pattern recognition and decision-making under pressure.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {puzzles.map((puzzle) => (
                            <Link key={puzzle.id} href={`/puzzles/${puzzle.id}`} className="glass-card p-5 hover:-translate-y-1">
                                <h2 className="text-lg font-semibold text-white">{puzzle.title}</h2>
                                <p className="mt-3 text-slate-300">{puzzle.theme}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="glass-card p-6">
                    <AnimatedChessboard />
                    <div className="mt-6 rounded-3xl bg-slate-950/85 p-6 text-slate-300 shadow-soft">
                        <h2 className="text-xl font-semibold text-white">Progress tracking</h2>
                        <p className="mt-3">Track puzzle streaks, accuracy, opening weakness, and coaching suggestions in one premium dashboard view.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
