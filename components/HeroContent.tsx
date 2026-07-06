'use client';

import { ArrowRight, BookOpen, Cpu, ShieldCheck, Sparkles, Users } from 'lucide-react';
import HeroButtons from './HeroButtons';
import HeroStats from './HeroStats';

const trustPoints = [
    { label: '50K+ players', icon: Users },
    { label: '1K+ lessons', icon: BookOpen },
    { label: 'AI analysis', icon: Cpu },
    { label: 'Secure by design', icon: ShieldCheck }
];

export default function HeroContent() {
    return (
        <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.35)] backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-fuchsia-300" />
                Premium chess for ambitious learners and clubs
            </div>

            <h1 className="mt-8 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Learn. Play. Rise.
                <span className="mt-3 block bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                    Master chess like never before.
                </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Join a modern chess platform built for serious improvement—play online, study openings, sharpen tactics, and grow through live coaching and AI guidance.
            </p>

            <HeroButtons />

            <div className="mt-8 flex flex-wrap gap-3">
                {trustPoints.map(({ label, icon: Icon }) => (
                    <div key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/75 px-3 py-2 text-sm text-slate-300 backdrop-blur">
                        <Icon className="h-4 w-4 text-brand-accent" />
                        {label}
                    </div>
                ))}
            </div>

            <HeroStats />
        </div>
    );
}
