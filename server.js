const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    });

    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log('Socket connected:', socket.id);

        socket.on('join-room', (room) => {
            if (room) {
                socket.join(room);
                socket.to(room).emit('player-joined', { playerId: socket.id });
            }
        });

        socket.on('move', (payload) => {
            if (payload?.room) {
                socket.to(payload.room).emit('opponent-move', payload);
            }
        });

        socket.on('chat', (message) => {
            if (message?.room) {
                socket.to(message.room).emit('chat-message', message);
            }
        });

        socket.on('disconnect', () => {
            console.log('Socket disconnected:', socket.id);
        });
    });

    const port = parseInt(process.env.PORT || '3000', 10);
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
