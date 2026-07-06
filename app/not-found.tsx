import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="page-container py-24 text-center">
            <h1 className="text-6xl font-extrabold text-white">404</h1>
            <p className="mt-4 text-lg text-slate-300">Page not found — the rook took a different route.</p>
            <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500">
                Back to home
            </Link>
        </section>
    );
}
