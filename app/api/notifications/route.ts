import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        notifications: [
            { id: '1', title: 'New tournament scheduled', description: 'Grand Arena Cup begins tomorrow at 18:00 UTC.' },
            { id: '2', title: 'Puzzle streak unlocked', description: 'You have solved 12 puzzles in a row. Keep the momentum!' },
            { id: '3', title: 'Security update', description: '2FA support has been strengthened for premium accounts.' }
        ]
    });
}
