import knex from "knex"
import { config } from "dotenv"

config()

export class BaseDatabase {
     static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            port: 3306,
            multipleStatements: true
        }
    })

    protected tables = {
        users: "Project_users",}
}