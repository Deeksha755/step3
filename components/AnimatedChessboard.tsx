'use client';

import { useEffect, useMemo, useState } from 'react';

const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

export default function AnimatedChessboard() {
    const [highlight, setHighlight] = useState<[number, number] | null>(null);

    const squares = useMemo(
        () =>
            initialBoard.flatMap((row, rowIndex) =>
                row.map((piece, colIndex) => ({
                    piece,
                    isLight: (rowIndex + colIndex) % 2 === 0,
                    key: `${rowIndex}-${colIndex}`
                }))
            ),
        []
    );

    useEffect(() => {
        const interval = window.setInterval(() => {
            const row = Math.floor(Math.random() * 8);
            const col = Math.floor(Math.random() * 8);
            setHighlight([row, col]);
        }, 1800);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
            <div className="board-grid">
                {squares.map(({ piece, isLight, key }) => {
                    const [row, col] = key.split('-').map(Number);
                    const active = highlight?.[0] === row && highlight?.[1] === col;
                    return (
                        <button
                            key={key}
                            type="button"
                            aria-label={`Square ${row + 1}${col + 1}`}
                            className={`square ${isLight ? 'square-light' : 'square-dark'} ${active ? 'scale-[1.03] border border-brand-accent/40 shadow-glow' : ''}`}
                        >
                            <span className="text-2xl">{piece}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
