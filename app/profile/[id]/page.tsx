import { notFound } from 'next/navigation';

type Profile = {
    name: string;
    role: string;
    rating: number;
    achievements: number;
    games: number;
};

const profiles: Record<string, Profile> = {
    alex: { name: 'Alex Novik', role: 'Community Manager', rating: 2140, achievements: 16, games: 1245 },
    maya: { name: 'Maya Chen', role: 'Head Coach', rating: 2228, achievements: 21, games: 1890 }
};

export default function ProfilePage({ params }: { params: { id: string } }) {
    const profile = profiles[params.id];

    if (!profile) {
        notFound();
    }

    return (
        <section className="page-container py-16 lg:py-24">
            <div className="glass-card p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-brand-accent">User profile</p>
                <h1 className="mt-4 text-4xl font-semibold text-white">{profile.name}</h1>
                <p className="mt-3 text-slate-300">{profile.role} · Rating {profile.rating}</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                    <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">Games</p>
                        <p className="mt-4 text-3xl font-semibold text-white">{profile.games}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">Achievements</p>
                        <p className="mt-4 text-3xl font-semibold text-white">{profile.achievements}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 shadow-soft">
                        <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">Subscription</p>
                        <p className="mt-4 text-3xl font-semibold text-white">Platinum</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
