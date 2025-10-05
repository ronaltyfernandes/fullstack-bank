import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

const isDocker = process.env.DB_HOST === "postgres";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || (isDocker ? "postgres" : "localhost"),
  port: 5432,
  username: process.env.DB_USER || "test",
  password: process.env.DB_PASS || "test",
  database: process.env.DB_NAME || "test",
  synchronize: true,
  logging: false,
  entities: [User],
});
