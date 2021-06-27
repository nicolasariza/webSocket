import { Server } from "http";

abstract class WebSocket{
    protected abstract createSocket(serverHttp: Server): any;
}

export default WebSocket;
