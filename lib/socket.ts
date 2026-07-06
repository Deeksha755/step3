'use client';

import { io, type Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function connectSocket(url = process.env.NEXT_PUBLIC_SOCKET_URL ?? 'http://localhost:3000') {
    if (typeof window === 'undefined') {
        return null;
    }

    if (!socket) {
        socket = io(url, {
            transports: ['websocket'],
            autoConnect: false
        });
    }

    socket.connect();
    return socket;
}

export function disconnectSocket() {
    if (!socket) return;
    socket.disconnect();
    socket = null;
}
