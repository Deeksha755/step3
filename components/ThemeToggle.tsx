'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const html = document.documentElement;
        html.classList.toggle('dark', isDark);
    }, [isDark]);

    return (
        <button
            type="button"
            onClick={() => setIsDark((current) => !current)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 hover:bg-white/10"
        >
            <span>{isDark ? 'Dark' : 'Light'}</span>
        </button>
    );
}
