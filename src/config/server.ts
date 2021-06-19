import express, { Application } from "express";
import { createServer, Server as ServerHttp } from "http";
import { Server as ServerIO, Socket } from "socket.io";
import cors from "cors";
class Server {
    private app: Application;
    private port: string;
    private server: ServerHttp;
    private io: ServerIO;

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '4000';
        this.server = createServer(this.app);
        this.io = this.initSocket();
        this.middlewares();
        this.sockets();
    }

    middlewares(){
        this.app.use(cors());
        
        this.app.use( express.json());

        this.app.use( express.static('public'));
    }

    private initSocket (): ServerIO {
        return new ServerIO(this.server);
    }

    sockets() {
        this.io.on("connection", (socket: Socket) => {
            console.log('Client connected', socket.id);

            socket.on("disconnect",()=>{
                console.log('Client disconnet', socket.id);
            })
        });
    }

    public listen() {
        this.server.listen(this.port,()=>{
            console.log(`Application is running on port ${this.port}`);
        })
    }
}

export default Server;