import StatCard from '../../components/StatCard';

const metrics = [
    { label: 'Active players', value: '27.4K', delta: '+18%' },
    { label: 'Tournaments live', value: '8', delta: '+4' },
    { label: 'Monthly sessions', value: '130K', delta: '+22%' },
    { label: 'Engagement score', value: '89/100', delta: '+6' }
];

export default function DashboardPage() {
    return (
        <section className="page-container py-16 lg:py-24">
            <div className="glass-card p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-brand-accent">Admin dashboard</p>
                <h1 className="mt-4 text-4xl font-semibold text-white">Insights for operators and teams</h1>
                <p className="mt-4 text-slate-300">Monitor platform performance, subscription growth, engagement, and operational metrics through a secure, responsive interface.</p>
                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {metrics.map((metric) => (
                        <StatCard key={metric.label} label={metric.label} value={metric.value} delta={metric.delta} />
                    ))}
                </div>
            </div>
        </section>
    );
}
