export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-brand-bg/90 py-8">
            <div className="page-container flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} XLChess. Built for premium chess communities.</p>
                <p>Fast UI · Dark mode · PWA-ready · Secure by design</p>
            </div>
        </footer>
    );
}
