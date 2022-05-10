import { DataSource } from "typeorm";
import config from "../config";

const { MYSQL_HOST, MYSQL_PROT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = config;

const dataSource = new DataSource({
  type: "mysql",
  host: MYSQL_HOST,
  port: Number(MYSQL_PROT),
  username: MYSQL_USER,
  password: MYSQL_PWD,
  database: MYSQL_DB,
  synchronize: process.env.NODE_ENV === "development",
  entities: ["src/entity/*.ts"],
});

export default dataSource;