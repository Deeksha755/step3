'use client';

import { motion } from 'framer-motion';

const pieces = [
    { label: '♔', className: 'left-2 top-8 text-4xl text-fuchsia-300/80' },
    { label: '♛', className: 'right-3 top-16 text-4xl text-violet-300/70' },
    { label: '♟', className: 'bottom-6 left-8 text-3xl text-slate-200/80' },
    { label: '♞', className: 'bottom-10 right-10 text-3xl text-indigo-200/80' }
];

export default function FloatingPieces() {
    return (
        <div className="pointer-events-none absolute inset-0">
            {pieces.map(({ label, className }) => (
                <motion.div
                    key={label}
                    className={`absolute ${className}`}
                    animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                >
                    {label}
                </motion.div>
            ))}
        </div>
    );
}
