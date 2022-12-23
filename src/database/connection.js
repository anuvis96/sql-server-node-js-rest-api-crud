import sql from 'mssql';  //importo modulo
import config from '../config';

const dbSettings = {  //configurando bd

    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDataBase,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export async function getConnection() {  //funcion para generar la conexion

    try {
        const pool = await sql.connect(dbSettings); //obtenemos un pool
        return pool;
        //const result = await pool.request().query('SELECT 1'); //con ese pool podemos generar consultas
    } catch (error) {
        console.log(result);
    }

}

export { sql };