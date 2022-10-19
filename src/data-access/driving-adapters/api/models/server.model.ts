import { Code, StatusCode } from './status-code';
import express, { Application } from 'express';

import { HttpResponse } from './reponse.model';
import { SequelizeDB } from '@driven-adapters/DB/Sequalize/connection';
import cors from 'cors';
import { routesApp } from '../routes';

export class Server {
    private readonly app: Application;
    private readonly PORT: (string | number) = process.env.SERVER_PORT || 3000
    SERVER_UP = "Welcome to de orders api v1.0";
    SERVER_DOWN = "This server route not exists";
    constructor() {
        this.app = express();
        //Middewares
        this.middeware();
        // BD
        this.dbConnect();
        //Rutas
        this.routes();

    }

    middeware() {
        //cors
        this.app.use(cors({ origin: "*" }));
        //json
        this.app.use(express.json());

    }

    listen() {
        this.app.listen(this.PORT);
        console.log(`Server listening on PORT: ${this.PORT}`);
    }

    async dbConnect() {
        await SequelizeDB.connected();
    }

    routes() {
        this.app.use('/api', routesApp);
        this.app.all('/', (_, res) => res.status(Code.OK).send(new HttpResponse(Code.OK, StatusCode.OK, this.SERVER_UP)));
        this.app.all('*', (_, res) => res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND, StatusCode.NOT_FOUND, this.SERVER_DOWN)));
    }




}