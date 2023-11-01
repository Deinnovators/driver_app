import { socketURL } from '@app/config';
import { TransportsEvents } from '@app/constants/events';
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

  startTrip(trip: any) {
    this.io?.emit(TransportsEvents.start, trip);
  }
  updateTrip(trip: any) {
    this.io?.emit(TransportsEvents.update, trip);
  }

  finishTrip(trip: any) {
    this.io?.emit(TransportsEvents.finish, trip);
  }

  destroy() {
    if (this.io) {
      this.io.disconnect();
    }
  }
}

export const socket = new SocketService();
