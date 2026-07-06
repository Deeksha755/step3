'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
                className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
                animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-[-12%] right-[-6%] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
                animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />
        </div>
    );
}
