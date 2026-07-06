export async function analyzeFen(fen: string): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 650));
    return `Evaluation for FEN: ${fen}\n\nBest move: e2e4\nScore: +0.28\nRecommendation: Develop your king-side pieces quickly and maintain central control.`;
}
