import { getConnection, sql, queries } from '../database';


export const getProducts = async (req, res) => {

    try {

        const pool = await getConnection(); //llamo a la conexion y me retorna el pool

        const result = await pool.request().query(queries.getAllProducts); //con el pool hago una peticion (consulta)

        res.json(result.recordset);


    } catch (error) {
        res.status(500);
        res.send(error.message);
    }



};

export const createNewProduct = async (req, res) => {

    //backend recibe la peticion, para ello utilizamos una propiedad req.body la cual va a recibir datos del cliente

    const { name, description } = req.body

    let { quantity } = req.body

    if (name == null || description == null) {
        return res.status(400).json({ msg: 'Bad request. Please fill all files' })
    }

    if (quantity == null) quantity = 0;

    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .query(queries.addNewProduct)

        res.json({ name, description, quantity });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};


export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", id)
            .query(queries.getProductById)


  
        res.send(result.recordset[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }


};