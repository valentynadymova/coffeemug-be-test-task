import express from 'express';
import routes from '../routes';
import helmet from 'helmet';

function createServer(){
    const app=express();
    app.use(helmet());
    app.use(express.json());
    routes(app);
    return app;
}

export default createServer;

