import express, { Application } from "express";
import cors from "cors";
class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '4000';

        this.middlewares()
    }

    middlewares(){
        this.app.use(cors());
        
        this.app.use( express.json());

        this.app.use( express.static('public'));
    }

    listen() {
        this.app.listen(this.port,()=>{
            console.log(`Application is running on port ${this.port}`);
        })
    }
}

export default Server;