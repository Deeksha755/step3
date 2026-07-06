import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/95 backdrop-blur-xl">
            <div className="page-container flex items-center justify-between py-4">
                <Link href="/" className="text-xl font-semibold tracking-tight text-white">
                    XLChess
                </Link>

                <nav className="hidden items-center gap-6 md:flex text-sm text-slate-300">
                    <Link href="/analysis" className="hover:text-white">Analysis</Link>
                    <Link href="/puzzles" className="hover:text-white">Puzzles</Link>
                    <Link href="/tournaments" className="hover:text-white">Tournaments</Link>
                    <Link href="/learn" className="hover:text-white">Learn</Link>
                    <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link href="/profile/alex" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 hover:bg-white/10">
                        Profile
                    </Link>
                </div>
            </div>
        </header>
    );
}
