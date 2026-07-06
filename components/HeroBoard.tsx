'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FloatingPieces from './FloatingPieces';

const squares = Array.from({ length: 64 }, (_, index) => index);

export default function HeroBoard() {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientY - bounds.top) / bounds.height - 0.5;
        const y = (event.clientX - bounds.left) / bounds.width - 0.5;
        setTilt({ x: x * 8, y: y * -8 });
    };

    return (
        <div
            className="relative"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        >
            <motion.div
                className="relative rounded-[2rem] border border-white/15 bg-slate-950/85 p-4 shadow-[0_30px_100px_rgba(2,6,23,0.75)] backdrop-blur-2xl"
                animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: 1 }}
                transition={{ type: 'spring', stiffness: 90, damping: 18 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/10" />
                <div className="relative rounded-[1.4rem] border border-white/10 bg-slate-900/90 p-3">
                    <div className="grid grid-cols-8 gap-1.5">
                        {squares.map((square) => {
                            const isDark = (Math.floor(square / 8) + square) % 2 === 1;
                            return (
                                <motion.div
                                    key={square}
                                    className={`aspect-square rounded-[0.7rem] ${isDark ? 'bg-slate-800/95' : 'bg-slate-100/90'}`}
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                />
                            );
                        })}
                    </div>
                </div>

                <FloatingPieces />
            </motion.div>

            <motion.div
                className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900/85 px-4 py-3 text-sm text-slate-300 shadow-[0_20px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
                <p className="font-semibold text-white">Live multiplayer</p>
                <p className="text-slate-400">Join a room instantly</p>
            </motion.div>

            <motion.div
                className="absolute -right-4 top-6 rounded-2xl border border-white/10 bg-slate-900/85 px-4 py-3 text-sm text-slate-300 shadow-[0_20px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <p className="font-semibold text-white">AI Coaching</p>
                <p className="text-slate-400">Analyze every move</p>
            </motion.div>
        </div>
    );
}
