'use client';

import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import HeroBoard from './HeroBoard';
import HeroContent from './HeroContent';

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <AnimatedBackground />
            <div className="page-container relative z-10 py-20 sm:py-24 lg:py-32">
                <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="max-w-2xl"
                    >
                        <HeroContent />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                        className="relative mx-auto w-full max-w-[580px]"
                    >
                        <HeroBoard />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
