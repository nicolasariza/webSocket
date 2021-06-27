import express, { Application } from "express";
import { createServer, Server as ServerHttp } from "http";
import cors from "cors";
import SocketIO from "./socketIO";

class Server {
    private app: Application;
    private port: string;
    private server: ServerHttp;

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '4000';
        this.server = createServer(this.app);
        new SocketIO(this.server);
        this.middlewares();
    }

    middlewares(){
        this.app.use(cors());
        
        this.app.use( express.json());

        this.app.use( express.static('public'));
    }

    public listen() {
        this.server.listen(this.port,()=>{
            console.log(`Application is running on port ${this.port}`);
        })
    }
}

export default Server;