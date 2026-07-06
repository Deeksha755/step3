'use client';

import { useEffect, useState } from 'react';
import { analyzeFen } from '../lib/stockfish';

const defaultFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export default function StockfishPanel() {
    const [fen, setFen] = useState(defaultFen);
    const [analysis, setAnalysis] = useState<string>('Loading analysis...');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        void loadAnalysis(defaultFen);
    }, []);

    const loadAnalysis = async (queryFen: string) => {
        setIsLoading(true);
        const result = await analyzeFen(queryFen);
        setAnalysis(result);
        setIsLoading(false);
    };

    return (
        <div className="mt-10 space-y-6">
            <div className="glass-card border border-white/10 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <label className="block text-sm font-medium text-slate-300">
                        FEN string
                        <input
                            value={fen}
                            onChange={(event) => setFen(event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                        />
                    </label>
                    <button
                        type="button"
                        onClick={() => void loadAnalysis(fen)}
                        className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-purple-500"
                    >
                        {isLoading ? 'Analyzing…' : 'Analyze position'}
                    </button>
                </div>
            </div>

            <div className="glass-card border border-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">Analysis result</h2>
                <p className="mt-4 text-slate-300 whitespace-pre-line">{analysis}</p>
            </div>
        </div>
    );
}
