import { useAuthStore } from '@app/zustores';
import { io as sIO, Socket } from 'socket.io-client';

abstract class SocketService {
  protected io?: Socket;

  init(room?: string) {
    const { token, user } = useAuthStore.getState();
    if (!token || !user) {
      return;
    }
    // let userRoom = room ?? getUserRoom(user.id);
    // this.io = sIO(socketURL, {
    //   auth: {
    //     token,
    //   },
    //   query: {
    //     roomName: userRoom,
    //   },
    //   /* these settings were for auto reconnect socket io */
    //   // reconnection: true,
    //   // reconnectionAttempts: Infinity,
    //   // reconnectionDelay: 1000,
    //   // transports: ['websocket'],
    // });
  }
}

export default SocketService;
