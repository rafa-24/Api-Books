import express from "express";
import cors from "cors";
import morgan from "morgan";
import { Request, Response } from "express";
import "reflect-metadata";
import { router } from "./routes/users.routes";
import { appDataSource } from "./db";

// initialize express
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// route default
app.get('/api/v1', (req: Request, res: Response) => {
      res.send('welcome to api');
});

// routes api books
app.use(router);

// init server
async function main(): Promise<any> {
      try {
            app.listen(9000)
            await appDataSource.initialize()
                  .then(() => console.log('Conexion exitosa con la base de datos'))
            console.log(`Server on running in port ${9000}`)
      } catch (err) {
            console.error('Se han genereado errores a la hora de realizar conexion a la db', err);
      }
}

main();