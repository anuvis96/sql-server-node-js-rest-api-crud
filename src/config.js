import {config} from "dotenv"
config()


export default{

    port: process.env.port || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD|| '',
    dbServer: process.env.DB_SERVER|| '',
    dbDataBase: process.env.DB_DATABASE|| '',

}