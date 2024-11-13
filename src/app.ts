import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { useExpressServer } from "@prograpedia/routing-controllers";
import path from "path";

const rootDir = path.dirname(require.resolve('./app.ts'));

const app = express();

app.use(morgan('dev'));

await useExpressServer(app, {
    controllers: [`${rootDir}/controllers/*.[jt]s`],
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Error occurred:', err.stack);

    res.status(500).send({
        message: 'Something broke!',
        error: process.env.NODE_ENV === 'production' ? null : err.stack, // Hide stack trace in production
    });
});

export default app;
