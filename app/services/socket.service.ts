import { socketURL } from '@app/config';
import { io as sIO, Socket } from 'socket.io-client';

class SocketService {
  private io?: Socket;

  init() {
    this.io = sIO(socketURL ?? '', {
      /* these settings were for auto reconnect socket io */
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      transports: ['websocket'],
    });
    this.io.on('start_trip', d => {
      console.log(d);
    });
  }

  destroy() {
    if (this.io) {
      this.io.disconnect();
    }
  }
}

export const socket = new SocketService();
