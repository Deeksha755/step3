import { notFound } from 'next/navigation';

type Puzzle = {
    name: string;
    description: string;
};

const puzzleData: Record<string, Puzzle> = {
    'tactical-switch': {
        name: 'Tactical Switch',
        description: 'A calculated tactical position that demands fast and precise decisions.'
    },
    'endgame-grind': {
        name: 'Endgame Grind',
        description: 'A technical ending study designed to improve endgame mastery.'
    },
    'opening-press': {
        name: 'Opening Press',
        description: 'A high-pressure opening challenge focusing on critical preparation.'
    }
};

export default function PuzzleDetail({ params }: { params: { id: string } }) {
    const puzzle = puzzleData[params.id];

    if (!puzzle) {
        notFound();
    }

    return (
        <section className="page-container py-16 lg:py-24">
            <div className="glass-card p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-brand-accent">Puzzle detail</p>
                <h1 className="mt-4 text-4xl font-semibold text-white">{puzzle.name}</h1>
                <p className="mt-4 text-slate-300">{puzzle.description}</p>
                <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
                    <h2 className="text-2xl font-semibold text-white">Interactive challenge</h2>
                    <p className="mt-4 text-slate-300">This placeholder page represents how each puzzle can be expanded into a fully interactive training experience with board playback, hint mode, and coach commentary.</p>
                </div>
            </div>
        </section>
    );
}
