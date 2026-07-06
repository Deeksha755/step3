'use client';

import { BarChart3, MessageCircleMore, Sparkles, Trophy } from 'lucide-react';

const stats = [
    { label: 'Live games', value: '24/7', icon: MessageCircleMore },
    { label: 'Lessons', value: '1,000+', icon: Sparkles },
    { label: 'Improvement', value: '93%', icon: BarChart3 },
    { label: 'Achievements', value: '140+', icon: Trophy }
];

export default function HeroStats() {
    return (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl">
                    <div className="flex items-center gap-3 text-slate-300">
                        <div className="rounded-xl bg-white/10 p-2 text-brand-accent">
                            <Icon className="h-4 w-4" />
                        </div>
                        <p className="text-sm text-slate-400">{label}</p>
                    </div>
                    <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
                </div>
            ))}
        </div>
    );
}
