const cards = [
    {
        title: 'Real-time multiplayer',
        description: 'Socket.IO powered lobbies, matchmaking, and live spectator feeds.'
    },
    {
        title: 'Stockfish analysis',
        description: 'Instant evaluations, suggested continuations, and opening trends.'
    },
    {
        title: 'PWA support',
        description: 'Installable on desktop and mobile with offline-friendly UI caching.'
    },
    {
        title: 'Security-first architecture',
        description: 'Headers, telemetry control, and modern best practices for enterprise rollouts.'
    }
];

export default function FeatureGrid() {
    return (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
                <article key={card.title} className="glass-card p-6">
                    <span className="inline-flex rounded-full bg-brand-accent/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-brand-accent">Feature</span>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-slate-300">{card.description}</p>
                </article>
            ))}
        </div>
    );
}
