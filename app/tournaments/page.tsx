import Link from 'next/link';

const tournaments = [
    { name: 'Grand Arena Cup', entry: 'Invite-only', prize: '$12,000' },
    { name: 'Rapid Blitz League', entry: 'Open enrollment', prize: '$5,000' },
    { name: 'Arena Pro Series', entry: 'Qualification match', prize: '$8,500' }
];

export default function TournamentsPage() {
    return (
        <section className="page-container py-16 lg:py-24">
            <div className="space-y-6">
                <div className="glass-card p-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-accent">Tournaments</p>
                    <h1 className="mt-4 text-4xl font-semibold text-white">Launch competitive events with next-level tools</h1>
                    <p className="mt-4 text-slate-300">Organize schedules, bracket flows, real-time results, and custom prize pools in a polished organizer experience.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {tournaments.map((tournament) => (
                        <div key={tournament.name} className="glass-card p-6">
                            <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">{tournament.entry}</p>
                            <h2 className="mt-4 text-2xl font-semibold text-white">{tournament.name}</h2>
                            <p className="mt-3 text-slate-300">Prize fund: {tournament.prize}</p>
                            <Link href="/dashboard" className="mt-6 inline-flex rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">
                                Manage event
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
