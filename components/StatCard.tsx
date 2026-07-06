type StatCardProps = {
    label: string;
    value: string;
    delta: string;
};

export default function StatCard({ label, value, delta }: StatCardProps) {
    return (
        <div className="rounded-[2rem] bg-slate-950/80 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-accent">{label}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
            <p className="mt-2 text-sm text-slate-400">Change: {delta}</p>
        </div>
    );
}
