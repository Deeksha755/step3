import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'XLChess | Premium Chess Platform',
    description: 'XLChess is a modern, enterprise-grade chess platform with AI analysis, real-time multiplayer, puzzles, tournaments, and premium coaching.',
    metadataBase: new URL('https://www.xlchess.com'),
    openGraph: {
        title: 'XLChess',
        description: 'A premium chess experience with analysis, puzzles, multiplayer, and enterprise-grade features.',
        type: 'website',
        url: 'https://www.xlchess.com',
        siteName: 'XLChess'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'XLChess',
        description: 'A premium chess experience with analysis, puzzles, multiplayer, and enterprise-grade features.'
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-brand-bg text-slate-100 antialiased">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
