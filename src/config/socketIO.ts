import { Server as ServerHttp } from "http";
import { Server, Socket } from "socket.io";
import WebSocket from "../abstractClasses/webSocket";

class SocketIO extends WebSocket{

    private io: Server;

    constructor (serverHttp: ServerHttp) {
        super();
        this.io = this.createSocket(serverHttp);
        this.sockets();
    }

    protected createSocket(serverHttp: ServerHttp): Server {
        return new Server(serverHttp);
    }
    
    private sockets() {
        this.io.on("connection", (socket: Socket) => {
            socket.on("disconnect",()=>{
                console.log('Client disconnet', socket.id);
            });

            socket.on('send-message', (payload, callback)=>{
                callback('msg send with id 12345');
                this.io.emit('send-message', payload);
            });
        });
    }
}

export default SocketIO;
