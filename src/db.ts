import { DataSource } from "typeorm";
import { User } from "./entitys/User";

export const appDataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "siuu",
      password: "contraseña",
      database: "books",
      synchronize: true,
      entities: [User],
})



