import express from 'express' //importar express
import config from './config' //importar el archivo

import productsRoutes from './routes/products.routes'



const app = express() //ejecutando el modulo para poder configurar el servidor attraves de este objeto

// settings
app.set('port', config.port)

// middlewares
app.use(express.json()) //app quiero que utilice express.json
app.use(express.urlencoded({extended: false}))


app.use(productsRoutes)

export default app //exporto app para poder utilizarlo donde vaya a inicializar el proyecto (index.js)

