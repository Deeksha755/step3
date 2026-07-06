# XLChess

A premium chess platform experience built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Installation

```bash
npm install
npm run dev
```

## Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Socket.IO

## Folder structure

- app/ - app routes and page entry points
- components/ - reusable UI components for the homepage experience
- public/ - static assets and PWA files
- lib/ - helper modules and integrations

## Design decisions

- A dark, premium visual language with glassmorphism and soft gradients
- A hero experience designed to communicate learning, play, improvement, and community
- Motion and hover effects used sparingly to keep the interface polished and performant

## Trade-offs

- The hero is designed as a high-impact landing experience first, with deeper product sections left ready for future expansion
- Real-time multiplayer and analysis are scaffolded for integration rather than fully wired to a production backend yet

## Future improvements

- Add interactive board gameplay and live room matchmaking
- Expand the learning journey with structured lessons and personalized progress
- Connect AI analysis and profile data to a real backend service
