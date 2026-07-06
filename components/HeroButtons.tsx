'use client';

import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function HeroButtons() {
    return (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
                href="/analysis"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-accent via-violet-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(124,58,237,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(124,58,237,0.45)]"
            >
                Play Free
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>

            <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/12"
            >
                <PlayCircle className="h-4 w-4" />
                Start Learning
            </Link>
        </div>
    );
}
