import express from "express";
import morgan from "morgan";
import {useExpressServer} from "@prograpedia/routing-controllers";

const rootDir = import.meta.dirname || import.meta.url.replace(/file:\/\/|\/app.[jt]s/g, '');

const app = express();
app.use(morgan('dev'));

await useExpressServer(app, {
    controllers: [`${rootDir}/controllers/*.[jt]s`],
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: any) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
