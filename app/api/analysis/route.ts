import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { fen } = await request.json();
    return NextResponse.json({
        fen,
        analysis: `Best move: e2e4\nEvaluation: +0.28\nNotes: Prioritize development and central control.`
    });
}

export async function GET() {
    return NextResponse.json({ status: 'ready', version: '1.0.0' });
}
