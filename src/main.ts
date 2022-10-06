import express from "express";
import cors from "cors";
import morgan from "morgan";
import { Request, Response } from "express";
import "reflect-metadata";
import { router } from "./routes/users.routes";
import { appDataSource } from "./db";
import { errorHandler } from "./middlewares/pre/jwt";
import { routerBooks } from "./routes/books.routes";


const app = express();

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Ruta por defecto
app.get('/api/v1', (req: Request, res: Response) => {
      res.send('welcome to api');
});

// Rutas autenticacion de usuarios
app.use(router);

// Rutas Books
app.use(routerBooks)

//middlewares manejo de errores
app.use(errorHandler)

// levantar servidor
async function main() {
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